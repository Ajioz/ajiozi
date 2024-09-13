import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Scroll from "./scroll";
import { showItem } from "@/components/lib/helpers";
import styles from "./MessageDetail.module.css";
import { fetchMessage, fetchMessages } from "@/utils/util-fetch";

export async function getStaticProps({ params }) {
  const messages = await fetchMessages();
  const messageID = params?.messageID || messages[0]?._id || null;
  const message = messageID ? await fetchMessage(messageID) : null;

  return {
    props: {
      initialMessages: messages || [],
      initialMessage: message || {},
      initialMessageID: messageID,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const messages = await fetchMessages(); // Ensure this returns an array
  if (!Array.isArray(messages)) {
    console.error("Fetched messages is not an array:", messages);
    return { paths: [], fallback: false }; // Handle the error appropriately
  }
  const paths = messages.map((message) => ({
    params: { messageID: message._id.toString() },
  }));

  return { paths, fallback: "blocking" };
}

export default function MessageDetail({
  initialMessages,
  initialMessage,
  initialMessageID,
}) {
  const scrollContainerRef = useRef(null);
  const router = useRouter();
  const { messageID } = router.query;

  const [content, setContent] = useState(initialMessage || {});
  const [messages, setMessages] = useState(initialMessages || []);
  const [track, setTrack] = useState({
    position: 0,
    size: initialMessages.length || 0,
  });
  const [addShadow, setAddShadow] = useState(styles.quickIcons);

  // Function to handle tracking update
  const updateTrack = (messagesArray, currentMessageID) => {
    const { pageItemPosition = 0, length = messagesArray.length } =
      showItem(messagesArray, currentMessageID, null) || {};
    setTrack({ position: pageItemPosition, size: length });
  };

  // Initialize track state on first render based on the initial message
  useEffect(() => {
    updateTrack(initialMessages, initialMessageID);
  }, [initialMessages, initialMessageID]);

  // Fetch message content and update track when messageID changes
  useEffect(() => {
    const updateMessages = async () => {
      if (!messageID || messageID === initialMessageID) return;

      try {
        const fetchedContent = await fetchMessage(messageID);
        setContent(fetchedContent || {});
        updateTrack(messages, messageID);
      } catch (error) {
        console.error("Error fetching the message:", error);
      }
    };
    updateMessages();
  }, [messageID, messages, initialMessageID]);

  // Function to handle navigation
  const navigator = (props) => {
    const { locatedItem = {} } = showItem(messages, messageID, props) || {};
    setContent(locatedItem || {});
    updateTrack(messages, locatedItem._id);
    return locatedItem;
  };

  const nextMsg = (props) => {
    const locatedItem = navigator(props);
    if (locatedItem?._id) {
      router.push(`/message/${locatedItem._id}`, undefined, { shallow: true });
    }
  };

  useEffect(() => {
    const messageRead = async (id) => {
      if (!id) return;

      try {
        const response = await fetch("/api/message", {
          method: "PATCH",
          body: JSON.stringify({ id }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error('Failed to mark message as read');
        }

        const result = await response.json();
        console.log('Message marked as read:', result);

        // Update local state
        setMessages(prevMessages => 
          prevMessages.map(msg => 
            msg._id === id ? { ...msg, isRead: true } : msg
          )
        );
      } catch (error) {
        console.error("Error marking message as read:", error);
      }
    };

    if (messageID && !content.isRead) {
      messageRead(messageID);
    }
  }, [messageID, content.isRead]);

  const deleteMsg = async () => {
    try {
      const response = await fetch("/api/message", {
        method: "DELETE",
        body: JSON.stringify({ id: messageID }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const locatedItem = navigator("next");
        if (locatedItem?._id) {
          router.push(`/message/${locatedItem._id}`, undefined, {
            shallow: true,
          });
        }
      }
    } catch (error) {
      console.error("Error deleting the message:", error);
    }
  };

  const border = (props) => {
    setAddShadow(props ? styles.scrollBorder : styles.quickIcons);
  };

  const name = content?.name || "";
  const firstName = name.split(" ")[0] || "";
  const lastName = name.split(" ")[1] || "";

  return (
    <div className={styles.container}>
      {/* Original Vertical Sidebar */}
      <div className={styles.navbar}>
        <div className={styles.navMenu}>
          <i className={`icon fa fa-bars ${styles.chevron}`}></i>
        </div>
        <div className={styles.navIcon}>
          <i className={`icon fa fa-gear ${styles.navItem}`}></i>
          <i className={`icon fa fa-house ${styles.navItem}`}></i>
          <i className={`icon fa fa-bars ${styles.navItem}`}></i>
          <i className={`icon fa fa-suitcase ${styles.navItem}`}></i>
          <i className={`icon fa fa-person ${styles.navItem}`}></i>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header with Sidebar Navigation */}
        <div className={styles.headerSidebar}>
          <Link href="/message">
            <div className={styles.logo}>
              ajioz<span>Mail</span>
            </div>
          </Link>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Search mail" />
          </div>
          <div className={styles.headerNav}>
            <div className={styles.headerNavItem}>Compose</div>
            <div className={styles.headerNavItem}>Inbox</div>
            <div className={styles.headerNavItem}>Starred</div>
          </div>
          <div className={styles.profileIcon}></div>
        </div>
        <div className={addShadow}>
          <ul className={styles.iconsLeft}>
            <li onClick={() => nextMsg("prev")}>
              <i className={`icon fa fa-arrow-left ${styles.chevron}`}></i>
            </li>
            <li>
              <i className={`icon fa fa-envelope ${styles.chevron}`}></i>
            </li>
            <li>
              <i
                className={`icon fa fa-trash ${styles.chevron}`}
                onClick={deleteMsg}
              ></i>
            </li>
            <li onClick={() => nextMsg("next")}>
              <i className={`icon fa fa-arrow-right ${styles.chevron}`}></i>
            </li>
            <li>
              <i className={`icon fa fa-ellipsis-v ${styles.chevron}`}></i>
            </li>
          </ul>
          <div className={styles.iconsRight}>
            <p>
              {track.position + 1} of {track.size}
            </p>
          </div>
        </div>

        {/* Message Detail */}
        <div className={styles.messageContainer} ref={scrollContainerRef}>
          <div className={styles.messageHeader}>
            <div className={styles.subject}>
              <h4>Mail from </h4>
              <p>{content?.email}</p>
            </div>
            <div className={styles.controls}>
              <date className={styles.chevron}>{content?.date}</date>
              <i className={`icon fa fa-reply ${styles.chevron}`}></i>
              <i className={`icon fa fa-forward ${styles.chevron}`}></i>
              <i
                className={`icon fa fa-trash ${styles.chevron}`}
                onClick={deleteMsg}
              ></i>
            </div>
          </div>

          <div className={styles.messageContent}>
            <h2>{content?.subject}</h2>
            <div className={styles.author}>
              <div className={styles.chip}>
                {firstName && `${firstName[0]}${lastName[0]}`}
              </div>
              <div className={styles.contacts}>
                <p>
                  <strong>{name}</strong>
                </p>
                <p>
                  <cite>{content?.phone}</cite>
                </p>
              </div>
            </div>
            <p>{content?.message}</p>
          </div>
        </div>
        <Scroll scrollContainerRef={scrollContainerRef} border={border} />

        {/* New Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <p>&copy; {new Date().getFullYear() } ajiozMail. All rights reserved.</p>
            <nav>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/contact">Contact Us</a>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  );
}

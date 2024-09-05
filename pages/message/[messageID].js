import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Scroll from "./scroll";
import { showItem } from "@/components/lib/helpers";
import styles from "./MessageDetail.module.css";
import { fetchMessage, fetchMessages } from "@/utils/util-fetch";

export default function MessageDetail() {
  const router = useRouter();
  const { messageID } = router.query;

  const scrollContainerRef = useRef(null);
  const messages = fetchMessages();

  const [addShadow, setAddShadow] = useState(styles.quickIcons);
  const [content, setContent] = useState(fetchMessage(messageID));
  const [track, setTrack] = useState({
    position: 0,
    size: messages.length,
  });

  const navigator = (props) => {
    const { locatedItem } = showItem(messages, messageID, props);
    setContent((prev) => (prev = locatedItem));
    return locatedItem;
  };

  const border = (props) => {
    if (props) setAddShadow(styles.scrollBorder);
    else setAddShadow(styles.quickIcons);
  };

  useEffect(() => {
    const { pageItemPosition, length } = showItem(messages, messageID, null);
    setTrack({ ...track, position: pageItemPosition, size: length });
  }, [messageID]);

  const nextMsg = (props) => {
    const locatedItem = navigator(props);
    router.push(`/message/${locatedItem.id}`, undefined, { shallow: true }); // Update the URL with the new messageID
  };

  const deleteMsg = async () => {
    const response = await fetch("/api/message", {
      method: "DELETE",
      body: JSON.stringify({ id: messageID }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const locatedItem = navigator("next");
      router.push(`/message/${locatedItem.id}`, undefined, { shallow: true });
    }
  };

  const name = content?.name;
  const firstName = name?.split(" ")[0];
  const lastName = name?.split(" ")[1];

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
            {/* Add more header navigation items as needed */}
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
            {/* Add more content as needed */}
          </div>
        </div>
        <Scroll scrollContainerRef={scrollContainerRef} border={border} />
      </div>
    </div>
  );
}

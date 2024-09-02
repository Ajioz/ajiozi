import { useRouter } from "next/router";
import { useRef, useState } from "react";
import styles from "./MessageDetail.module.css";
import Scroll from "./scroll";
import Link from "next/link";
import { getEventById } from "@/dummy";

export default function MessageDetail() {
  const scrollContainerRef = useRef(null);
  const router = useRouter();
  const { messageID } = router.query;

  const [addShadow, setAddShadow] = useState(styles.quickIcons);
  const [content, setContent] = useState(getEventById(messageID));

  const border = (props) => {
    if (props) setAddShadow(styles.scrollBorder);
    else setAddShadow(styles.quickIcons);
  };

  const name = content.name;
  const firstName = name.split(" ")[0];
  const lastName = name.split(" ")[1];

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
            <li onClick={() => router.back()}>
              <i className={`icon fa fa-arrow-left ${styles.chevron}`}></i>
            </li>
            <li>
              <i className={`icon fa fa-envelope ${styles.chevron}`}></i>
            </li>
            <li>
              <i className={`icon fa fa-trash ${styles.chevron}`}></i>
            </li>
            <li>
              <i className={`icon fa fa-arrow-right ${styles.chevron}`}></i>
            </li>
            <li>
              <i className={`icon fa fa-ellipsis-v ${styles.chevron}`}></i>
            </li>
          </ul>
          <div className={styles.iconsRight}>
            <p>2 of 120</p>
          </div>
        </div>

        {/* Message Detail */}
        <div className={styles.messageContainer} ref={scrollContainerRef}>
          <div className={styles.messageHeader}>
            <div className={styles.subject}>
              <h4>Mail from </h4>
              <p>{content.email}</p>
            </div>
            <div className={styles.controls}>
              <date className={styles.chevron}>{content.date}</date>
              <i className={`icon fa fa-reply ${styles.chevron}`}></i>
              <i className={`icon fa fa-forward ${styles.chevron}`}></i>
              <i className={`icon fa fa-trash ${styles.chevron}`}></i>
            </div>
          </div>

          <div className={styles.messageContent}>
            <h2>{content.subject}</h2>
            <div className={styles.author}>
              <div className={styles.chip}>
                {`${firstName[0]}${lastName[0]}`}
              </div>
              <div className={styles.contacts}>
                <p>
                  <strong>{name}</strong>
                </p>
                <p>
                  <cite>{content.phone}</cite>
                </p>
              </div>
            </div>
            <p>{content.message}</p>
            {/* Add more content as needed */}
          </div>
        </div>
        <Scroll scrollContainerRef={scrollContainerRef} border={border} />
      </div>
    </div>
  );
}

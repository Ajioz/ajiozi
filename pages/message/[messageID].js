import React from "react";
import { useRouter } from "next/router";
import styles from "./MessageDetail.module.css";

const fullName = "Ajiroghene Sunny";

export default function MessageDetail() {
  const router = useRouter();
  const { messageID } = router.query;

  const firstName = fullName.split(" ")[0];
  const lastName = fullName.split(" ")[1];
  return (
    <div className={styles.container}>
      {/* Original Vertical Sidebar */}
      <div className={styles.navbar}>
        <i className={`icon fa fa-gear ${styles.navItem}`}></i>
        <i className={`icon fa fa-house ${styles.navItem}`}></i>
        <i className={`icon fa fa-bars ${styles.navItem}`}></i>
        <i className={`icon fa fa-suitcase ${styles.navItem}`}></i>
        <i className={`icon fa fa-person ${styles.navItem}`}></i>
        {/* Add more items as needed */}
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header with Sidebar Navigation */}
        <div className={styles.headerSidebar}>
          <i className={`icon fa fa-bars ${styles.chevron}`}></i>
          <div className={styles.logo}>ajiozMail</div>
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
        <div className={styles.quickIcons}>
          <ul className={styles.iconsLeft}>
            <li>
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
          <ul className={styles.iconsRight}>
            <li>2 of 120</li>
            <li>
              <i className={`icon fa fa-chevron-left ${styles.chevron}`}></i>
            </li>
            <li>
              <i className={`icon fa fa-chevron-right ${styles.chevron}`}></i>
            </li>
          </ul>
        </div>

        {/* Message Detail */}
        <div className={styles.messageContainer}>
          <div className={styles.messageHeader}>
            <div className={styles.subject}>
              <h4>Mail from </h4>
              <p>{"sunny.ajiroghene@gmail.com"}</p>
            </div>
            <div className={styles.controls}>
              <i className={`icon fa fa-reply ${styles.chevron}`}></i>
              <i className={`icon fa fa-forward ${styles.chevron}`}></i>
              <i className={`icon fa fa-trash ${styles.chevron}`}></i>
            </div>
          </div>

          <div className={styles.messageContent}>
            <h2>Medium Daily Digest</h2>
            <div className={styles.author}>
              <div
                className={styles.chip}
              >{`${firstName[0]}${lastName[0]}`}</div>
              <div className={styles.contacts}>
                <p>{"Ajiroghene Sunny"}</p>
                <p>+234{-8064107055}</p>
              </div>
            </div>
            <p>
              What's the Difference Between localhost and 127.0.0.1? This
              article explains the differences...
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

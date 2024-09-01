import React from "react";
import { useRouter } from "next/router";
import styles from "./MessageDetail.module.css";

export default function MessageDetail() {
  const router = useRouter();
  const { messageID } = router.query;
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Original Vertical Sidebar */}
      <div className={styles.navbar}>
        <div className={styles.navItem}>📥</div>
        <div className={styles.navItem}>⭐</div>
        <div className={styles.navItem}>✉️</div>
        <div className={styles.navItem}>🗑️</div>
        {/* Add more items as needed */}
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header with Sidebar Navigation */}
        <div className={styles.headerSidebar}>
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
            <div className="subject">
              <h4>What’s the Difference Between localhost and 127.0.0.1? </h4>
            </div>
            <div className="controls">
              <button className={styles.actionButton}>Reply</button>
              <button className={styles.actionButton}>Forward</button>
              <button className={styles.actionButton}>Delete</button>
            </div>
          </div>

          <div className={styles.messageContent}>
            <h2>Medium Daily Digest</h2>
            <p>Today's Highlights</p>
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

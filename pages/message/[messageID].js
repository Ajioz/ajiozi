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
          <div className={styles.logo}>ajioz<span>Mail</span></div>
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
          <div className={styles.iconsRight}>
            <p>2 of 120</p>
          </div>
        </div>

        {/* Message Detail */}
        <div className={styles.messageContainer}>
          <div className={styles.messageHeader}>
            <div className={styles.subject}>
              <h4>Mail from </h4>
              <p>{"sunny.ajiroghene@gmail.com"}</p>
            </div>
            <div className={styles.controls}>
              <date className={styles.chevron}>{"Sep 1, 2024"}</date>
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
                <p>
                  <strong>{"Ajiroghene Sunny"}</strong>
                </p>
                <p>
                  <cite>+234{-8064107055}</cite>
                </p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem unde alias eum perferendis fugit deleniti saepe
              suscipit error, repellat sequi recusandae autem odit tenetur ipsam
              dignissimos ipsa corporis, repudiandae praesentium. Corrupti
              ratione veniam et, molestiae nulla a porro! Eos ea quidem ipsam
              blanditiis laboriosam ullam quos vel est quis doloremque
              doloribus, aspernatur, nesciunt commodi perspiciatis, ad laborum!
              Beatae veniam voluptatibus est quas rerum eius exercitationem in
              delectus nihil, fugit cupiditate amet? Unde quia neque minus sequi
              corrupti at deleniti reprehenderit alias voluptatibus ipsa
              quibusdam, a amet enim saepe maxime. Fuga, omnis vero corrupti
              blanditiis optio natus, voluptates repellendus odit voluptatibus
              aut inventore sint deleniti dolore eum! Consequatur sed alias
              asperiores expedita a dolores cupiditate dolorem ut tempora
              necessitatibus magnam, hic nobis suscipit perferendis? Aut,
              perferendis nemo, quidem iure doloribus dicta porro nam error enim
              asperiores optio aliquid pariatur soluta aperiam ullam fugiat
              accusamus quod, libero provident deleniti harum et magni
              blanditiis eveniet. Minus suscipit totam ut, ducimus odio animi
              soluta et earum corrupti cum modi veritatis tenetur vel
              laudantium, ipsum obcaecati sed sequi odit molestiae iusto ex
              nemo? Amet dolore omnis perspiciatis voluptates repellat fugiat
              autem voluptatem, ducimus soluta assumenda molestias voluptatum
              cupiditate eum blanditiis, ut dolorum, sequi quisquam nostrum.
            </p>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

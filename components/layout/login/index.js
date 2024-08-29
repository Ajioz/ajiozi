import styles from "./login.module.css";

const LoginModal = ({ showModal, closeModal }) => {
  return (
    <div className={`${styles.modal} ${showModal ? styles.show : ""}`}>
      <div
        className={`${styles.modalContent} ${
          showModal ? styles.slideIn : styles.slideOut
        }`}
      >
        <span className={styles.close} onClick={closeModal}>
          &times;
        </span>
        <h2 style={{ marginBottom: "20px" }}>Contact Form</h2>
        <form>
          <input
            type="text"
            placeholder="Name"
            required
            className={styles.input}
          />
          <input
            type="email"
            placeholder="Email"
            required
            className={styles.input}
          />
          <textarea
            placeholder="Message"
            required
            className={styles.textarea}
          ></textarea>
          <button type="submit" className={styles.btn}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;

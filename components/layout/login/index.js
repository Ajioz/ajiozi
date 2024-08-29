import styles from "./login.module.css";

const LoginModal = ({ showModal, closeModal }) => {
  return (
    <div className={`${styles.modal} ${showModal ? styles.show : ""}`}>
      <div
        className={`${styles.modalContent} ${
          showModal ? styles.slideIn : styles.slideOut
        }`}
      >
        <div className={styles.close} onClick={closeModal}>
          &times;
        </div>
        <h2 className={styles.text}>Login</h2>
        <form>
          <input
            type="text"
            placeholder="username"
            required
            className={styles.input}
          />
          <input
            type="password"
            placeholder="password"
            required
            className={styles.input}
          />
          <button type="submit" className={styles.btn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;

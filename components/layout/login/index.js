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
            style={{
              width: "100%",
              padding: "12px 20px",
              margin: "8px 0",
              display: "inline-block",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />
          <input
            type="email"
            placeholder="Email"
            required
            style={{
              width: "100%",
              padding: "12px 20px",
              margin: "8px 0",
              display: "inline-block",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />
          <textarea
            placeholder="Message"
            required
            style={{
              width: "100%",
              padding: "12px 20px",
              margin: "8px 0",
              display: "inline-block",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              height: "100px",
            }}
          ></textarea>
          <button
            type="submit"
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "14px 20px",
              margin: "8px 0",
              border: "none",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;

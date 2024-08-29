import { useState } from "react";
import styles from "./login.module.css";

const LoginModal = ({ showModal, closeModal }) => {
  const [info, setInfo] = useState({ username: "", password: "" });

  const handleChange = (props) => (e) => {
    setInfo((prev) => ({ ...prev, [props]: e.target.value }));
  };
  //send the admin details
  const handleForm = (e) => {
    e.preventDefault();
      console.log(info);
      if (info) {
          setInfo({ ...info, username: "", password: "" });
          closeModal();
      }
  };

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
        <form onSubmit={handleForm}>
          <input
            type="text"
            placeholder="username"
            required
            value={info.username}
            onChange={handleChange("username")}
            className={styles.input}
          />
          <input
            type="password"
            placeholder="password"
            value={info.password}
            required
            onChange={handleChange("password")}
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

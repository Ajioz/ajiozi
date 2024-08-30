import { useState } from "react";
import { signIn } from "next-auth/react";
import styles from "./login.module.css";

const LoginModal = ({ showModal, closeModal }) => {
  const [info, setInfo] = useState({ email: "", password: "" });

  const handleChange = (props) => (e) => {
    setInfo((prev) => ({ ...prev, [props]: e.target.value }));
  };

  //send the admin details
  const handleForm = async (e) => {
    e.preventDefault();
    if (info) {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (!result.error) {
        router.replace("/profile");
      }
      setInfo({ ...info, email: "", password: "" });
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
            type="email"
            placeholder="email"
            required
            value={info.email}
            onChange={handleChange("email")}
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

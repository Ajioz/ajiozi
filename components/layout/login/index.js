import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import styles from "./login.module.css";

const LoginModal = ({ showModal, closeModal, handleUser, session }) => {
  const router = useRouter();
  const [info, setInfo] = useState({ email: "", password: "" });
  const [animateOut, setAnimateOut] = useState(false);

  const handleChange = (props) => (e) => {
    setInfo((prev) => ({ ...prev, [props]: e.target.value }));
  };

  const handleSlideOut = () => {
    setAnimateOut(true); // Trigger the slideOut animation
  };

  const reset = () => {
    setInfo({ email: "", password: "" }); // Reset the form before closing the modal
  };

  useEffect(() => {
    // If animateOut is true, set a timeout to remove the navbar after the animation
    if (animateOut) {
      const timer = setTimeout(() => {
        closeModal();
        setAnimateOut(false);
        reset();
      }, 500); // Match this duration with your animation duration
      return () => clearTimeout(timer);
    }
  }, [animateOut, closeModal]);

  if (session) handleUser(true);

  //send the admin details
  const handleForm = async (e) => {
    e.preventDefault();
    if (info) {
      const result = await signIn("credentials", {
        redirect: false,
        email: info.email,
        password: info.password,
      });
      if (result.error) {
        router.replace("/article");
        reset();
      } else {
        closeModal();
        handleUser(true);
        reset();
      }
    }
  };

  return (
    <div className={`${styles.modal} ${showModal ? styles.show : ""}`}>
      <div
        className={`${styles.modalContent} ${
          animateOut ? styles.slideOut : styles.slideIn
        }`}
      >
        <div className={styles.close} onClick={handleSlideOut}>
          &times;
        </div>
        <h2 className={styles.text}>Login</h2>
        <form onSubmit={handleForm}>
          <input
            type="email"
            placeholder="john@email.com"
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

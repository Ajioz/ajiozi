import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import classes from "./notification.module.css";

function Notification(props) {
  const { title, message, status } = props;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  const notificationContent = (
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );

  if (isMounted) {
    return ReactDOM.createPortal(
      notificationContent,
      document.getElementById("notifications")
    );
  }
  return null;
}

export default Notification;

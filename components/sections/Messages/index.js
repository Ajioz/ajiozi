import React from "react";
import { useRouter } from "next/router";
import classes from "./messages.module.css";

const Messages = () => {

    const router = useRouter();
  // Add this function at the top of your component or in a separate utils file
  const truncateMessage = (message, maxLength = 30) => {
    return message.length > maxLength
      ? message.slice(0, maxLength) + "..."
      : message;
    };
    
    const handleDetails = (id) => {
        router.push(`/page-message/${id}`);
    }

  return (
    <div className={classes.layout}>
      <div className={classes.container} onClick={() => handleDetails(1)}>
        <div className={classes.sn}>1</div>
        <div className={classes.name}>Ajiroghene Sunday</div>
        <div className={classes.message}>I want to connect for a project</div>
        <div className={classes.email}>sunny.ajiroghene@gmail.com</div>
        <div className={classes.phone}>+234-8064107055</div>
        <div className={classes.date}>Aug 24th, 2024</div>
        <i className={`${"icon fa fa-chevron-right"} ${classes.chevron}`}></i>
      </div>
      <div className={classes.container} onClick={() => handleDetails(2)}>
        <div className={classes.sn}>2</div>
        <div className={classes.name}>Ajiroghene Sunday</div>
        <div className={classes.message}>
          {truncateMessage(
            "I want to connect for a project, I want to connect for a project , I want to connect for a project",
            50
          )}
        </div>
        <div className={classes.email}>sunny.ajiroghene@gmail.com</div>
        <div className={classes.phone}>+234-8064107055</div>
        <div className={classes.date}>Aug 24th, 2024</div>
        <i className={`${"icon fa fa-chevron-right"} ${classes.chevron}`}></i>
      </div>
      <div className={classes.container} onClick={() => handleDetails(3)}>
        <div className={classes.sn}>3</div>
        <div className={classes.name}>Ajiroghene Sunday</div>
        <div className={classes.message}>I want to connect for a project</div>
        <div className={classes.email}>sunny.ajiroghene@gmail.com</div>
        <div className={classes.phone}>+234-8064107055</div>
        <div className={classes.date}>Aug 24th, 2024</div>
        <i className={`${"icon fa fa-chevron-right"} ${classes.chevron}`}></i>
      </div>
    </div>
  );
};

export default Messages;

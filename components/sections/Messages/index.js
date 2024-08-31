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
    router.push(`/message/${id}`);
  };

  const handleDelete = (id) => {
    console.log(`${id} deleted!`);
  };

  return (
    <div className={classes.layout}>
      <div className={classes.container} onClick={() => handleDetails(1)}>
        <div className={classes.sn}>{truncateMessage(1, 3)}</div>
        <div className={classes.name}>
          {truncateMessage("Ajiroghene Sunday", 18)}
        </div>
        <div className={classes.message}>
          {truncateMessage("I want to connect for a project")}
        </div>
        <div className={classes.email}>
          {truncateMessage("sunny.ajiroghene@gmail.com", 20)}
        </div>
        <div className={classes.phone}>
          {truncateMessage("+234 - 8064107055", 18)}
        </div>
        <div className={classes.date}>
          {truncateMessage("Aug 24th, 2024", 14)}
        </div>
        <i
          className={`${"icon fa fa-trash"} ${classes.chevron}`}
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(1);
          }}
        ></i>
        <i className={`${"icon fa fa-chevron-right"} ${classes.chevron}`}></i>
      </div>
      <div className={classes.container} onClick={() => handleDetails(1)}>
        <div className={classes.sn}>{truncateMessage(2, 3)}</div>
        <div className={classes.name}>
          {truncateMessage("Ajiroghene Sunday", 18)}
        </div>
        <div className={classes.message}>
          {truncateMessage("I want to connect for a project")}
        </div>
        <div className={classes.email}>
          {truncateMessage("sunny.ajiroghene@gmail.com", 20)}
        </div>
        <div className={classes.phone}>
          {truncateMessage("+234 - 8064107055", 18)}
        </div>
        <div className={classes.date}>
          {truncateMessage("Aug 24th, 2024", 14)}
        </div>
        <i
          className={`${"icon fa fa-trash"} ${classes.chevron}`}
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(1);
          }}
        ></i>
        <i className={`${"icon fa fa-chevron-right"} ${classes.chevron}`}></i>
      </div>
      <div className={classes.container} onClick={() => handleDetails(1)}>
        <div className={classes.sn}>{truncateMessage(3, 3)}</div>
        <div className={classes.name}>
          {truncateMessage("Ajiroghene Sunday", 18)}
        </div>
        <div className={classes.message}>
          {truncateMessage("I want to connect for a project")}
        </div>
        <div className={classes.email}>
          {truncateMessage("sunny.ajiroghene@gmail.com", 20)}
        </div>
        <div className={classes.phone}>
          {truncateMessage("+234 - 8064107055", 18)}
        </div>
        <div className={classes.date}>
          {truncateMessage("Aug 24th, 2024", 14)}
        </div>
        <i
          className={`${"icon fa fa-trash"} ${classes.chevron}`}
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(1);
          }}
        ></i>
        <i className={`${"icon fa fa-chevron-right"} ${classes.chevron}`}></i>
      </div>
    </div>
  );
};

export default Messages;

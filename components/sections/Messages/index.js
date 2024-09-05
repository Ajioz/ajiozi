import React, { useState } from "react";
import { useRouter } from "next/router";
import classes from "./messages.module.css";

const Messages = ({ messages }) => {


  const router = useRouter();
  const [messageList, setMessageList] = useState(messages);

  const truncateMessage = (message, maxLength = 30) => {
    return message?.length > maxLength
      ? message.slice(0, maxLength) + "..."
      : message;
  };

  const handleDetails = (id) => {
    router.push(`/message/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch("/api/message", {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      await response.json();
      if (response.ok) {
        const updatedMessages = messageList.filter(
          (message) => message.id !== id
        );
        setMessageList(updatedMessages);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={classes.layout}>
      {messageList?.map((message, index) => (
        <div
          className={
            message.isRead ? classes.containerRead : classes.containerUnread
          }
          onClick={() => handleDetails(message.id)}
          key={message.id}
        >
          <div className={classes.sn}>{index + 1}</div>
          <div className={classes.name}>
            {truncateMessage(message.name, 18)}
          </div>
          <div className={classes.message}>
            {truncateMessage(message.subject)}
          </div>
          <div className={classes.email}>
            {truncateMessage(message.email, 20)}
          </div>
          <div className={classes.phone}>
            {truncateMessage(message.phone, 18)}
          </div>
          <div className={classes.date}>
            {truncateMessage(message.date, 14)}
          </div>
          <i
            className={`${"icon fa fa-trash"} ${classes.chevron}`}
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(message.id);
            }}
          ></i>
          <i className={`${"icon fa fa-chevron-right"} ${classes.chevron}`}></i>
        </div>
      ))}
    </div>
  );
};

export default Messages;


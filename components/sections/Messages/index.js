import React, { useState } from "react";
import { useRouter } from "next/router";
import classes from "./messages.module.css";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = now - date;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffWeeks = Math.floor(diffDays / 7);
  const diffYears = now.getFullYear() - date.getFullYear();

  const isYesterday = now.getDate() - date.getDate() === 1 && diffDays < 2;

  if (diffYears >= 1) {
    // If the message is from a previous year, show month and year
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  } else if (diffWeeks >= 1 || diffDays > 6) {
    // If the message is more than a week old, show month and day
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  } else if (isYesterday) {
    // If the message is from yesterday, show "Yesterday" and time
    return `Yesterday ${date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}`;
  } else if (diffDays >= 2) {
    // If the message is from earlier this week, show day of the week and time
    return `${date.toLocaleDateString("en-US", { weekday: "short" })} ${date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}`;
  } else {
    // If the message is from today, show only the time
    return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
  }
};



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
          (message) => message._id !== id
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
          onClick={() => handleDetails(message._id)}
          key={message._id}
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
            {truncateMessage(formatDate(message.createdAt))}
          </div>
          <i
            className={`${"icon fa fa-trash"} ${classes.chevron}`}
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(message._id);
            }}
          ></i>
          <i className={`${"icon fa fa-chevron-right"} ${classes.chevron}`}></i>
        </div>
      ))}
    </div>
  );
};

export default Messages;


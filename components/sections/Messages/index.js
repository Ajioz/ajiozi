import React, { useState } from "react";
import { useRouter } from "next/router";
import classes from "./messages.module.css";


const Messages = ({ messages }) => {
  const router = useRouter();
  const [messageList, setMessageList] = useState(messages);

  const truncateMessage = (message, maxLength = 30) => {
    return message.length > maxLength
      ? message.slice(0, maxLength) + "..."
      : message;
  };

  const handleDetails = (id) => {
    router.push(`/message/${id}`);
  };

  const handleDelete = (id) => {
    const updatedMessages = messageList.filter((message) => message.id !== id);
    setMessageList(updatedMessages);
  };

  return (
    <div className={classes.layout}>
      {messageList.map((message, index) => (
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

export async function getServerSideProps() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const res = await fetch(`${apiUrl}/api/message`);
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const data = await res.json();
    return {
      props: {
        messages: data.messages || [],
      },
    };
  } catch (error) {
    console.error("Failed to fetch messages:", error);
    return {
      props: {
        messages: [],
        error: 'Failed to fetch messages. Please try again later.',
      },
    };
  }
}

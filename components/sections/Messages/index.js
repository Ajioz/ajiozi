import React, {useState} from "react";
import { useRouter } from "next/router";
import classes from "./messages.module.css";
import { getAllEvents, getEventsById } from '@/dummy'

const Messages = () => {
  const router = useRouter();

  const [messages, setMessages] = useState(getAllEvents());

  
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
    setMessages(getEventsById(messages, id));
  };

  return (
    <div className={classes.layout}>
      {messages.map((message, index) => (
        <div
          className={classes.container}
          onClick={() => handleDetails(message.id)}
          key={message.id}
        >
          <div className={classes.sn}>{truncateMessage(index + 1, 3)}</div>
          <div className={classes.name}>
            {truncateMessage(message.name, 18)}
          </div>
          <div className={classes.message}>
            {truncateMessage(message.message)}
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

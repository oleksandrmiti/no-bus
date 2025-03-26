import React from "react";

const Notification = ({ notification }) => {
  if (!notification) return null; // Hide if no notification is set

  return (
    <div className="notification-container">
      <p className="notification-title">Small update</p>
      <a
        href={notification.link}
        target="_blank"
        rel="noopener noreferrer"
        className="notification-link"
      >
        Link to the survey
      </a>
      <p className="notification-description">{notification.description}</p>
    </div>
  );
};

export default Notification;
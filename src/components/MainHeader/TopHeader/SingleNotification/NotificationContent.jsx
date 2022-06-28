import React from "react";

const NotificationContent = ({ item }) => {
  return (
    <div class="read-more-people-list-items">
      <span class="read-more-noti-sb">
        <img src={item?.iconURL} alt="img" />
      </span>
      <div class="read-more-notification-name">
        <p class="name">{item.name}</p>
        <p class="service-item">{item.content}</p>
      </div>
    </div>
  );
};

export default NotificationContent;

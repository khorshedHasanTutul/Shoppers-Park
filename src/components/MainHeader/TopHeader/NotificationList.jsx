import React from "react";
import NotificationSingleItem from "./NotificationSingleItem";

const NotificationList = ({ notificationList, closeAlert }) => {
  return (
    <div class="site-notification">
      <h2>Notifications</h2>
      <NotificationSingleItem
        notificationList={notificationList}
        closeAlert={closeAlert}
      />
    </div>
  );
};

export default NotificationList;

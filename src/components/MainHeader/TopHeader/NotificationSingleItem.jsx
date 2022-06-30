import React from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../Service/httpService2";

const NotificationSingleItem = ({ notificationList, closeAlert }) => {
  // if (notificationList.length === 0) {
  //   return (
  //     <div class="people-list-content">
  //       <p>Found Nothing</p>
  //     </div>
  //   );
  // } else
  return (
    <div class="people-list-content">
      {notificationList.map((item) => (
        <div class="people-list-items">
          <Link to={"/notification"} class="super-notifa" onClick={closeAlert}>
            {/* <span class="noti-sb">{item.image}</span> */}
            <img src={BASE_URL + item.iconURL} alt="img" class="noti-sb" />
            <div class="notification-name">
              <p class="name">{item.name}</p>
              <p>{item.content}</p>
            </div>
          </Link>
          <div class="notification-time">{item.time}</div>
        </div>
      ))}
    </div>
  );
};

export default NotificationSingleItem;

import React from "react";
import { Notification } from "../../../../Service/AppService";

const NotificationContent = () => {
  const data = Notification.notificationList;
  return data.map((item) => (
    <div class="read-more-people-list-items">
      <span class="read-more-noti-sb">
        <img src={item.image} alt="img" />
      </span>
      <div class="read-more-notification-name">
        <p class="name">{item.name}</p>
        <p class="service-item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sit
          {/* doloribus minima non consequuntur? Consequuntur neque tolor sit amet
          consectetur adipisicing elit. Quaerat sit doloribus minima non
          consequuntur? Conseq<span class="dots">...</span>{" "} */}
          {/* <span class="more">
            lightning .and speed websites.Our Web Design Services in Portland,
            USA will surely improve your website ranking as well as
            traffic.Contact us today for a free consultation.
          </span>
          <span id="myBtn1" class="btns">
            Read More
          </span> */}
        </p>
      </div>
    </div>
  ));
};

export default NotificationContent;

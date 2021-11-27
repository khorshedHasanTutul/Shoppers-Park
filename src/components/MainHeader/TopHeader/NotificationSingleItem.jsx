import React from 'react';
import { Link } from 'react-router-dom';
import { Notification } from '../../../Service/AppService';

const NotificationSingleItem = ({notificationList}) => {
    const data=Notification.notificationList;
    return (
        <div class="people-list-content">
            {
                data.map(item=>(
                    <div class="people-list-items">
            <Link to={'/notification'} class="super-notifa" onClick={notificationList}>
                {/* <span class="noti-sb">{item.image}</span> */}
                <img src={item.image} alt="img" class="noti-sb" />
            <div class="notification-name">
                <p class="name">{item.name}</p>
                <p>{item.content}</p>
            </div>
            </Link>
            <div class="notification-time">{item.time}</div>
        </div>
                ))
            }
        
    </div>
    );
};

export default NotificationSingleItem;
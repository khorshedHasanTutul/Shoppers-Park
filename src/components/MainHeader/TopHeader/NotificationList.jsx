import React from 'react';
import NotificationSingleItem from './NotificationSingleItem';

const NotificationList = ({notificationList}) => {
    return (
        <div class="site-notification">
        <h2>Notifications</h2>
       <NotificationSingleItem notificationList={notificationList}/>
    
    </div>
    );
};

export default NotificationList;
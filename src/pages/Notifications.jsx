import React from 'react';
import SingleNotification from '../components/MainHeader/TopHeader/SingleNotification/SingleNotification';
import Parks from '../components/Parks/Parks';

const Notifications = () => {
    return (
        <div>
            <Parks />
            <SingleNotification/>
        </div>
    );
};

export default Notifications;
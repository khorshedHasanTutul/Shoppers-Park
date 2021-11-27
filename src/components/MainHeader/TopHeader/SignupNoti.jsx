import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import NotificationList from './NotificationList'
import LoginModal from './AuthenticationPortal/LoginModal'
import { Notification } from '../../../Service/AppService'
import { WishService } from '../../../Service/CartContent'

const SignupNoti = () => {
    const [notification, setnotification] = useState(false)
    const [Login, setLoginModal] = useState(false)
    
    const notificationList=()=>{
        setnotification(prevstate => !prevstate)
    }

    const loginModal=(e)=>{
        e.preventDefault();
        setLoginModal(prevstate => !prevstate)
    }
    const notiData=Notification.notificationList;
    const [wishData, setwishData] = useState(WishService.Get())
    WishService.Refresh=setwishData;
    return (
        <>
        <div class="header-bottom-cart">
        <div class="singnup-cart">
            <ul>
                <li>
                    <a class="busket-desktop" href onClick={notificationList}>
                        <div className="header-nwl-hover">
                            <span>Notifaction</span>
                        </div>
                        <div class="busket-icon">
                            <FontAwesomeIcon icon={faBell} />
                            <span>{notiData.length}</span>
                        </div>
                       
                    </a>
                   {
                       (notification)&& <NotificationList notificationList={notificationList} />
                   }
                </li>
                <li>
                    <Link to="/wishlist">
                        <div className="header-nwl-hover">
                            <span>Wishlist</span>
                        </div>
                        <div class="busket-icon">
                           
                            <FontAwesomeIcon icon={faHeart} />
                            <span>{wishData.Items.length}</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <div onClick={loginModal}>
                    <div className="header-nwl-hover">
                            <span>Login/SignUp</span>
                        </div>
                        <div class="busket-icon">
                            
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    {
        (Login)&& <LoginModal closeModal={loginModal}/>
    }
    </>
    )
}
export default SignupNoti;
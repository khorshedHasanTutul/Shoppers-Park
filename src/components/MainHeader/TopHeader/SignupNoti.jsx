import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link, useHistory } from 'react-router-dom'
import NotificationList from './NotificationList'
import { Notification } from '../../../Service/AppService'
import { WishService } from '../../../Service/CartContent'
import ModalPOpUp from './AuthenticationPortal/ModalPOpUp'
import authContext from '../../../Store/auth-context'

const SignupNoti = () => {
    const [notification, setnotification] = useState(false)
    const [Modal, setModal] = useState(false)
    const authCtx = useContext(authContext);
    const history = useHistory();
    
    const notificationList=()=>{
        setnotification(prevstate => !prevstate)
    }
    const modalCloseHandler=()=>{
        setModal(false)
    }

    const ModalOpen=(e)=>{
        e.preventDefault();
        if(!authCtx.isLoggedIn){
            setModal(true)
            return
        }
        else
        {
             history.push('/profile'); 
        }
        
         
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
                            {
                                (wishData.Items.length>0)? <span>{wishData.Items.length}</span>:''
                            }
                           
                        </div>
                    </Link>
                </li>
                <li>
                    <div onClick={ModalOpen}>
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
        (Modal)&& <ModalPOpUp ModalOpen={modalCloseHandler}/>
    }
    </>
    )
}
export default SignupNoti;
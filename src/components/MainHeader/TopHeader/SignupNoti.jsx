import React, {
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import NotificationList from "./NotificationList";
import { Notification } from "../../../Service/AppService";
import { WishService } from "../../../Service/CartContent";
import ModalPOpUp from "./AuthenticationPortal/ModalPOpUp";
import authContext from "../../../Store/auth-context";
import { useOutsideAlerter } from "../../../hooks/useOutsideClickHandler";
import appContext from "../../../Store/app-context";
import { httpV2 } from "../../../Service/httpService2";
import { GET_NOTIFICATIONS } from "../../../lib/endpoints";
import { paramsUrlGenerator } from "../../../helpers/utilities";

const SignupNoti = () => {
  const appCtx = useContext(appContext);
  const notificationRef = useRef();
  const [allNotifications, setAllNotifications] = useState({
    items: [],
    totalCount: 0,
    count: 0,
  });
  const [params, setParams] = useState({
    Index: 1,
    Take: 5,
  });

  const [visibleNotification, setVisibleNotification] = useState(false);
  const [Modal, setModal] = useState(false);
  const authCtx = useContext(authContext);
  const history = useHistory();
  const wishList = appCtx.wishList.getWishItems;

  const getNotifications = useCallback(() => {
    httpV2.get({
      url: GET_NOTIFICATIONS,
      before: () => {},
      successed: (res) => {
        setAllNotifications({
          items: res.data.data,
          totalCount: res.data.count,
          count: res.data.data.length,
        });
      },
      failed: () => {},
      always: () => {},
    });
  }, []);

  const closeNotificationAlert = () => {
    if (authCtx.isLoggedIn) {
      setVisibleNotification((prevState) => !prevState);
    } else {
      setModal(true);
    }
  };

  const closeNotifyAlert = () => {
    setVisibleNotification(false);
  };
  const modalCloseHandler = () => {
    setModal(false);
  };
  const gotoWishPage = () => {
    if (authCtx.isLoggedIn) {
      history.push("/wishlist");
    } else setModal(true);
  };

  const ModalOpen = (e) => {
    e.preventDefault();
    if (!authCtx.isLoggedIn) {
      setModal(true);
      return;
    } else {
      history.push("/profile");
    }
  };
  useOutsideAlerter(notificationRef, closeNotifyAlert);

  useEffect(() => {
    const paramUrl = paramsUrlGenerator(params);
    getNotifications(paramUrl);
  }, [getNotifications, params]);

  return (
    <>
      <div class="header-bottom-cart">
        <div class="singnup-cart">
          <ul>
            <li ref={notificationRef}>
              <a class="busket-desktop" href onClick={closeNotificationAlert}>
                {/* <div className="header-nwl-hover">
                  <span>Notifaction</span>
                </div> */}
                <div class="busket-icon">
                  <FontAwesomeIcon icon={faBell} />
                  {/* number of notifications  */}
                  {appCtx.singleTask.getTotalNotifiaction !== 0 && (
                    <span>{appCtx.singleTask.getTotalNotifiaction}</span>
                  )}
                  {appCtx.singleTask.getTotalNotifiaction > 99 && (
                    <span>
                      {99}
                      <sup>+</sup>
                    </span>
                  )}
                </div>
              </a>
              {visibleNotification && (
                <NotificationList
                  notificationList={allNotifications.items}
                  closeAlert={closeNotificationAlert}
                />
              )}
            </li>
            <li>
              <a href onClick={gotoWishPage}>
                {/* <div className="header-nwl-hover">
                  <span>Wishlist</span>
                </div> */}
                <div class="busket-icon">
                  <FontAwesomeIcon icon={faHeart} />
                  {wishList.length > 0 ? <span>{wishList.length}</span> : ""}
                </div>
              </a>
            </li>
            <li>
              <div onClick={ModalOpen}>
                {/* <div className="header-nwl-hover">
                  <span>Profile</span>
                </div> */}
                <div class="busket-icon">
                  <FontAwesomeIcon icon={faUser} />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {Modal && <ModalPOpUp ModalOpen={modalCloseHandler} />}
    </>
  );
};
export default SignupNoti;

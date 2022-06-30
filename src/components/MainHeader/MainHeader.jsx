import LowHeader from "./LowHeader/LowHeader";
import TopHeader from "./TopHeader/TopHeader";
import React, {
  useState,
  useEffect,
  forwardRef,
  useRef,
  useCallback,
} from "react";
import PopUpAlert from "../utilities/Alert/PopUpAlert";
import MainTopHeader from "./TopHeader/MainTopHeader";

export const MainHeader = forwardRef((props, ref) => {
  const navMidRef = useRef();
  const navTopRef = useRef();
  const [scroll, setScroll] = useState(false);
  const [alertPopUp, setalertPopUp] = useState(false);
  const [popupClasses, setPopupClasses] = useState("main-ads hide");
  const closeModal = () => {
    setalertPopUp((prevState) => !prevState);
  };

  // this codes exist for the header nav ups & down smoothly
  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    const navTopHeight = 34;
    const span = window.innerWidth <= 1000 ? `6px` : `8px`;

    if (offset > navTopHeight) {
      ref.current.style.top = `${-navTopHeight}px`;
      navMidRef.current.style.paddingTop = `10px`;
      navMidRef.current.style.paddingBottom = `10px`;
    } else if (offset < navTopHeight) {
      ref.current.style.top = `${0}px`;
      navMidRef.current.style.paddingTop = span;
      navMidRef.current.style.paddingBottom = span;
    }
  }, [ref]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <section className={`header-area`} ref={ref}>
      <MainTopHeader />
      <div class="container">
        <div class="header-main-area">
          <TopHeader ref={navTopRef} />
          <LowHeader ref={navMidRef} />
          {alertPopUp && (
            <section className={popupClasses}>
              <PopUpAlert
                content={
                  "Dear Shoppers, Great news!! Were delighted to announch the launch of our new website www.shoppersperk.com Our aim is to provide our shoppers with an easier and safer way of shopping. Just visit our website, browse and select what you like... we’ll deliver to you. As a thank you for shopping on our new website we will give you a 5% discount on all items.Stay home, stay safe, shop on www.shoppersperk.com"
                }
                closeModal={closeModal}
                addingStyle={true}
              />
            </section>
          )}
        </div>
      </div>
    </section>
  );
});

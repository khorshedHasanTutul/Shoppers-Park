import React, { useState } from "react";
import ContentCart from "./ContentCart";
import MiniCart from "./MiniCart";
import { useLocation } from "react-router";
import PopUpAlert from "../utilities/Alert/PopUpAlert";
import ModalPOpUp from "../MainHeader/TopHeader/AuthenticationPortal/ModalPOpUp";

const ShoppingCart = () => {
  const { pathname } = useLocation();
  const [isOpenCart, setisOpenCart] = useState(false);
  const [alert, setalert] = useState(false);
  const [loginPopupModel, setloginPopupModel] = useState(false);
  const [orderNowPressed, setorderNowPressed] = useState(false);
  const closeModal = () => {
    setalert((prevState) => !prevState);
  };
  const toggleCart = () => {
    setisOpenCart((prevState) => !prevState);
  };
  const ModalClose = () => {
    setloginPopupModel(false);
  };
//   if (pathname === "/checkout") {
//     return null;
//   } else
    return (
      <>
        {alert && (
          <PopUpAlert
            content={"Please select at least one product."}
            closeModal={closeModal}
          />
        )}
        {loginPopupModel && (
          <ModalPOpUp
            ModalOpen={ModalClose}
            closeCart={toggleCart}
            orderNowPressed={orderNowPressed}
          />
        )}
        <div class="cart_box_container cart_info">
          {isOpenCart && (
            <ContentCart
              closeCart={toggleCart}
              setalert={closeModal}
              setloginPopupModel={setloginPopupModel}
              setorderNowPressed={setorderNowPressed}
            />
          )}
          {!isOpenCart && <MiniCart openCart={toggleCart} />}
        </div>
      </>
    );
};
export default ShoppingCart;

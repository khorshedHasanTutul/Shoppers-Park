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
  const [qtyAlert, setQtyAlert] = useState(false);
  const [loginPopupModel, setloginPopupModel] = useState(false);
  const [orderNowPressed, setorderNowPressed] = useState(false);
  const closeModal = () => {
    setalert((prevState) => !prevState);
  };
  const closeQtyModal=()=>{
    setQtyAlert(prevState=>!prevState)
}
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
        {
            qtyAlert && (
                <PopUpAlert 
                content={"Quantity can't be less than 1."}
                closeModal={closeQtyModal}
                />
            )
        }
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
              setQtyAlert={setQtyAlert}
            />
          )}
          {!isOpenCart && <MiniCart openCart={toggleCart} />}
        </div>
      </>
    );
};
export default ShoppingCart;

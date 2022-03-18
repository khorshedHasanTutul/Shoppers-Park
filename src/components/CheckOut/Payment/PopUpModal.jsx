import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cartContext from "../../../Store/cart-context";

const PopUpModal = ({ savedShippingDataMobile }) => {
  const cartCtx = useContext(cartContext);
  const cartClearContext = () => {
    cartCtx.clearCart();
  };
  return (
    <div className="alert-for-all-web">
      <div id="demo-modal3" class="modal">
        <div class="modal__content">
          <div class="alert-main-area">
            <div className="order-text-mt-10">
              <h1>Your order has been placed</h1>
              <h2>Your order number is "258946"</h2>
            </div>

            {/* <p>We'll message your number '{savedShippingDataMobile}' to reconfirm.</p> */}
            <hr />
            <div class="brick label info mb-16 ">
              <p class="t-center">All deliveries are closed on Fridays</p>
            </div>
            <div onClick={cartClearContext}>
              <Link to="/profile/order/details/2525" class="warning">
                View Order
              </Link>
            </div>
          </div>
          <div className="close-popup-modal" onClick={cartClearContext}>
            <span >
              <Link to="/" class="modal__close">
                &times;
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpModal;

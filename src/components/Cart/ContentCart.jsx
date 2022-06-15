import React, { useContext, useEffect } from "react";
import CartTableItem from "./CartTableItem";
import { Link } from "react-router-dom";
import authContext from "../../Store/auth-context";
import cartContext from "../../Store/cart-context";

const ContentCart = ({
  closeCart,
  setalert,
  setloginPopupModel,
  setorderNowPressed,
  setQtyAlert,
}) => {
  const authCtx = useContext(authContext);
  const ctxCart = useContext(cartContext);
  const getCartModal = ctxCart.getCartModel;

  const productFound = (evt) => {
    if (getCartModal.TotalItems === 0) {
      evt.preventDefault();
      // alert('Please Select at least one product');
      setalert(true);
      return false;
    } else if (authCtx.isLoggedIn !== true) {
      evt.preventDefault();
      setloginPopupModel(true);
      setorderNowPressed(true);
    } else {
      closeCart();
    }
  };
  const clearCartHandler = (e) => {
    closeCart();
    ctxCart.clearCart();
  };

  //   useEffect(()=>{
  //       if(getCartModal.Items.length===0){
  //           closeCart();
  //       }

  //   },[getCartModal.Items.length,closeCart])

  return (
    <div class="cart-box-view">
      <div class="cart-box-inner-view">
        <div class="cart-header no_margin card-header-flex-for-sale">
          <div class="card-select-item">
            <img src="/contents/assets/images/add-cart.png" alt="img" />
            <strong class="car-box-title SearchFont">
              {getCartModal.TotalItems > 0 ? (
                <span>{getCartModal.TotalItems}</span>
              ) : (
                ""
              )}

              <span> Item</span>
            </strong>
          </div>
          <div class="card-select-cross view-pop" onClick={closeCart}>
            <img src="/contents/assets/images/x-button.png" alt="img" />
          </div>
        </div>
        <div class="cart-body text-center">
          <div class="cart-table-wrap">
            <span class="happy-shopping">Happy Shopping!! </span>
            <table class="cart-table">
              <tbody>
                <CartTableItem setQtyAlert={setQtyAlert} />
              </tbody>
            </table>
          </div>
        </div>
        <div class="cart-footer">
          <div>
            <Link
              to={"/checkout"}
              onClick={productFound}
              id="checkout-button"
              class="btn btn-success pull-left"
            >
              Order Now
            </Link>

            <span class="btn btn-info cart-amount-span cart-amount-span">
              ৳ <span>{getCartModal.TotalAmmount.toFixed(2)}</span>
            </span>
          </div>
          <div className="clear-button btn" onClick={clearCartHandler}>
            <span> Clear Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCart;

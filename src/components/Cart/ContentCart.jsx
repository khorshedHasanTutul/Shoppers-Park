import React, { useContext } from "react";
import CartTableItem from "./CartTableItem";
import { Link, useHistory } from "react-router-dom";
import authContext from "../../Store/auth-context";
import cartContext from "../../Store/cart-context";

const ContentCart = ({
  closeCart,
  setalert,
  setloginPopupModel,
  setorderNowPressed,
  setQtyAlert,
}) => {
  let history = useHistory();
  const authCtx = useContext(authContext);
  const ctxCart = useContext(cartContext);
  const getCartModal = ctxCart.getCartModel;

  const productFound = (evt) => {
    if (getCartModal.TotalItems === 0) {
      evt.preventDefault();
      // alert('Please Select at least one product');
      setalert(true);
      closeCart();
      return false;
    } else if (authCtx.isLoggedIn !== true) {
      evt.preventDefault();
      setloginPopupModel(true);
      setorderNowPressed(true);
      closeCart();
    } else {
      closeCart();
      history.push("/checkout");
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
            <i
              class="fa fa-times pull-right cart-cross-btn"
              aria-hidden="true"
            ></i>
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

        <div className="product_items__count__container">
          <div className="cmn-class-items-calc total__items">
            <p>Total Items</p>
            <span>{getCartModal.TotalItems}</span>
          </div>
          <div className="cmn-class-items-calc total__ammount">
            <p>Total Ammount</p>
            <span>{getCartModal.TotalAmmount.toFixed(2)}tk</span>
          </div>
        </div>
        <div class="cart-footer">
          {/* <div class="card-footer-inner">
              <Link to={urlCheckoutRoute()}>
                <button class="cart-cmn-btn" onClick={orderNowHandler}>
                  Order Now
                </button>
              </Link>

              <span class="cart-cmn-btn cart-cmn-btn2">
                ৳ <span>{getCartContextModel.TotalAmmount.toFixed(2)}</span>
              </span>
            </div>

            <a href class="block-btn-card" onClick={clearCartHandler}>
              <button class="cart-cmn-btn">Clear Cart</button>
            </a> */}

          <div className="cart-footer__orderNow" onClick={productFound}>
            <a href>
              <p>
                <span>Order Now</span>
              </p>
            </a>
          </div>
          <div
            className="cart-footer__orderNow"
            style={{ background: "#54C495" }}
            onClick={clearCartHandler}
          >
            <p>Clear Cart</p>
          </div>
        </div>
        {/* <div class="cart-footer">
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
        </div> */}
      </div>
    </div>
  );
};

export default ContentCart;

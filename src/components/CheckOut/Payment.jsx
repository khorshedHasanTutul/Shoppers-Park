import React, {
  Fragment,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { useHistory } from "react-router-dom";
import { POST_ORDER, POST_ORDER_PAYMENT } from "../../lib/endpoints";
import { storeAddressObj } from "../../Service/DataService";
import { httpV2 } from "../../Service/httpService2";
import addressContext from "../../Store/address-context";
import cartContext from "../../Store/cart-context";
import PopAlert from "../utilities/Alert/PopAlert";
import Suspense from "../utilities/Suspense/Suspense";
import OrderAlert from "./OrderAlert/OrderAlert";

const Payment = ({ addresses, AddressActiveHandler }) => {
  const [successOrderAlert, setSuccessOrderAlert] = useState(false);
  // let history = useHistory();
  //context
  const ctxAddress = useContext(addressContext);
  const ctxCart = useContext(cartContext);
  //get cart model
  const getCtxCartItems = ctxCart.getCartModel;
  const [orderData, setOrderData] = useState();
  const [clickedRadio, setClickedRadio] = useState(false);
  //alert status
  const [alert, setAlert] = useState(false);
  const [alertPayment, setAlertPayment] = useState(false);
  //get active type address
  const getActiveAddressType = ctxAddress.getActiveType;
  //payment state
  const [paymentData, setPaymentData] = useState();
  //coupon validation state
  const [cupon, setCupon] = useState("");
  const [isCouponTouched, setIsCouponTouched] = useState(false);
  const [isInvalidCupon, setIsInvalidCupon] = useState(false);
  const [isEmptyCoupon, setIsEmptyCoupon] = useState(false);
  const [isClickedCoupon, setIsClickedCoupon] = useState(false);
  //get selected Address from Database
  const getSelectedAddress = addresses.find(
    (item) => item.typeOfAddress === getActiveAddressType.id
  );
  //loading
  const [isLoading, setIsLoading] = useState(true);
  //coupon validation

  const products = [];
  //context items push in products array
  getCtxCartItems.Items.map((item) =>
    products.push({ id: item.id, quantity: item.quantity })
  );

  const radioButtonHandler = () => {
    setClickedRadio(true);
  };
  const alertStateChangedHandler = () => {
    setAlert((prevState) => !prevState);
    // history.push("/");
  };
  const alertPaymentRadioStateChangeHandler = () => {
    setAlertPayment((prevState) => !prevState);
  };

  const cuponSubmitHandler = (evt) => {
    evt.preventDefault();
    setIsClickedCoupon(true);
    if (cupon.length > 0) {
      postOrderHttp();
    }
  };

  const cuponChangeHandler = ({ target }) => {
    setCupon(target.value);
  };
  const cuponTouchedHandler = () => {
    setIsCouponTouched(true);
  };

  const proceedOrderHandler = () => {
    if (clickedRadio) {
      httpV2.post({
        url: POST_ORDER,
        payload: {
          addressId: getSelectedAddress?.id,
          couponCode: cupon,
          products: products,
          payment: paymentData,
          activityId: "00000000-0000-0000-0000-000000000000",
          remarks: "",
        },
        before: () => {
          setIsLoading(true);
        },
        successed: (res) => {
          setOrderData(res.data);
          alertStateChangedHandler();
          setIsLoading(false);
          setSuccessOrderAlert(true);
          ctxCart.clearCart();
        },
        failed: () => {},
        always: () => {
          setIsLoading(false);
        },
      });
    } else {
      alertPaymentRadioStateChangeHandler();
    }
  };

  const postOrderHttp = useCallback((id) => {
    httpV2.post({
      url: POST_ORDER_PAYMENT,
      payload: {
        addressId: id,
        products: products,
        couponCode: cupon,
      },
      before: () => {
        setIsLoading(true);
      },
      successed: (res) => {
        console.log({ res });
        setPaymentData(res.data);
        if (res.data.couponDiscount <= 0 && cupon.length > 0) {
          setIsInvalidCupon(true);
        } else {
          setIsInvalidCupon(false);
        }
        setIsLoading(false);
      },
      failed: () => {},
      always: () => {
        setIsLoading(false);
      },
    });
  }, []);

  useEffect(() => {
    postOrderHttp(getSelectedAddress?.id);
  }, [getSelectedAddress?.id, postOrderHttp]);

  useEffect(() => {
    if (isClickedCoupon) {
      if (
        (isCouponTouched && cupon.length === 0) ||
        (!isCouponTouched && cupon.length === 0)
      ) {
        setIsEmptyCoupon(true);
        setIsInvalidCupon(false);
      } else setIsEmptyCoupon(false);
    }
  }, [isClickedCoupon, isCouponTouched, cupon.length]);

  return (
    <div id="Tab5" class="tabcontent tab-content checkout-main-tab-content">
      <div class="discount-cupon-payment">
        <label for="discount_code">Use Coupon</label>
        <form id="discount_codeSubmit">
          <input
            type="text"
            id="discount_code"
            placeholder="Discount Code..."
            onChange={cuponChangeHandler}
            onBlur={cuponTouchedHandler}
          />

          <button type="submit" onClick={cuponSubmitHandler}>
            Apply
          </button>
        </form>
        {isInvalidCupon && <div class="alert alert-error">Invalid Coupon.</div>}
        {isEmptyCoupon && <div class="alert alert-error">Coupon is empty.</div>}
        {isCouponTouched && cupon.length === 0 && !isEmptyCoupon && (
          <div class="alert alert-error">Coupon is empty.</div>
        )}
      </div>
      {(getSelectedAddress || storeAddressObj.name.length !== 0) && (
        <Fragment>
          <h3 class="sip-add" style={{ textAlign: "left", marginTop: "10px" }}>
            Shipping Address
          </h3>
          <div
            class="shaping-address-saveing-row"
            style={{ marginBottom: "10px" }}
          >
            <div class="shapping-address-inner-content">
              <div class="location-ad-icon">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <div class="saving-address-content">
                <small>
                  {getSelectedAddress
                    ? getSelectedAddress.name
                    : storeAddressObj.name}
                </small>
                <small>
                  {getSelectedAddress
                    ? getSelectedAddress.phone
                    : storeAddressObj.mobile}
                </small>
                <span>
                  <aside>
                    {getSelectedAddress &&
                      getSelectedAddress.typeOfAddress === 0 &&
                      "Home"}
                    {getSelectedAddress &&
                      getSelectedAddress.typeOfAddress === 1 &&
                      "Office"}
                    {getSelectedAddress &&
                      getSelectedAddress.typeOfAddress === 2 &&
                      "Home Town"}
                    {!getSelectedAddress && storeAddressObj.type}
                  </aside>
                </span>
                <span>
                  {getSelectedAddress
                    ? getSelectedAddress.email
                    : storeAddressObj.email}
                </span>
                &nbsp;
                <span>
                  {getSelectedAddress &&
                    getSelectedAddress.province.name +
                      "-" +
                      getSelectedAddress.district.name +
                      "-" +
                      getSelectedAddress.upazila.name +
                      "-" +
                      getSelectedAddress.remarks}
                </span>
                <span>
                  {!getSelectedAddress &&
                    storeAddressObj.division.name +
                      "-" +
                      storeAddressObj.district.name +
                      "-" +
                      storeAddressObj.area.name +
                      "-" +
                      storeAddressObj.address}
                </span>
              </div>
            </div>
            <div class="saving-ad-btn" onClick={AddressActiveHandler}>
              <button>Change</button>
            </div>
          </div>
        </Fragment>
      )}

      <div class="product-payment-block-tab">
        <div class="payment-summary-table">
          <table class="table table-bordered table-responsive cart_summary">
            <tbody>
              <tr>
                <td class="summary-details-p" colspan="3">
                  Ammount
                </td>
                <td class="summary-details-p" colspan="2">
                  {paymentData?.orderValue.toFixed(2)}
                </td>
              </tr>
              <tr>
                <td class="summary-details-p" colspan="3">
                  Product Discount
                </td>
                <td class="summary-details-p" colspan="2">
                  {paymentData?.productDiscount}
                </td>
              </tr>
              <tr>
                <td class="summary-details-p" colspan="3">
                  Cupon Discount
                </td>
                <td class="summary-details-p" colspan="2">
                  {paymentData?.couponDiscount}
                </td>
              </tr>
              <tr>
                <td class="summary-details-p" colspan="3">
                  Delivery Charge
                </td>
                <td class="summary-details-p" colspan="2">
                  {paymentData?.shippingCharge}
                </td>
              </tr>
              <tr>
                <td class="summary-details-p" colspan="3">
                  <strong>Total Amount </strong>
                </td>
                <td class="summary-details-p" colspan="2">
                  <strong>{paymentData?.payableAmount.toFixed(2)}</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="summary-notice-address">
          <p class="OrderNotice" style={{ marginTop: "1%" }}>
            *** Please pay first for outside Dhaka delivery
          </p>
          <p class="OrderNotice">
            *** Please pay the delivery charge first for inside Dhaka delivery
            (Cash on Delivery)
          </p>
          <p class="OrderNotice">
            *** Shoppers Park agent will call you for delivery charge and
            reconfirm your order
          </p>
        </div>

        <div class="row-custom">
          <div class="order-inside-outside-main">
            <form>
              <div class="order-outside-inside-flex">
                <p onClick={radioButtonHandler}>
                  <input type="radio" id="test3" name="radio-group" />
                  <label for="test3">Cash on Delivery</label>
                </p>
                <p onClick={radioButtonHandler}>
                  <input type="radio" id="test4" name="radio-group" />
                  <label for="test4">Onlie Payments</label>
                </p>
              </div>
            </form>
          </div>
          <div class="cart_navigation">
            <a class="prev-btn" href="/">
              <i class="fa fa-angle-left check-ang-left" aria-hidden="true"></i>{" "}
              Continue shopping
            </a>
            <a href class="next-btn" onClick={proceedOrderHandler}>
              {" "}
              Order Now{" "}
              <i
                class="fa fa-angle-right check-ang-right"
                aria-hidden="true"
              ></i>
            </a>
          </div>
        </div>
      </div>
      {alert && !isLoading && (
        <PopAlert
          Template={OrderAlert}
          closeModal={alertStateChangedHandler}
          orderData={orderData}
          successOrder={successOrderAlert}
        />
      )}
      {isLoading && <Suspense />}
      {alertPayment && (
        <PopAlert
          closeModal={alertPaymentRadioStateChangeHandler}
          content={"Please select a payment method!"}
        />
      )}
    </div>
  );
};

export default Payment;

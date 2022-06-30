import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { GET_PRODUCT_UPDATE } from "../../lib/endpoints";
import { httpV2 } from "../../Service/httpService2";
import addressContext from "../../Store/address-context";
import cartContext from "../../Store/cart-context";

const ProductSummary = ({
  AddressActiveHandler,
  proceedToAddressHandler,
  setQtyAlert,
  addresses,
}) => {
  let history = useHistory();
  //context
  const getCartContext = useContext(cartContext);
  const ctxAddress = useContext(addressContext);
  const [qty, setQty] = useState("");
  const getCtxAddressActiveType = ctxAddress.getActiveType;
  const getCartModal = getCartContext.getCartModel;
  const findActiveAddress = addresses.find(
    (item) => item.typeOfAddress === getCtxAddressActiveType.id
  );

  const qtyDecHandler = (findItem, e) => {
    e.preventDefault();
    let quantity = findItem.quantity - 1;
    getCartContext.updateQuantity(findItem, quantity);
  };

  const qtyIncHandler = (findItem, e) => {
    e.preventDefault();
    let quantity = findItem.quantity + 1;
    getCartContext.updateQuantity(findItem, quantity);
  };

  const cartItemRemoverHandler = (item) => {
    getCartContext.singleItemRemover(item);
  };

  const qtyChangeHandler = (item, { target }) => {
    if (target.value === "") {
      setQty(0);
    } else {
      setQty(target.value);
    }
    getCartContext.updateEditableQuantity(item, target.value);
  };
  const blurHandler = (item) => {
    if (qty === 0) {
      setQtyAlert(true);
      getCartContext.updateEditableQuantity(item, 1);
      setQty(1);
    }
  };



  //if empty in cart then go to homepage
  useEffect(() => {
    if (getCartModal.Items.length === 0) {
      history.push("/");
    }
  }, [getCartModal.Items.length, history]);

  return (
    <div id="Tab3" class="tabcontent tab-content checkout-main-tab-content">
      <div class="cart-tb-tab-content">
        <div class="order-detail-content">
          <table class="table table-bordered table-responsive cart_summary">
            <thead>
              <tr>
                <th class="cart_product">Product</th>
                <th>Description</th>
                <th>Unit price</th>
                <th>Qty</th>
                <th>Total</th>
                <th class="action">Remove</th>
              </tr>
            </thead>
            <tbody>
              {getCartModal.Items.map((item) => (
                <tr>
                  <td class="cart_product">
                    <Link href="#">
                      <img src={item?.image} alt="img" />
                    </Link>
                  </td>
                  <td class="cart_description">
                    <p class="product-name">
                      <Link to={"/product/" + item.id}>{item.displayName}</Link>
                    </p>
                    {/* <small class="cart_ref">Type : XYZ</small>
                    <br />
                    <small>Company: LPC </small> */}
                  </td>
                  {/* {item.discountPrice <= 0 && (
                    <td class="price">
                      <span>৳ {item.currentPrice}</span>
                    </td>
                  )} */}

                  <td class="price">
                    <span>৳ {item.currentPrice.toFixed(2)}</span>
                  </td>

                  <td class="qty">
                    <div class="input-group product_qty">
                      <span
                        class="input-group-btn"
                        onClick={qtyDecHandler.bind(this, item)}
                      >
                        <button class="btn btn-white btn-minus" type="button">
                          <i class="fa fa-minus" aria-hidden="true"></i>
                        </button>
                      </span>
                      <input
                        type="text"
                        class="form-control no-padding add-color text-center height-25"
                        maxlength="3"
                        value={item.quantity}
                        onChange={qtyChangeHandler.bind(null, item)}
                        onBlur={blurHandler.bind(null, item)}
                      />
                      <span
                        class="input-group-btn"
                        onClick={qtyIncHandler.bind(this, item)}
                      >
                        <button class="btn btn-red btn-plus" type="button">
                          <i class="fa fa-plus" aria-hidden="true"></i>
                        </button>
                      </span>
                    </div>
                  </td>

                  <td class="price">
                    <span>{item.currentPrice * item.quantity}</span>
                  </td>

                  {/* {item.Ds > 0 && (
                    <td class="price">
                      <span>
                        {(
                          (item.MRP - (item.MRP * item.Ds) / 100) *
                          item.quantity
                        ).toFixed(2)}
                      </span>
                    </td>
                  )} */}
                  <td
                    onClick={cartItemRemoverHandler.bind(null, item)}
                    class="action"
                  >
                    <a href>&times;</a>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colspan="4">
                  <strong>Total</strong>
                </td>
                <td colspan="4">
                  <strong>
                    ৳ <span>{getCartModal.TotalAmmount.toFixed(2)}</span>
                  </strong>
                </td>
              </tr>
            </tfoot>
          </table>

          <div class="row-custom">
            {findActiveAddress !== undefined &&
              findActiveAddress?.name !== null && (
                <div class="shaping-address-saveing-row">
                  <div class="shapping-address-inner-content">
                    <div class="location-ad-icon">
                      <i class="fa fa-map-marker" aria-hidden="true"></i>
                    </div>
                    <div class="saving-address-content">
                      <small>
                        {findActiveAddress && findActiveAddress.name}
                      </small>
                      <small>
                        {findActiveAddress && findActiveAddress.phone}
                      </small>
                      <span>
                        <aside>
                          {findActiveAddress &&
                            findActiveAddress.typeOfAddress === 0 &&
                            "Home"}
                          {findActiveAddress &&
                            findActiveAddress.typeOfAddress === 1 &&
                            "Office"}
                          {findActiveAddress &&
                            findActiveAddress.typeOfAddress === 2 &&
                            "Home Town"}
                        </aside>
                      </span>
                      <span>
                        {findActiveAddress && findActiveAddress.email}
                      </span>
                      &nbsp;
                      <span>
                        {findActiveAddress &&
                          findActiveAddress.province.name +
                            "-" +
                            findActiveAddress.district.name +
                            "-" +
                            findActiveAddress.upazila.name +
                            "-" +
                            findActiveAddress.remarks}
                      </span>
                    </div>
                  </div>
                  <div class="saving-ad-btn" onClick={AddressActiveHandler}>
                    <button>Change</button>
                  </div>
                </div>
              )}

            <div class="cart_navigation">
              <Link class="prev-btn" to="/">
                <i
                  class="fa fa-angle-left check-ang-left"
                  aria-hidden="true"
                ></i>{" "}
                Continue shopping
              </Link>
              <a href class="next-btn" onClick={proceedToAddressHandler}>
                {" "}
                Proceed to checkout{" "}
                <i
                  class="fa fa-angle-right check-ang-right"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSummary;

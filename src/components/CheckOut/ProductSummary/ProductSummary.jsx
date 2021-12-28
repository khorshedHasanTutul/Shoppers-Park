import React, { useState } from "react";
import { Link } from "react-router-dom";
import { callBack } from "../../../Service/AppService";
import { CartService } from "../../../Service/CartContent";
import TableSingleItem from "./TableSingleItem";

const ProductSummary = ({ getAddressData,shippingInfoTab,data, proceedFunction, tabInformation,addressChangeHandler,savedShippingInfo }) => {
  const [CartContent, setCartContent] = useState(CartService.Get());
  CartService.Refresh = setCartContent;
  console.log({getAddressData})
  let findDefaultSelected=getAddressData.find(item=>item.IsDefault===true);
  if(!findDefaultSelected){
    findDefaultSelected=getAddressData[0];
  }
  console.log(['getaddressData 0',findDefaultSelected])
  console.log(["CharGeDataAmmount===>",savedShippingInfo.data])

  return (
    <div class="tab-content checkout-main-tab-content">
      {/* <!-- product desc review information --> */}
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
              <TableSingleItem data={CartContent} />
            </tbody>
            <tfoot>
              {/* <tr>
                <td colspan="2" rowspan="2"></td>
                <td colspan="3">Total Amount</td>
                <td colspan="2">
                  ৳ <span>{(CartContent.TotalAmount.toFixed(2))}</span>
                </td>
              </tr> */}
              {/* <tr>
                <td colspan="3">Delivery Charge</td>
                <td colspan="2">
                  ৳ <span>{ProductSummary}</span>
                </td>
              </tr> */}
              <tr>
                <td colspan="4">
                  <strong>Total</strong>
                </td>
                <td colspan="4">
                  <strong>
                    ৳ <span>{(CartContent.TotalAmount).toFixed(2)}</span>
                  </strong>
                </td>
              </tr>
            </tfoot>
          </table>
          <div class="row-custom">
            {/* <div class="order-inside-outside-main">
              <form>
                <div class="order-outside-inside-flex">
                  <DelivaryStatus statusFunction={statusFunction} />
                </div>
              </form>
            </div> */}
            {
              console.log({shippingInfoTab})
            }
            {
              (shippingInfoTab)&& 
               <div className="shaping-address-saveing-row">
              <div className="shapping-address-inner-content">
                <div className="location-ad-icon">
                   <i class="fa fa-map-marker" aria-hidden="true"></i>
                </div>
                <div className="saving-address-content">
                  {
                    (typeof (savedShippingInfo.data.Name)!=='undefined')?
                    <>
                     <small>{savedShippingInfo.data.Name}</small>
                  <small>{savedShippingInfo.data.Mobile}</small>
                  <span><aside>{savedShippingInfo.savedAddressInfo.text}</aside></span>
                  <span>{savedShippingInfo.data.Email}</span>
                  <span>{savedShippingInfo.data.Province + '-' + savedShippingInfo.data.District + '-' + savedShippingInfo.data.Upazila + '-' + savedShippingInfo.data.Remarks}</span>
                    </>:
                    <>
                  <small>{findDefaultSelected.Name}</small>
                  <small>{findDefaultSelected.Mobile}</small>
                  <span><aside>{findDefaultSelected.Type}</aside></span>
                  <span>{findDefaultSelected.Email}</span>
                  <span>{findDefaultSelected.Province + '-' + findDefaultSelected.District + '-' + findDefaultSelected.Upazila + '-' + findDefaultSelected.Remarks}</span>
                    </>
                  }
                  
                 
                </div>
              </div>
              <div className="saving-ad-btn">
                <button onClick={addressChangeHandler}>Change</button>
              </div>
            </div>
            }
           

            <div class="cart_navigation">
              <Link class="prev-btn" to="/home">
                <i
                  class="fa fa-angle-left check-ang-left"
                  aria-hidden="true"
                ></i>{" "}
                Continue shopping
              </Link>
              
              <a
                class="next-btn"
                onClick={callBack(proceedFunction)}
                href
              >
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
      {/* <!-- product desc review information --> */}
    </div>
  );
};

export default ProductSummary;

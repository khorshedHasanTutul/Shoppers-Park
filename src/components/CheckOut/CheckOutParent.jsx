import React, { useState } from "react";
import { CartService } from "../../Service/CartContent";
import AddressForm from "../AddressForm/AddressForm";
import CheckOutHeader from "./CheckOutHeader";
import CheckOutTabs from "./CheckOutTabs";
import Payment from "./Payment/Payment";
import ProductSummary from "./ProductSummary/ProductSummary";

const PaymentParent = () => {
  const data = CartService.Get();
  const [tabinfo, settabinfo] = useState(0);
  const [ShippingCost, setShippingCost] = useState();

  //   const activeButtonAddress = (index, event) => {
  //     setaddressButtonIndex(index);
  //     var element = document.querySelectorAll(".address-btn-group");
  //     for (let i = 0; i < element[0].childNodes.length - 1; i++) {
  //       element[0].childNodes[i].classList.remove("active");
  //     }
  //     event.target.className += " active";
  //     setaddressSaved(false);
  //   };

  const tabInformation = (index, item, evt) => {
    var element = document.getElementsByClassName("tab");
    for (let i = 0; i < element.length; i++) {
      element[i].children[0].classList.remove("activetab");
    }
    evt.target.className += " activetab";
    settabinfo(index);
  };

  const proceedFunction = (ProductSummary) => {
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
    setShippingCost(ProductSummary);
    if (ProductSummary > 0) {
      settabinfo(1);
      var element = document.getElementsByClassName("tab");
      for (let i = 0; i < element.length; i++) {
        element[i].children[0].classList.remove("activetab");
      }
      element[1].children[0].className += " activetab";
    } else alert("Please Select a Shipping Zone");
  };
  const proceedOrder = (phone, email, name, district, division, area) => {
    // if (phone.length === 0) alert("Please Enter Your Phone");
    // if (email.length === 0) alert("Please Enter Your Email");
    // if (name.length === 0) alert("Please Enter Your Name");
    // if (district.length === 0) alert("Please Enter Your District");
    // if (division.length === 0) alert("Please Enter Your Division");
    // if (area.length === 0) alert("Please Enter Your Area");

    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
    if (
      phone.length !== 0 &&
      email.length !== 0 &&
      name.length !== 0 &&
      district.length !== 0 &&
      division.length !== 0 &&
      area.length !== 0
    ) {
      var element = document.getElementsByClassName("tab");
      for (let i = 0; i < element.length; i++) {
        element[i].children[0].classList.remove("activetab");
      }
      element[2].children[0].className += " activetab";
      settabinfo(2);
    }
  };
  return (
    <>
      <CheckOutHeader />
      <section class="checkout-main-area">
        <div class="container">
          <div class="checkout-main-tab-area">
            {/* <!-- checkout-main-tab --> */}
            <div class="checkout-main-tab-information-main">
              <div class="page-content">
                <div class="tabbed">
                  <input
                    type="radio"
                    id="tab7"
                    name="css-tabs"
                    // defaultChecked
                  />
                  <input type="radio" id="tab8" name="css-tabs" />
                  <input type="radio" id="tab9" name="css-tabs" />

                  <CheckOutTabs tabInformation={tabInformation} />

                  <span class="card-shiping-item">
                    {" "}
                    Your shopping cart contains:
                    <small>{data.length} Product</small>
                  </span>
                  {tabinfo === 0 && (
                    <ProductSummary
                      data={data}
                      proceedFunction={proceedFunction}
                      tabInformation={tabInformation}
                    />
                  )}

                  {tabinfo === 1 && (
                    //   <Address proceedOrder={proceedOrder}/>
                    <AddressForm proceedOrder={proceedOrder} />
                  )}
                  {/* AddressComponentLoaded */}
                  {tabinfo === 2 && <Payment ShippingCost={ShippingCost} />}
                  {/* PaymentComponentLoaded */}
                </div>
              </div>
            </div>
            {/* <!-- checkout-main-tab --> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentParent;

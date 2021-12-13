import React, { useContext, useEffect, useState } from "react";
import { endpoints } from "../../lib/endpoints";
import { CartService } from "../../Service/CartContent";
import { http } from "../../Service/httpService";
import authContext from "../../Store/auth-context";
import AddressForm from "../AddressForm/AddressForm";
import CheckOutHeader from "./CheckOutHeader";
import CheckOutTabs from "./CheckOutTabs";
import Payment from "./Payment/Payment";
import ProductSummary from "./ProductSummary/ProductSummary";

const PaymentParent = () => {
  const data = CartService.Get();
  const [tabinfo, settabinfo] = useState(0);
  const authCtx=useContext(authContext)

    const [getAddressData, setgetAddressData] = useState([])
  const getAddress=()=>{
    http.post({
    url:endpoints.getAddress,
    payload:{
      PageNumber: 1,
      PageSize: 3,
      filter: [{
          field: "CustomerId",
          value: authCtx.user.id,
          "Operation": 0
      }]
    },
    before:()=>{
      console.log('get address started')
    },
    successed:(data)=>{
      setgetAddressData(data.Data);
      if(data.Data.length>0)
      setshippingInfoTab(true);
    },
    failed:()=>{
      console.log('failed')
    },
    always:()=>{
      console.log('end function')
    }
  })
  } 
  useEffect(() => {
    getAddress();
    return () => {
    }
  }, [])
  const [shippingInfoTab, setshippingInfoTab] = useState(false)

  const addressChangeHandler=()=>{
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
    settabinfo(1);
    var element = document.getElementsByClassName("tab");
      for (let i = 0; i < element.length; i++) {
        element[i].children[0].classList.remove("activetab");
      }
      element[1].children[0].className += " activetab";
  }

  const tabInformation = (index, item, evt) => {
    var element = document.getElementsByClassName("tab");
    for (let i = 0; i < element.length; i++) {
      element[i].children[0].classList.remove("activetab");
    }
    evt.target.className += " activetab";
    settabinfo(index);
  };

  const proceedFunction = () => {
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
    if(shippingInfoTab){
      settabinfo(2)
      var element = document.getElementsByClassName("tab");
      for (let i = 0; i < element.length; i++) {
        element[i].children[0].classList.remove("activetab");
      }
      element[2].children[0].className += " activetab";
    }
    else{
       settabinfo(1);
        element = document.getElementsByClassName("tab");
      for (let i = 0; i < element.length; i++) {
        element[i].children[0].classList.remove("activetab");
      }
      element[1].children[0].className += " activetab";
    }
     
      // var element = document.getElementsByClassName("tab");
      // for (let i = 0; i < element.length; i++) {
      //   element[i].children[0].classList.remove("activetab");
      // }
      // if(tabinfo===1)
      // element[1].children[0].className += " activetab";
      // else if(tabinfo===2)
      //   element[2].children[0].className += " activetab";

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
                    <small>{data.Items.length} Product</small>
                  </span>
                  {tabinfo === 0 && (
                    <ProductSummary
                      data={data}
                      proceedFunction={proceedFunction}
                      tabInformation={tabInformation}
                      addressChangeHandler={addressChangeHandler}
                      shippingInfoTab={shippingInfoTab}
                      getAddressData={getAddressData}
                    />
                  )}

                  {tabinfo === 1 && (
                    <AddressForm proceedOrder={proceedOrder} />
                  )}
                  {/* AddressComponentLoaded */}

                  {tabinfo === 2 && <Payment />}
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

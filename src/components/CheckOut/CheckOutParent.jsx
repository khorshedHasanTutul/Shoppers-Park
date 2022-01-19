import React, { useContext, useEffect, useState } from "react";
import { endpoints } from "../../lib/endpoints";
import { CartService } from "../../Service/CartContent";
import { http } from "../../Service/httpService";
import authContext from "../../Store/auth-context";
import AddressForm from "../AddressForm/AddressForm";
import PopUpAlert from "../utilities/Alert/PopUpAlert";
import CheckOutHeader from "./CheckOutHeader";
import CheckOutTabs from "./CheckOutTabs";
import Payment from "./Payment/Payment";
import ProductSummary from "./ProductSummary/ProductSummary";

const PaymentParent = () => {
  const data = CartService.Get();
  const [tabinfo, settabinfo] = useState(0);
  const authCtx = useContext(authContext);
  const [getAddressData, setgetAddressData] = useState([]);
  const [savedShippingInfo, setsavedShippingInfo] = useState({
    data: {},
    savedAddressInfo: {},
  });
  const [shippingInfoTab, setshippingInfoTab] = useState(false);
  const [alert, setalert] = useState(false);
  const [paymentShippingAddress, setpaymentShippingAddress] = useState('')
  const closeModal = () => {
    setalert((prevState) => !prevState);
  };

  useEffect(() => {
    const getCheckedData = getAddressData.find(
      (item) => item.IsDefault === true
    );

    if (getCheckedData) {
      setsavedShippingInfo({
        data: getCheckedData,
        savedAddressInfo: { text: getCheckedData.Type },
      });
    } else {
      if (getAddressData.find((item) => item.Type === "Home")) {
        const selectedTypeDataStore = getAddressData.find(
          (item) => item.Type === "Home"
        );
        setsavedShippingInfo({
          data: selectedTypeDataStore,
          savedAddressInfo: { text: selectedTypeDataStore.Type },
        });
      } else if (getAddressData.find((item) => item.Type === "Office")) {
        const selectedTypeDataStore = getAddressData.find(
          (item) => item.Type === "Office"
        );
        setsavedShippingInfo({
          data: selectedTypeDataStore,
          savedAddressInfo: { text: selectedTypeDataStore.Type },
        });
      } else if (getAddressData.find((item) => item.Type === "Home Town")) {
        const selectedTypeDataStore = getAddressData.find(
          (item) => item.Type === "Home Town"
        );
        setsavedShippingInfo({
          data: selectedTypeDataStore,
          savedAddressInfo: { text: selectedTypeDataStore.Type },
        });
      }
    }
  }, [getAddressData]);

  const getAddress = () => {
    http.post({
      url: endpoints.getAddress,
      payload: {
        PageNumber: 1,
        PageSize: 3,
        filter: [
          {
            field: "CustomerId",
            value: authCtx.user.id,
            Operation: 0,
          },
        ],
      },
      before: () => {
        console.log("get address started");
      },
      successed: (data) => {
        console.log("datamaaaaaaaaaaaaaaaan", data);
        if (data.Data) setgetAddressData(data.Data);
        if (data.Data.length > 0) setshippingInfoTab(true);
      },
      failed: () => {
        console.log("failed");
      },
      always: () => {
        console.log("end function");
      },
    });
  };
  useEffect(() => {
    getAddress();
  }, []);

  const addressChangeHandler = () => {
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
  };
  console.log({ getAddressData });

  const tabInformation = (index, item, evt) => {
    if (index === 2 && getAddressData.length === 0) {
      setalert(true);
      settabinfo(0);
      let element = document.getElementsByClassName("tab");
      for (let i = 0; i < element.length; i++) {
        element[i].children[0].classList.remove("activetab");
      }
      element[0].children[0].className += " activetab";
      return;
    }
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
    if (shippingInfoTab) {
      settabinfo(2);
      var element = document.getElementsByClassName("tab");
      for (let i = 0; i < element.length; i++) {
        element[i].children[0].classList.remove("activetab");
      }
      element[2].children[0].className += " activetab";
    } else {
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
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
    if (
      // phone.length !== 0 &&
      // email.length !== 0 &&
      // name.length !== 0 &&
      // district.length !== 0 &&
      // division.length !== 0 &&
      // area.length !== 0
      typeof savedShippingInfo.data !== "undefined"
    ) {
      var element = document.getElementsByClassName("tab");
      for (let i = 0; i < element.length; i++) {
        element[i].children[0].classList.remove("activetab");
      }
      element[2].children[0].className += " activetab";
      settabinfo(2);
    }
    // alert("Please select a valid address first")
    else setalert(true);
  };

  const selectedShippingInfo = (data, savedAddressInfo) => {
    console.log({ savedAddressInfo });
    if (data && savedAddressInfo) {
      //  settabinfo(0)
      //  var element = document.getElementsByClassName("tab");
      //  for (let i = 0; i < element.length; i++) {
      //    element[i].children[0].classList.remove("activetab");
      //  }
      //  element[0].children[0].className += " activetab";
      setsavedShippingInfo({ data: data, savedAddressInfo: savedAddressInfo });
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
                    <small> {data.Items.length} Product</small>
                  </span>
                  {tabinfo === 0 && (
                    <ProductSummary
                      data={data}
                      proceedFunction={proceedFunction}
                      tabInformation={tabInformation}
                      addressChangeHandler={addressChangeHandler}
                      shippingInfoTab={shippingInfoTab}
                      getAddressData={getAddressData}
                      savedShippingInfo={savedShippingInfo}
                    />
                  )}

                  {tabinfo === 1 && (
                    <AddressForm
                      onSave={getAddress}
                      addresses={getAddressData}
                      proceedOrder={proceedOrder}
                      selectedShippingInfo={selectedShippingInfo}
                      setsavedShippingInfo={setsavedShippingInfo}
                      setpaymentShippingAddress={setpaymentShippingAddress}
                    />
                  )}
                  {/* AddressComponentLoaded */}

                  {tabinfo === 2 && (
                    <Payment
                      savedShippingInfo={savedShippingInfo.data.ChargeAmount}
                      savedShippingData={savedShippingInfo.data}
                      addressChangeHandler={addressChangeHandler}
                      paymentShippingAddress={paymentShippingAddress}
                    />
                  )}
                  {/* PaymentComponentLoaded */}
                </div>
              </div>
            </div>
            {/* <!-- checkout-main-tab --> */}
          </div>
        </div>

        {alert && (
          <PopUpAlert
            content={"Please select a valid address first."}
            closeModal={closeModal}
          />
        )}
      </section>
    </>
  );
};

export default PaymentParent;

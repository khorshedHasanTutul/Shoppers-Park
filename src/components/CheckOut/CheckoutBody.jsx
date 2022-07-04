import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useHistory } from "react-router-dom";
import { goTO } from "../../helpers/utilities";
import { GET_ADDRESS, GET_PRODUCT_UPDATE } from "../../lib/endpoints";
import { storeAddressObj } from "../../Service/DataService";
import { httpV2 } from "../../Service/httpService2";
import addressContext from "../../Store/address-context";
import cartContext from "../../Store/cart-context";
import PopAlert from "../utilities/Alert/PopAlert";
import Suspense from "../utilities/Suspense/Suspense";
import Address from "./Address";
import Payment from "./Payment";
import ProductSummary from "./ProductSummary";

const CheckoutBody = () => {
  let history = useHistory();
  //cart context
  const ctxCart = useContext(cartContext);
  //address context
  const ctxAddress = useContext(addressContext);
  //store addresses from database state
  const [addresses, setAddresses] = useState([]);
  //loading
  const [isLoading, setIsLoading] = useState(true);
  //alert
  const [alert, setAlert] = useState(false);
  const [qtyAlert, setQtyAlert] = useState(false);
  //find active type address from context
  const getActiveTypeAddress = ctxAddress.getActiveType;
  const getCartModel = ctxCart.getCartModel;

  const [updateInfo, setUpdateInfo] = useState();
  //find active address
  const findActiveAddress = addresses?.find(
    (item) => item.typeOfAddress === getActiveTypeAddress.id
  );

  const ProSummaryRef = useRef(null);
  const [isActiveProductSummary, setActiveProductSummary] = useState(true);
  const [isActiveAddress, setActiveAddress] = useState(false);
  const [isActivePayment, setActivePayment] = useState(false);

  const SummaryActiveHandler = () => {
    setActiveProductSummary(true);
    setActiveAddress(false);
    setActivePayment(false);
    getAddressHttp();
    goTO();
  };

  const AddressActiveHandler = () => {
    setActiveProductSummary(false);
    setActiveAddress(true);
    setActivePayment(false);
    goTO();
  };

  const paymentActiveHandler = () => {
    if (okToProceed()) {
      setActiveProductSummary(false);
      setActiveAddress(false);
      setActivePayment(true);
      getAddressHttp();
    } else {
      setAlert(true);
      //   alert("Please Enter Valid Address!");
    }
    goTO();
  };

  //check whether to go to payment model or not
  const okToProceed = () => {
    if (
      (findActiveAddress !== undefined && findActiveAddress?.name !== null) ||
      (storeAddressObj.name.length > 0 &&
        storeAddressObj.mobile.length > 0 &&
        storeAddressObj.division.length > 0 &&
        storeAddressObj.district.length > 0 &&
        storeAddressObj.area.length > 0 &&
        storeAddressObj.address.length > 0)
    )
      return true;
    else return false;
  };

  const proceedToAddressHandler = () => {
    if (findActiveAddress === undefined || findActiveAddress?.name === null) {
      AddressActiveHandler();
    } else paymentActiveHandler();
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };

  const ProceedToOrderHandler = () => {
    if (okToProceed()) {
      paymentActiveHandler();
    } else {
      setAlert(true);
      //   alert("Please Enter Valid Address!");
    }
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };

  const alertStatusChangeHandler = () => {
    setAlert((prevState) => !prevState);
  };

  const qtyAlertStatusChangeHandler = () => {
    setQtyAlert((prevState) => !prevState);
  };

  //api request for get store addresses
  const getAddressHttp = () => {
    httpV2.get({
      url: GET_ADDRESS,
      before: () => {
        setIsLoading(true);
        const transformQuery = getCartModel.Items.map(
          (item) => "ids=" + item.id
        ).join("&");
        getUpdateProductInfo(transformQuery);
        
      },
      successed: (res) => {
        setAddresses(res.data);
        setIsLoading(false);
      },
      failed: () => {
        localStorage.removeItem("USER");
        history.push("/");
      },
      always: () => {
        setIsLoading(false);
      },
    });
  };

  const getUpdateProductInfo = useCallback((query) => {
    httpV2.get({
      url: GET_PRODUCT_UPDATE + query,
      before: () => {},
      successed: (res) => {
        setUpdateInfo(res.data);
        ctxCart.updateProductsPrice(res.data);
      },
      failed: () => {},
      always: () => {},
    });
  }, []);

  useEffect(() => {
    getAddressHttp();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (isActiveProductSummary) {
        ProSummaryRef.current.classList.add("active");
      } else {
        ProSummaryRef.current.classList.remove("active");
      }
      if (isActiveAddress) {
        ProSummaryRef.current.nextElementSibling.classList.add("active");
      } else {
        ProSummaryRef.current.nextElementSibling.classList.remove("active");
      }
      if (isActivePayment) {
        ProSummaryRef.current.parentNode.childNodes[2].classList.add("active");
      } else {
        ProSummaryRef.current.parentNode.childNodes[2].classList.remove(
          "active"
        );
      }
    }
  }, [isActiveProductSummary, isActiveAddress, isActivePayment, isLoading]);

  return (
    <section class="checkout-main-area">
      {!isLoading && (
        <div class="container">
          <div class="checkout-main-tab-area">
            <div class="checkout-main-tab-information-main">
              <div id="niiceeTab" class="page-content">
                <nav class="niiceeTabBtn">
                  <button
                    id="defaultOpen"
                    class="tablinks"
                    ref={ProSummaryRef}
                    onClick={SummaryActiveHandler}
                  >
                    01. Summary
                  </button>
                  <button class="tablinks" onClick={AddressActiveHandler}>
                    02. Address
                  </button>
                  <button class="tablinks" onClick={paymentActiveHandler}>
                    03. Payment
                  </button>
                </nav>
                <div class="tabbed niiceeTabContent">
                  <span class="card-shiping-item">
                    {" "}
                    Your shopping cart contains:
                    <small>{ctxCart.getCartModel.Items.length} Product</small>
                  </span>
                  {isActiveProductSummary && (
                    <ProductSummary
                      AddressActiveHandler={AddressActiveHandler}
                      proceedToAddressHandler={proceedToAddressHandler}
                      setQtyAlert={setQtyAlert}
                      addresses={addresses}
                    />
                  )}
                  {isActiveAddress && (
                    <Address
                      ProceedToOrderHandler={ProceedToOrderHandler}
                      getAddressCallFromCheckoutP={getAddressHttp}
                    />
                  )}
                  {isActivePayment && (
                    <Payment
                      addresses={addresses}
                      AddressActiveHandler={AddressActiveHandler}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {alert && (
        <PopAlert
          closeModal={alertStatusChangeHandler}
          content={"Please Enter Valid Address!"}
        />
      )}
      {qtyAlert && (
        <PopAlert
          closeModal={qtyAlertStatusChangeHandler}
          content={"Quantity can't be less than 1!"}
        />
      )}
      {isLoading && <Suspense />}
    </section>
  );
};

export default CheckoutBody;

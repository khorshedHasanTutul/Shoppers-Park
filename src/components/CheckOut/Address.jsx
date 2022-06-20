import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GET_ADDRESS, postAddress } from "../../lib/endpoints";
import { storeAddressObj } from "../../Service/DataService";
import { httpV2 } from "../../Service/httpService2";
import addressContext from "../../Store/address-context";
import Suspense from "../utilities/Suspense/Suspense";
import AddressList from "./AddressList";
import AddressValidation from "./AddressValidation/AddressValidation";
import AreaValidation from "./AddressValidation/AreaValidation";
import DistrictValidation from "./AddressValidation/DistrictValidation";
import Divisionvalidation from "./AddressValidation/Divisionvalidation";
import EmailValidation from "./AddressValidation/EmailValidation";
import MobileValidation from "./AddressValidation/MobileValidation";
import NameValidation from "./AddressValidation/NameValidation";
import BottomActiveAddress from "./BottomActiveAddress";

const Address = ({ ProceedToOrderHandler, getAddressCallFromCheckoutP }) => {
  const { pathname } = useLocation();
  //address context
  const ctxAddress = useContext(addressContext);
  //get active type
  const [activeType, setactiveType] = useState(ctxAddress.getActiveType);
  //get addresses from api set state
  const [addresses, setAddresses] = useState([]);

  //set address after updating from database state
  const [name, setNameP] = useState("");
  const [phone, setPhoneP] = useState("");
  const [email, setEmailP] = useState("");
  const [address, setAddressP] = useState("");
  const [divisionID, setDivisionId] = useState();
  const [districtId, setDistrictId] = useState();
  const [areaId, setAreaId] = useState();
  //end
  const [clicked, setClicked] = useState(false);
  //set active type of Address
  const [activeTypeAddress, setActiveTypeAddress] = useState({});
  //loading state
  const [isLoading, setIsLoading] = useState(true);
  //asign obj without saving data
  let addressObj = Object.assign({}, storeAddressObj);
  console.log({ divisionID }, { districtId }, { areaId });

  const saveAddresshandler = () => {
    addressObj = Object.assign({}, storeAddressObj);
    setClicked(true);
    // if (
    //   addressObj.name.length !== 0 &&
    //   addressObj.mobile.length !== 0 &&
    //   addressObj.division.name.length !== 0 &&
    //   addressObj.district.name.length !== 0 &&
    //   addressObj.area.name.length !== 0 &&
    //   addressObj.address.length !== 0
    // ) {
    //   ctxAddress.storeAddressCtx(addressObj);
    // }
    if (
      name.length > 0 &&
      phone.length > 0 &&
      divisionID !== "00000000-0000-0000-0000-000000000000" &&
      districtId !== "00000000-0000-0000-0000-000000000000" &&
      areaId !== "00000000-0000-0000-0000-000000000000" &&
      address
    ) {
      httpV2.post({
        url: postAddress,
        payload: {
          id: activeTypeAddress?.id,
          phone: phone,
          email: email,
          name: name,
          provinceId: divisionID,
          districtId: districtId,
          upazilaId: areaId,
          remarks: address,
          isPrimary: true,
        },
        before: () => {
          setIsLoading(true);
        },
        successed: (res) => {
          getAddressHttp();
          pathname !== "/profile/address" && getAddressCallFromCheckoutP();
        },
        failed: () => {
          console.log("failed");
        },
        always: () => {
          setIsLoading(false);
        },
      });
    }
  };

  const getDistrictHandler = (divisionId) => {
    setDivisionId(divisionId);
  };
  const getAreaHandler = (districtID) => {
    setDistrictId(districtID);
  };
  const getSelectAreaHandler = (areaID) => {
    setAreaId(areaID);
  };
  const getAddressHttp = () => {
    httpV2.get({
      url: GET_ADDRESS,
      before: () => {
        setIsLoading(true);
      },
      successed: (res) => {
        setAddresses(res.data);
        setActiveTypeAddress(
          res.data.find((item) => item.typeOfAddress === activeType.id)
        );
      },
      failed: () => {},
      always: () => {
        setIsLoading(false);
      },
    });
  };

  useEffect(() => {
    getAddressHttp();
  }, []);

  useEffect(() => {
    if (activeType.type !== ctxAddress.getActiveType.type) {
      setactiveType(ctxAddress.getActiveType);
      // getAddressHttp();
      setActiveTypeAddress(
        addresses.find(
          (item) => item.typeOfAddress === ctxAddress.getActiveType.id
        )
      );
    }
  }, [activeType, ctxAddress.getActiveType, addresses]);

  return (
    <>
      {!isLoading && (
        <div
          id="Tab4"
          class={
            pathname === "/profile/address"
              ? "tab-content checkout-main-tab-content"
              : "tabcontent tab-content checkout-main-tab-content"
          }
        >
          <div class="cart-add-tab-content">
            <div class="checkout-address-information-main">
              <div class="inner-shop-add-flex d-flexx">
                <span>Your contact information</span>
              </div>
              <div class="address-info-inner-flex">
                <div className={`address-info-from`}>
                  <form>
                    <div class="address-info-inner-content">
                      <NameValidation
                        clicked={clicked}
                        setNameP={setNameP}
                        fixName={activeTypeAddress?.name}
                      />
                      <MobileValidation
                        clicked={clicked}
                        setPhoneP={setPhoneP}
                        fixPhone={activeTypeAddress?.phone}
                      />
                      <EmailValidation
                        setEmailP={setEmailP}
                        fixEmail={activeTypeAddress?.email}
                      />

                      <div
                        className="grid-3 mb-16 g-8"
                        style={{ gap: "1.75rem" }}
                      >
                        <Divisionvalidation
                          clicked={clicked}
                          getDistrictHandler={getDistrictHandler}
                          fixDivision={activeTypeAddress?.province}
                          setDivisionId={setDivisionId}
                        />
                        <DistrictValidation
                          clicked={clicked}
                          divisionID={divisionID}
                          getAreaHandler={getAreaHandler}
                          fixDistrict={activeTypeAddress?.district}
                          setDistrictId={setDistrictId}
                        />
                        <AreaValidation
                          clicked={clicked}
                          districtId={districtId}
                          getSelectAreaHandler={getSelectAreaHandler}
                          fixArea={activeTypeAddress?.upazila}
                          setAreaId={setAreaId}
                        />
                      </div>
                      <AddressValidation
                        clicked={clicked}
                        setAddressP={setAddressP}
                        activeTypeAddress={activeTypeAddress}
                        fixArea={activeTypeAddress?.remarks}
                      />
                      <BottomActiveAddress
                        saveAddresshandler={saveAddresshandler}
                      />
                    </div>
                  </form>
                </div>
                {/* {pathname === "/checkout" && ( */}
                <AddressList addresses={addresses} />
                {/* )} */}
              </div>
            </div>
            {pathname === "/checkout" && (
              <div class="cart_navigation">
                <Link class="prev-btn" to="/">
                  <i
                    class="fa fa-angle-left check-ang-left"
                    aria-hidden="true"
                  ></i>{" "}
                  Continue shopping
                </Link>
                <a href class="next-btn" onClick={ProceedToOrderHandler}>
                  {" "}
                  Proceed to order{" "}
                  <i
                    class="fa fa-angle-right check-ang-right"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            )}
          </div>
        </div>
      )}
      {isLoading && <Suspense />}
    </>
  );
};

export default Address;

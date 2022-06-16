import React from "react";
import AddressContextProvider from "../../Store/AddressContextProvider";
import CheckoutBody from "./CheckoutBody";
import CheckoutHeader from "./CheckoutHeader";

const CheckoutParent = () => {
  return (
    <>
      <AddressContextProvider>
        <CheckoutHeader />
        <CheckoutBody />
      </AddressContextProvider>
    </>
  );
};

export default CheckoutParent;

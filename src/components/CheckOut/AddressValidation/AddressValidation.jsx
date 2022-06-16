import React, { useContext, useEffect, useState } from "react";
import { storeAddressObj } from "../../../Service/DataService";
import addressContext from "../../../Store/address-context";

const AddressValidation = ({ clicked, setAddressP, fixArea }) => {
  const ctxAddress = useContext(addressContext);
  const [address, setAddress] = useState("");
  const [addressIsTouched, setAddressIsTouched] = useState(false);
  const [addressValid, setAddressIsValid] = useState(false);
  const getCtxStoreAddress = ctxAddress?.getStoreAddressCtx;
  const getIfFindActiveType = getCtxStoreAddress?.find(
    (item) => item.type === ctxAddress.getActiveType
  );
  const addressChangeHandler = ({ target }) => {
    setAddress(target.value);
    storeAddressObj.address = target.value;
    setAddressP(target.value);
  };
  const addressIsTouchedHandler = () => {
    setAddressIsTouched(true);
  };

  useEffect(() => {
    if (clicked) {
      if (
        (addressIsTouched && address.length === 0) ||
        (!addressIsTouched && address.length === 0)
      ) {
        setAddressIsValid(true);
      } else setAddressIsValid(false);
    }
  }, [address.length, addressIsTouched, clicked]);

  useEffect(() => {
    if (fixArea) {
      setAddress(fixArea);
      setAddressP(fixArea);
    } else {
      setAddress("");
    }
  }, [fixArea, setAddressP]);

  return (
    <div class="address-textarea">
      <label for="message">Address</label>
      <textarea
        class="effect2"
        name="address"
        id="message"
        required
        onChange={addressChangeHandler}
        onBlur={addressIsTouchedHandler}
        value={address}
      ></textarea>
      {addressValid && (
        <div class="alert alert-error">Address is required.</div>
      )}
      {addressIsTouched && address.length === 0 && !addressValid && (
        <div class="alert alert-error">Address is required.</div>
      )}
    </div>
  );
};

export default AddressValidation;

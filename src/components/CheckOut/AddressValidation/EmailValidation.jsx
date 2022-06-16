import React, { useContext, useEffect, useState } from "react";
import { storeAddressObj } from "../../../Service/DataService";
import addressContext from "../../../Store/address-context";

const EmailValidation = ({setEmailP,fixEmail}) => {
  const ctxAddress = useContext(addressContext);
  const getCtxStoreAddress = ctxAddress?.getStoreAddressCtx;
  const getIfFindActiveType = getCtxStoreAddress?.find(
    (item) => item.type === ctxAddress.getActiveType
  );
  const [email, setEmail] = useState("");

  const emailChangeHandler = ({ target }) => {
    setEmail(target.value);
    storeAddressObj.email = target.value;
    setEmailP(target.value);
  };
  useEffect(()=>{
    if(fixEmail){
      setEmail(fixEmail);
      setEmailP(fixEmail);
    }
    else{
      setEmail('')
    }
  },[fixEmail,setEmailP])

  return (
    <div class="custom-input">
      <label for="email">Email</label>
      <input
        type="email"
        name=""
        id="email"
        required=""
        value={email}
        onChange={emailChangeHandler}
      />
      {/* <div class="alert alert-error">Email is required.</div> */}
    </div>
  );
};

export default EmailValidation;

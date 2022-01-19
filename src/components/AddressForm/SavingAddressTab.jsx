import React, { useEffect, useState } from "react";
import { callBack, Checkout } from "../../Service/AppService";

const SavingAddressTab = ({
  selectedShippingInfo,
  activeButtonAddress,
  getAddressData,
}) => {
  const [indexCheck, setindexCheck] = useState(0);
  const savedAddressButtonHandler=(index,item,findItem,e,)=>{
    const x=  callBack(activeButtonAddress,index,item)
    x(e)
    const y=callBack(selectedShippingInfo,findItem,item)
    y(e)
  }

  const count = 1;
  useEffect(() => {
    if (getAddressData.length > 0) {
      if (getAddressData.find((item) => item.Type === "Home")) {
        setindexCheck(0);
      } else if (getAddressData.find((item) => item.Type === "Office")) {
        setindexCheck(1);
      } else if (getAddressData.find((item) => item.Type === "Home Town")) {
        setindexCheck(2);
      }
    }
  }, [getAddressData]);
  return Checkout.SavingAddressTabData.map((item, index) => {
    const findItem = getAddressData.find(
      (itemInner) => itemInner.Type === item.text
    );
    // onClick={callBack(selectedShippingInfo, findItem, item)}
    // onClick={callBack(activeButtonAddress, index, item)}
    if (findItem) {
      return (
          <button
            className={
              "brick fill primary t-16 " +
              (index === indexCheck && count === 1 ? "active" : "")
            }
            onClick={savedAddressButtonHandler.bind(this,index,item,findItem)}
          >
            {item.text}
          </button>
      );
    } 
    else {
      return (
        <button
          className={
            "brick fill primary t-16 " +
            (index === indexCheck && count === 1 ? "active" : "")
          }
          onClick={callBack(activeButtonAddress, index, item)}
        >
          {item.text}
        </button>
      );
    }
  });
};
export default SavingAddressTab;

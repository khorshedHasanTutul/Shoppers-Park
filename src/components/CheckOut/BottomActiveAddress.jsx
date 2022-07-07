import React, { useContext, useEffect, useState } from "react";
import { storeAddressObj } from "../../Service/DataService";
import addressContext from "../../Store/address-context";
import appData from "../DataSource/appData";

const BottomActiveAddress = ({ saveAddresshandler }) => {
  const ctxAddress = useContext(addressContext);
  const getAddressList = appData.BottomActiveAddress;
  const [activeType, setactiveType] = useState(ctxAddress.getActiveType);
  //address type added in obj
  storeAddressObj.type = activeType;

  const activeTypeHandler = (item) => {
    ctxAddress.setActiveType(item);
    storeAddressObj.type = item.type;
    // ActiveIDAddressHandler();
  };

  useEffect(() => {
    if (activeType !== ctxAddress.getActiveType) {
      setactiveType(ctxAddress.getActiveType);
    }
  }, [activeType, ctxAddress.getActiveType]);

  return (
    <div class="all-address-save-btn">
      <div class="chosse-your-fvt-btn">
        {getAddressList.map((item) => (
          <button
            class={item.type === activeType.type && "active"}
            onClick={activeTypeHandler.bind(null, item)}
          >
            {item.type}
          </button>
        ))}
      </div>
      <div className="save-address">
        <button href onClick={saveAddresshandler}>
          Save Address
        </button>
      </div>
      {/* <!-- <div class="chosse-another-address">
                                        <a href="#">Save Address</a>
                                    </div> --> */}
    </div>
  );
};

export default BottomActiveAddress;

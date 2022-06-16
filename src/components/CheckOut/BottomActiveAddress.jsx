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
        <ul>
          {getAddressList.map((item) => (
            <li
              class={item.type === activeType.type && "active"}
              onClick={activeTypeHandler.bind(null, item)}
            >
              <a href>{item.type}</a>
            </li>
          ))}

          <li class="default-set">
            <a href onClick={saveAddresshandler}>
              Save Address
            </a>
          </li>
        </ul>
      </div>
      {/* <!-- <div class="chosse-another-address">
                                        <a href="#">Save Address</a>
                                    </div> --> */}
    </div>
  );
};

export default BottomActiveAddress;

import React from "react";
import { callBack, Checkout } from "../../Service/AppService";

const CheckOutTabs = ({ tabInformation }) => {
  const data = Checkout.TabData;
  const count=1;
  return (
    <ul class="tabs">
      {data.map((item, index) => (
        <li class="tab">
          <label
            class={index === 0 && count===1 ? "activetab" : ""}
            onClick={callBack(tabInformation, index, item)}
          >
            {item.tabText}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default CheckOutTabs;

import React from "react";
import appData from "../../DataSource/appData";

const BottomAddress = () => {
  return (
    <div class="footer-widget-single f-widget-1">
      <a href>
        <img src={appData.BottomAdress.img} alt="img" />
      </a>
      <ul>
        <li>
          Address: <span>{appData.BottomAdress.address}</span>
        </li>
        <li>
          Mobile:{" "}
          <a href={`tel:${appData.BottomAdress.mobile}`}>
            {appData.BottomAdress.mobile}
          </a>
        </li>
        <li>
          Email:{" "}
          <a href={`mailto:${appData.BottomAdress.email}`}>
            {appData.BottomAdress.email}
          </a>
        </li>
      </ul>
    </div>
  );
};
export default BottomAddress;

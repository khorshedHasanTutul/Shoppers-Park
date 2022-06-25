import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import appData from "../../DataSource/appData";

const BottomSocial = () => {
  return (
    <div class="footer-widget-single f-widget-4">
      <h2>Our Social Links</h2>
      <ul>
        {appData.BottomSocial.map((socialLinks) => (
          <li>
            <Link target="_blank" to={socialLinks.to}>
              <i class="" aria-hidden="true"></i>
              <FontAwesomeIcon icon={socialLinks.icon} />
            </Link>
          </li>
        ))}
      </ul>
      <ul class="shiping-system">
        <h2>Shipping System :</h2>
        <li>
          <img src={appData.BottomShipping.img} alt="img" />
        </li>
      </ul>
    </div>
  );
};
export default BottomSocial;

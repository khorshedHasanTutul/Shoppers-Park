import React from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../Service/httpService2";

const OffersHeaderSliderItem = ({ item }) => {
  return (
    <div class="top-offer-sliter-item">
      <Link to={item.link}>
        <img src={BASE_URL + item?.imageURL} alt="img" />
      </Link>
    </div>
  );
};

export default OffersHeaderSliderItem;

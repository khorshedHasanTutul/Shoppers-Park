import React from "react";
import { BASE_URL } from "../../../Service/httpService2";

const SmallSliderSingleItem = ({ item, imageChangedHandler }) => {
  return (
    <a
      href
      onClick={imageChangedHandler.bind(null, item)}
      style={{ cursor: "pointer" }}
    >
      <img src={BASE_URL + item.originalImageURL} alt="img" />
    </a>
  );
};

export default SmallSliderSingleItem;

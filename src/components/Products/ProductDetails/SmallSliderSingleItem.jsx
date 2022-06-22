import React from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../Service/httpService2";

const SmallSliderSingleItem = ({ item }) => {
  return (
    <a href>
      <img src={BASE_URL + item.originalImageURL} alt="img" />
    </a>
  );
};

export default SmallSliderSingleItem;

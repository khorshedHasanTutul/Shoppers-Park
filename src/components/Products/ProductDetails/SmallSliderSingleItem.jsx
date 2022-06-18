import React from "react";
import { Link } from "react-router-dom";

const SmallSliderSingleItem = ({ item }) => {
  return (
    <a href>
      <img src={item.originalImageURL} alt="img" />
    </a>
  );
};

export default SmallSliderSingleItem;

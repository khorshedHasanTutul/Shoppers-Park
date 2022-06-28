import React from "react";
import { Link } from "react-router-dom";

const BrandSingleItem = ({ brands }) => {
  //   const data = BrandData.filter(func);
  //   function func(item) {
  //     item = item.brand_name.toUpperCase().trim().charAt(0);
  //     return item === number;
  //   }
  return brands.map((item) => (
    <li class={"brandcat brand-"}>
      <div class="brandcatContainer">
        <Link to={"/brands/"} name="a" data-category="sortAllBrands health">
          <span>{item.name}</span>
        </Link>
      </div>
    </li>
  ));
};
export default BrandSingleItem;

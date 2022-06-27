import React from "react";
import { Link } from "react-router-dom";
import { BrandData } from "../../../Service/AppService";

const BrandSingleNumberItem = () => {
  const data = BrandData.filter(func);
  function func(item) {
    item = item.brand_name.toUpperCase().trim().charAt(0);
    if (item >= "0" && item <= "9") return item;
  }

  return (
    <>
      {data.map((item) => (
        <li class="brandcat brand-1">
          <div class="brandcatContainer">
            <Link
              to={"/brands/" + item.brand_id}
              name="4"
              data-category="sortAllBrands health"
            >
              <span>{item.brand_name}</span>
            </Link>
          </div>
        </li>
      ))}
    </>
  );
};

export default BrandSingleNumberItem;

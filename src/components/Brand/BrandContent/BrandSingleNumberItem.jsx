import React from "react";
import { Link } from "react-router-dom";
import { BrandData } from "../../../Service/AppService";

const BrandSingleNumberItem = ({numberItems}) => {


  return (
    <>
      {numberItems.map((item) => (
        <li class="brandcat brand-1">
          <div class="brandcatContainer">
            <Link
              to="/"
              name="4"
              data-category="sortAllBrands health"
            >
              <span>{item.brands}</span>
            </Link>
          </div>
        </li>
      ))}
    </>
  );
};

export default BrandSingleNumberItem;

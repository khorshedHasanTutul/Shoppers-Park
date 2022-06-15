import React from "react";
import appData from "../DataSource/appData";
import TotalCategoryProduct from "./TotalCategoryProduct";

const CategorySubItemProductList = ({
  subCategory_item,
  setalert,
}) => {
  

  if (subCategory_item.products.length === 0) {
    return false;
  } else
    return (
      <div class="catagory-main-product-area">
        <div class="hompe-common-title">
          <h2>{subCategory_item.name}</h2>
          <div class="my-header-underline"></div>
        </div>
        <TotalCategoryProduct
          products={subCategory_item.products}
          setalert={setalert}
        />
      </div>
    );
};
export default CategorySubItemProductList;

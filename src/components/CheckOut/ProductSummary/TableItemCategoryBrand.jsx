import React from "react";
import { Link } from "react-router-dom";

const TableItemCategoryBrand = ({ item }) => {
  // const categoryData=appData.ShopCategory.find(item2=>item2.categoryId===item.category_id);
  // const brandData=BrandData.find(item2=>item2.brand_id===item.brand_id);
  return (
    <td class="cart_description">
      <p class="product-name">
        <Link to={"/product/" + item.id}>{item.displayName}</Link>
      </p>
      {/* <small class="cart_ref">Category : {"hi"}</small>
        <br />
        <small>Brand: {"hello"} </small> */}
    </td>
  );
};
export default TableItemCategoryBrand;

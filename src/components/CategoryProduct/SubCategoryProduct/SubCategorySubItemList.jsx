import React from "react";
import appData from "../../DataSource/appData";
import SubCategoryItem from "./SubCategoryItem";

const SubCategorySubItemList = ({
  item,
//   categoryId,
//   subCategoryId,
  setalert,
}) => {

  if (item.products.length === 0) {
    return false;
  } else
    return (
      <div class="catagory-main-product-area">
        {/* <!-- common heading --> */}
        <div class="hompe-common-title">
          <h2>{item.name}</h2>
          <div class="my-header-underline"></div>
        </div>
        {/* <!-- common heading --> */}
        {/* <!-- single product catagory main area --> */}

        <SubCategoryItem
          products={item.products}
          setalert={setalert}
        />

        {/* <!-- single product catagory main area --> */}
      </div>
    );
};
export default SubCategorySubItemList;

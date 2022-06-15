import React from "react";
import SubCategorySubItemList from "./SubCategorySubItemList";

const SubCategoryTotalItem = ({ children, setalert }) => {
  if (children.length === 0) {
    return (
      <div className="pro-not-found-img-subcategory">
        <strong>
          {" "}
          <img src="/contents/assets/images/no-product-found.png" alt="" />{" "}
        </strong>
      </div>
    );
  } else
    return (
      <>
        {children.map((item) => (
          <SubCategorySubItemList item={item} setalert={setalert} />
        ))}
      </>
    );
};

export default SubCategoryTotalItem;

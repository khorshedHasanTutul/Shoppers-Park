import React from "react";
import SubCategorySubItemList from "./SubCategorySubItemList";

const SubCategoryTotalItem = ({ children, setalert }) => {
  const findEveryChildrenProducts = (children) => {
    const find = children.filter((item) => item.products.length > 0);
    return find.length > 0 ? true : false;
  };

  if (children.length === 0 || findEveryChildrenProducts(children) === false) {
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

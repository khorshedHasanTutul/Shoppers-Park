import React from "react";
import VisibleProductByCategory from "../VisibleProduct/VisibleProductByCategory";
import SubCategorySubItemList from "./SubCategorySubItemList";

const SubCategoryTotalItem = ({ children, setalert, products, name }) => {
  const findEveryChildrenProducts = (children) => {
    const find = children.filter((item) => item.products.length > 0);
    return find.length > 0 ? true : false;
  };

  if (
    products.length === 0 &&
    (children.length === 0 || findEveryChildrenProducts(children) === false)
  ) {
    return (
      <div className="pro-not-found-img-subcategory">
        <strong>
          {" "}
          <img src="/contents/assets/images/no-product-found.png" alt="" />{" "}
        </strong>
      </div>
    );
  } else if (children.length === 0 && products.length > 0) {
    return (
      <VisibleProductByCategory
        name={name}
        products={products}
        setalert={setalert}
      />
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

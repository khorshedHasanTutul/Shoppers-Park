import React, { useState } from "react";
import PopUpAlert from "../utilities/Alert/PopUpAlert";
import CategorySubItemProductList from "./CategorySubItemProductList";

const TotalCategoryItem = ({ children }) => {
  console.log({ children });
  const [alert, setalert] = useState(false);

  const closeModal = () => {
    setalert((prevState) => !prevState);
  };
  const findEveryChildrenProducts = (children) => {
    const find = children.filter((item) => item.products.length > 0);
    return find.length > 0 ? true : false;
  };

  if (children.length === 0 || findEveryChildrenProducts(children) === false) {
    return (
      <div class="container">
        <div className="pro-not-found-img-subcategory">
          <strong>
            {" "}
            <img
              src="/contents/assets/images/no-product-found.png"
              alt=""
            />{" "}
          </strong>
        </div>
      </div>
    );
  } else
    return (
      <section class="catagory-product-area view-all-sub-catagory">
        {alert && (
          <PopUpAlert
            content={"Already in your cart."}
            closeModal={closeModal}
          />
        )}
        <div class="container">
          {children.map((subCategory_item) => (
            <CategorySubItemProductList
              subCategory_item={subCategory_item}
              setalert={closeModal}
            />
          ))}
        </div>
      </section>
    );
};

export default TotalCategoryItem;

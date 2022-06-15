import React, { useState } from "react";
import appData from "../DataSource/appData";
import PopUpAlert from "../utilities/Alert/PopUpAlert";
import CategorySubItemProductList from "./CategorySubItemProductList";

const TotalCategoryItem = ({ children }) => {
  const [alert, setalert] = useState(false);

  const closeModal = () => {
    setalert((prevState) => !prevState);
  };

  if (children.length === 0) {
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

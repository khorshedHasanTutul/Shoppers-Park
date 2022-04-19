import React, { useState } from "react";
import {
  getDisplayCategories,
  getObjectFormatofData,
} from "../../../../Service/DataService";
import PopUpAlert from "../../../utilities/Alert/PopUpAlert";
import CategoryWiseProduct from "./CategoryWiseProduct";

const CategoryProducts = () => {
  const [alert, setalert] = useState(false);
  const closeModal = () => {
    setalert((prevState) => !prevState);
  };
  return (
    <section class="catagory-product-area">
      {alert && (
        <PopUpAlert content={"Already in your cart."} closeModal={closeModal} />
      )}

      {getDisplayCategories.map((item) => {
        const getDisplayCategory = getObjectFormatofData(item);
        return (
          <div class="container">
            <CategoryWiseProduct
              item={getDisplayCategory}
              setalert={closeModal}
            />
          </div>
        );
      })}
    </section>
  );
};
export default CategoryProducts;

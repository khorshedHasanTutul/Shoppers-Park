import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  getCategoryDataToObj,
  getDisplayCategories,
} from "../../Service/DataService";
import PopUpAlert from "../utilities/Alert/PopUpAlert";
import ShopAllProductCompo from "./ShopAllProductCompo";

const ShopAll = () => {
  const { id } = useParams();
  const [alert, setAlert] = useState(false);
  const closeModal = () => {
    setAlert((prevState) => !prevState);
  };
  const getSelectedCategoory = getCategoryDataToObj(
    getDisplayCategories.find((item) => item[0] === id)
  );
  return (
    <>
      {alert && (
        <PopUpAlert content={"Already in your cart."} closeModal={closeModal} />
      )}

      <section class="catagory-product-area view-all-sub-catagory sub2-shop-all-new-in-make-up">
        <div class="container">
          {/* <!-- repeat sub catagory single --> */}
          <div class="catagory-main-product-area">
            {/* <!-- common heading --> */}
            <div class="hompe-common-title">
              <h2>{getSelectedCategoory.name}</h2>
              <div class="my-header-underline"></div>
            </div>
            {/* <!-- common heading --> */}
            {/* <!-- single product catagory main area --> */}
            <div class="product-catagory-main-flex owl-slider-perk">
              <div class="product-catagory-inner-flex owl-slider-perk-items">
                {/* <!-- single item --> */}

                <ShopAllProductCompo setalert={closeModal} id={id} />
              </div>
            </div>
            {/* <!-- single product catagory main area --> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopAll;

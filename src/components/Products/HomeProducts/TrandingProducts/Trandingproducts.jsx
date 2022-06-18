import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  getTrandingDisplayProducts,
  returnDataAsObjectProperties,
} from "../../../../Service/DataService";
import PopUpAlert from "../../../utilities/Alert/PopUpAlert";
import SliderComponent from "../../../utilities/Slider/SliderComponent";
import ProductsInfoModel from "../../ProductsInfoModel";

const Trandingproducts = () => {
  const getTrandingProducts = getTrandingDisplayProducts;

  // const trandingObjectDataArray = getTrandingProducts.map(function (item) {
  //   return returnDataAsObjectProperties(item);
  // });
  // console.log({ trandingObjectDataArray });
  const [alert, setalert] = useState(false);

  const closeModal = () => {
    setalert((prevState) => !prevState);
  };
  const options = {
    rewind: true,
    type: "slide",
    autoplay: true,
    rewindSpeed: 1500,
    speed: 1000,
    perPage: 5,
    width: "100%",
    breakpoints: {
      375: {
        perPage: 2,
      },
      575: {
        perPage: 2,
      },
      991: {
        perPage: 3,
      },
      992: {
        perPage: 5,
      },
      1200: {
        perPage: 5,
      },
    },
  };

  return (
    <section class="tranding-right-now-home catagory-product-area">
      {alert && (
        <PopUpAlert content={"Already in your cart."} closeModal={closeModal} />
      )}
      <div class="container">
        <div class="catagory-main-product-area">
          {/* <!-- common heading --> */}
          <div class="hompe-common-title">
            <h2>{"top discounted offers"}</h2>
            <div class="my-header-underline"></div>
          </div>
          {/* <!-- common heading --> */}
          {/* <!-- single product catagory main area --> */}
          <div class="product-catagory-main-flex owl-slider-perk">
            <div class="product-catagory-inner-flex owl-slider-perk-items">
              {/* <!-- single item --> */}
              {getTrandingProducts.length > 5 && (
                <SliderComponent
                  data={getTrandingProducts}
                  options={options}
                  Template={ProductsInfoModel}
                  setalert={closeModal}
                />
              )}

              {getTrandingProducts.length <= 5 &&
                getTrandingProducts.map((item) => {
                  return (
                    <ProductsInfoModel item={item} setalert={closeModal} />
                  );
                })}
            </div>
            <div class="shop-all-offer-btn">
              <Link to="/offers">{"shop all top offers"}</Link>
            </div>
          </div>
          {/* <!-- single product catagory main area --> */}
        </div>
      </div>
    </section>
  );
};
export default Trandingproducts;

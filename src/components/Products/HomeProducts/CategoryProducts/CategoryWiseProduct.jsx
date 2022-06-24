import React from "react";
import { Link } from "react-router-dom";
import SliderComponent from "../../../utilities/Slider/SliderComponent";
import ProductsInfoModel from "../../ProductsInfoModel";

const CategoryWiseProduct = ({ item, setalert }) => {
  //slider options and breakpoints
  const options = {
    rewind: true,
    type: "slide",
    autoplay: true,
    rewindSpeed: 1500,
    speed: 1000,
    resetProgress: true,
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
  console.log("categoryProducts=>", item);

  return (
    <>
      {
        <div class="catagory-main-product-area home-single-product-catagory-item">
          {/* <!-- common heading --> */}
          <div class="hompe-common-title">
            <h2>{item.categoryName}</h2>
            <div class="my-header-underline"></div>
          </div>
          {/* <!-- common heading -->
                <!-- single product catagory main area --> */}
          <div class="product-catagory-main-flex owl-slider-perk">
            <div class="product-catagory-inner-flex owl-slider-perk-items">
              {/* <SliderComponent options={options}  Template={CategorySingleItem} setalert={setalert}/> */}
              {item.products.length > 5 && (
                <SliderComponent
                  data={item.products}
                  options={options}
                  Template={ProductsInfoModel}
                  setalert={setalert}
                />
              )}

              {item.products.length <= 5 &&
                item.products.map((item) => (
                  <ProductsInfoModel item={item} setalert={setalert} />
                ))}
            </div>
            <div class="shop-all-offer-btn">
              {/* to={"/category/" + item.category_id} */}
              <Link to={"/shopall/" + item.category_id}>
                {"Shop All " + item.categoryName}
              </Link>
            </div>
          </div>
          {/* <!-- single product catagory main area --> */}
        </div>
      }
    </>
  );
};

export default CategoryWiseProduct;

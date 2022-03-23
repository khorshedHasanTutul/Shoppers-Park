import React from "react";
import { Link } from "react-router-dom";
import appData from "../../../DataSource/appData";
import SliderComponent from "../../../utilities/Slider/SliderComponent";
import CategorySingleItem from "./CategorySingleItem";

const CategoryWiseProduct = ({ item, wishItemsGet, setalert }) => {
  const options = {
    rewind: true,
    type: "slide",
    autoplay: true,
    rewindSpeed: 1500,
    speed: 1000,
    resetProgress: true,
    perPage: 5,
    // perMove: 2,
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
    <>
      {
        <div class="catagory-main-product-area home-single-product-catagory-item">
          {/* <!-- common heading --> */}
          <div class="hompe-common-title">
            <h2>{item[1]}</h2>
            <div class="my-header-underline"></div>
          </div>
          {/* <!-- common heading -->
                <!-- single product catagory main area --> */}
          <div class="product-catagory-main-flex owl-slider-perk">
            <div class="product-catagory-inner-flex owl-slider-perk-items">
              {/* <SliderComponent options={options}  Template={CategorySingleItem} setalert={setalert}/> */}
              {item[3].length > 5 && (
                <SliderComponent
                  data={item[3]}
                  options={options}
                  Template={CategorySingleItem}
                  setalert={setalert}
                />
              )}
              {
                  item[3].length <=5 &&(
                      item[3].map(item=>(
                          <CategorySingleItem item={item}/>
                      ))
                  )
              }
            </div>
            <div class="shop-all-offer-btn">
              <Link to={"/category/" + item[0]}>
                {'Shop All '+ item[1]}
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

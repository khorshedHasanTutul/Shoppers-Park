import React from "react";
import ProductsInfoModel from "../../Products/ProductsInfoModel";
import SliderComponent from "../../utilities/Slider/SliderComponent";

const SubCategoryItem = ({ products, setalert }) => {
  const options = {
    rewind: true,
    type: "loop",
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
    <div class="product-catagory-main-flex owl-slider-perk">
      {
        <div class="product-catagory-inner-flex owl-slider-perk-items">
          {/* <!-- single item --> */}
          {products.length > 5 && (
            <SliderComponent
              options={options}
              data={products}
              Template={ProductsInfoModel}
              setalert={setalert}
              from="api"
            />
          )}
          {products.length <= 5 &&
            products.map((item) => (
              <ProductsInfoModel item={item} setalert={setalert} from="api" />
            ))}
        </div>
      }
    </div>
  );
};

export default SubCategoryItem;

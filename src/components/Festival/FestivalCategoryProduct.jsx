import React, { useCallback, useEffect, useState } from "react";
import { GET_FESTIVAL } from "../../lib/endpoints";
import { httpV2 } from "../../Service/httpService2";
import ProductsInfoModel from "../Products/ProductsInfoModel";
import SliderComponent from "../utilities/Slider/SliderComponent";
import Suspense from "../utilities/Suspense/Suspense";

const FestivalCategoryProduct = ({ setalert }) => {
  const [isGetting, setIsGetting] = useState(true);
  const [festival, setFestival] = useState([]);
  const [error, setError] = useState(false);
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
  const getCategoryWiseProducts = useCallback(() => {
    httpV2.get({
      url: GET_FESTIVAL,
      before: () => {
        setIsGetting(true);
      },
      successed: (res) => {
        setFestival(res.data);
        setIsGetting(false);
      },
      failed: () => {
        setError(true);
      },
      always: () => {
        setIsGetting(false);
      },
    });
  }, []);
  useEffect(() => {
    getCategoryWiseProducts();
  }, []);
  return (
    <>
      {!isGetting &&
        festival.length > 0 &&
        festival.map((item) => (
          <div class="catagory-main-product-area">
            {/* <!-- common heading --> */}
            <div class="hompe-common-title">
              <h2>{item.name}</h2>
              <div class="my-header-underline"></div>
            </div>
            {/* <!-- common heading --> */}
            {/* <!-- single product catagory main area --> */}
            <div class="product-catagory-main-flex owl-slider-perk">
              <div class="product-catagory-inner-flex owl-slider-perk-items">
                {/* <!-- single item --> */}
                <>
                  {item.product.length > 5 && (
                    <SliderComponent
                      options={options}
                      data={item.product}
                      Template={ProductsInfoModel}
                      setalert={setalert}
                      from={"api"}
                    />
                  )}
                  {item.product.length <= 5 &&
                    item.product.map((item2) => (
                      <ProductsInfoModel
                        item={item2}
                        setalert={setalert}
                        from={"api"}
                      />
                    ))}
                </>

                {/* <!-- single item --> */}
                {/* <!-- next prev --> */}
              </div>
            </div>

            {/* <!-- single product catagory main area --> */}
          </div>
        ))}
      {!isGetting && festival.length === 0 && (
        <div className="pro-not-found-img">
          <strong>
            {" "}
            <img
              src="/contents/assets/images/no-product-found.png"
              alt=""
            />{" "}
          </strong>
        </div>
      )}
      {isGetting && <Suspense />}
    </>
  );
};

export default FestivalCategoryProduct;

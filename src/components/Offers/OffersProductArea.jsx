import React, { useState } from "react";
import ProductsInfoModel from "../Products/ProductsInfoModel";
import PopUpAlert from "../utilities/Alert/PopUpAlert";
import SliderComponent from "../utilities/Slider/SliderComponent";
const OffersProductArea = ({ item }) => {
  console.log({ item });
  const [alert, setalert] = useState(false);
  const closeModal = () => {
    setalert((prevState) => !prevState);
  };
  // const headingArea = Offers.OffersProductArea.HeaderAreaText;
  // const data = appData.categoryProducts.filter(
  //   (item) => item.offer_status === true
  // );
  // data.sort((a, b) => b.Ds - a.Ds);
  // console.log("offersProduct=>", data);

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
    <section class="catagory-product-area">
      {alert && (
        <PopUpAlert content={"Already in your cart."} closeModal={closeModal} />
      )}
      <div class="container">
        <div class="catagory-main-product-area">
          {/* <!-- common heading --> */}
          {item.product.length !== 0 && (
            <div class="butifull-heading-title">
              <h4>{item.name}</h4>
            </div>
          )}
          {/* <!-- common heading --> */}
          {/* <!-- single product catagory main area --> */}
          {
            <div class="product-catagory-main-flex owl-slider-perk">
              <div class="product-catagory-inner-flex owl-slider-perk-items">
                {/* <!-- single item --> */}
                {item.product.length >= 5 && (
                  <SliderComponent
                    options={options}
                    data={item.product}
                    Template={ProductsInfoModel}
                    setalert={closeModal}
                    from={"api"}
                  />
                )}
                {item.product.length < 5 &&
                  item.product.map((item2) => (
                    <ProductsInfoModel
                      item={item2}
                      setalert={closeModal}
                      from={"api"}
                    />
                  ))}

                {/* <!-- next prev --> */}
              </div>
            </div>
          }

          {/* <!-- single product catagory main area --> */}
        </div>
      </div>
    </section>
  );
};

export default OffersProductArea;

import React, { useState } from "react";
import { Offers } from "../../Service/AppService";
import appData from "../DataSource/appData";
import ProductsInfoModel from "../Products/ProductsInfoModel";
import PopUpAlert from "../utilities/Alert/PopUpAlert";
import SliderComponent from "../utilities/Slider/SliderComponent";
const OffersProductArea = () => {
  const [alert, setalert] = useState(false);
  const closeModal = () => {
    setalert((prevState) => !prevState);
  };
  const headingArea = Offers.OffersProductArea.HeaderAreaText;
  const data = appData.categoryProducts.filter(
    (item) => item.offer_status === true
  );
  data.sort((a, b) => b.Ds - a.Ds);
  console.log("offersProduct=>", data);

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
          <div class="butifull-heading-title">
            <h4>{headingArea}</h4>
          </div>
          {/* <!-- common heading --> */}
          {/* <!-- single product catagory main area --> */}
          {
            <div class="product-catagory-main-flex owl-slider-perk">
              <div class="product-catagory-inner-flex owl-slider-perk-items">
                {/* <!-- single item --> */}
                {data.length >= 5 && (
                  <SliderComponent
                    options={options}
                    data={data}
                    Template={ProductsInfoModel}
                    setalert={closeModal}
                    from={"api"}
                  />
                )}
                {data.length < 5 &&
                  data.map((item) => (
                    <ProductsInfoModel
                      item={item}
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

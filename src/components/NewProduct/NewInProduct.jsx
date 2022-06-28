import React, { useState } from "react";
import { NewInPage } from "../../Service/AppService";
import appData from "../DataSource/appData";
import ProductsInfoModel from "../Products/ProductsInfoModel";
import PopUpAlert from "../utilities/Alert/PopUpAlert";
import SliderComponent from "../utilities/Slider/SliderComponent";

const NewInProduct = ({ items }) => {
  const [alert, setalert] = useState(false);
  const closeModal = () => {
    setalert((prevState) => !prevState);
  };

  return (
    <section class="top-new-in-product-area">
      {alert && (
        <PopUpAlert content={"Already in your cart."} closeModal={closeModal} />
      )}
      <div class="container">
        <div class="butifull-heading-title">
          <h4>{NewInPage.ProductAreaHeader}</h4>
        </div>
        <div class="product-catagory-main-flex owl-slider-perk">
          <div class="product-catagory-inner-flex owl-slider-perk-items">
            {/* <!-- single item --> */}

            {/* {
              <SliderComponent
                options={options}
                data={data}
                Template={ProductsInfoModel}
                setalert={closeModal}
                from={"api"}
              />
            
            } */}
            {/* {
              data.map((item) => (
                <ProductsInfoModel
                  item={item}
                  setalert={closeModal}
                  from={"api"}
                />
              ))} */}
            {/* <!-- next prev --> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewInProduct;

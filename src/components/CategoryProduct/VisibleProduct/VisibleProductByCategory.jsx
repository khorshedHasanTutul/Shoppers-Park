import React from "react";
import ProductsInfoModel from "../../Products/ProductsInfoModel";

const VisibleProductByCategory = ({ name, products, setalert }) => {
  return (
    <section class="catagory-product-area view-all-sub-catagory sub2-shop-all-new-in-make-up">
      <div class="container">
        {/* <!-- repeat sub catagory single --> */}
        <div class="catagory-main-product-area">
          {/* <!-- common heading --> */}
          <div class="hompe-common-title">
            <h2>{name}</h2>
            <div class="my-header-underline"></div>
          </div>
          {/* <!-- common heading --> */}
          {/* <!-- single product catagory main area --> */}
          <div class="product-catagory-main-flex owl-slider-perk">
            <div class="product-catagory-inner-flex owl-slider-perk-items">
              {/* <!-- single item --> */}
              {products.map((item) => (
                <ProductsInfoModel
                  item={item}
                  setalert={setalert}
                  from={"api"}
                />
              ))}
            </div>
          </div>
          {/* <!-- single product catagory main area --> */}
        </div>
      </div>
    </section>
  );
};

export default VisibleProductByCategory;

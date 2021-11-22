import React from 'react';
import BrandSingleProItem from './BrandSingleProItem';

const BrandSingleProductpage = ({data}) => {
    return (
        <section class="brand-single-product-details-area">
        <div class="container">
          <div class="catagory-main-product-area">
              {/* <!-- common heading --> */}
              <div class="hompe-common-title">
                  <h2>{data.brand_name}</h2>
                  <div class="my-header-underline"></div>
              </div>
              {/* <!-- common heading --> */}
              {/* <!-- single product catagory main area --> */}
              <div class="product-catagory-main-flex owl-slider-perk">
                  <div class="product-catagory-inner-flex owl-slider-perk-items">
                      {/* <!-- single item --> */}

                     <BrandSingleProItem data={data}/>

                  </div>
              </div>
              {/* <!-- single product catagory main area --> */}
          </div>
        </div>
    </section>  
    );
};

export default BrandSingleProductpage;
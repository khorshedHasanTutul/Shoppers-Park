import React, { useState } from 'react';
import PopUpAlert from '../../utilities/Alert/PopUpAlert';
import BrandSingleProItem from './BrandSingleProItem';

const BrandSingleProductpage = ({data}) => {
    const [alert, setalert] = useState(false)
    const closeModal=()=>{
        setalert(prevState=>!prevState)
    }
    return (
        <section class="brand-single-product-details-area">
             {
      (alert)&&<PopUpAlert content={'Already in your cart.'} closeModal={closeModal} />
  }

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

                     <BrandSingleProItem data={data} setalert={closeModal}/>

                  </div>
              </div>
              {/* <!-- single product catagory main area --> */}
          </div>
        </div>
    </section>  
    );
};

export default BrandSingleProductpage;
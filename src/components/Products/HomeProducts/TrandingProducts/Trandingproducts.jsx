import React from 'react'
import appData from '../../../DataSource/appData';
import TrandingProductSlider from '../../../utilities/Slider/TrandingProductSlider';

const Trandingproducts = () => {
    const options={
        rewind: true,
        type: 'loop',
        autoplay: true,
        rewindSpeed: 1500,
        speed: 1000,
        perPage: 5,
        width:'100%',
        breakpoints: {
            375: {
                perPage: 1,
            },
            575: {
                perPage: 2,
            },
            768: {
                perPage: 3,
            },
            992: {
                perPage: 5,
            },
            1200: {
                perPage: 5,
            }
      }

    }
    return (
        <section class="tranding-right-now-home catagory-product-area">
                <div class="container">
                    <div class="catagory-main-product-area">
                        {/* <!-- common heading --> */}
                        <div class="hompe-common-title">
                            <h2>Trending Right Now</h2>
                            <div class="my-header-underline"></div>
                        </div>
                        {/* <!-- common heading --> */}
                        {/* <!-- single product catagory main area --> */}
                        <div class="product-catagory-main-flex owl-slider-perk">
                            <div class="product-catagory-inner-flex owl-slider-perk-items">
                                {/* <!-- single item --> */}

                               <TrandingProductSlider  data={appData.TrandingProducts} options={options}/>
                                {/* <!-- next prev --> */}
                                {/* <div class="owl-nav">
                                    <button type="button" role="presentation" class="owl-prev disabled"><span aria-label="Previous">‹</span></button>
                                    <button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button>
                                </div> */}
                                {/* <!-- next prev --> */}
                            </div>
                        </div>
                        {/* <!-- single product catagory main area --> */}
                    </div>
                </div>
            </section>
    )
}
export default Trandingproducts;
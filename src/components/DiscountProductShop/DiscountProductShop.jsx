import React from 'react'
import appData from '../DataSource/appData';
import DiscountProductSlider from '../utilities/Slider/DiscountProductSlider';

const DiscountProductShop = () => {
    const options={
        rewind: true,
        type: 'loop',
        autoplay: true,
        rewindSpeed: 1500,
        speed: 1000,
        perPage: 4,
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
        <section class="home-page-shop-product-area">
        {/* <!-- banner slider area --> */}
        <div class="container">
            {/* <!-- banner inner product carosel --> */}
            <div class="banner-inner-product-main-area owl-slider-perk">
                <div class="banner-inner-product-main-flex owl-slider-perk-items">
                    {/* <!-- banner inner product single --> */}
                    <DiscountProductSlider data={appData.DiscountShopProduct} options={options} />
                    
                </div>
                <div class="shop-all-offer-btn">
                    <a href="#">shop all offer</a>
                </div>
            </div>
            {/* <!-- banner inner product carosel --> */}
        </div>
    </section>
    )
}
export default DiscountProductShop;
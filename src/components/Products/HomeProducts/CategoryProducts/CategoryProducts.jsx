import React from 'react'
import appData from '../../../DataSource/appData';
import CategorySlider from '../../../utilities/Slider/CategorySlider';


const CategoryProducts = () => {
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
            991: {
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
        <section class="catagory-product-area">
        <div class="container">
            <div class="catagory-main-product-area">
                {/* <!-- common heading --> */}
                <div class="hompe-common-title">
                    <h2>This weeks Star Buys for you</h2>
                    <div class="my-header-underline"></div>
                </div>
                {/* <!-- common heading -->
                <!-- single product catagory main area --> */}
                <div class="product-catagory-main-flex owl-slider-perk">
                    <div class="product-catagory-inner-flex owl-slider-perk-items">
                        <CategorySlider data={appData.categoryProducts} options={options}/>
                    </div>
                    <div class="shop-all-offer-btn">
                        <a href="#">Shop All Star Buys</a>
                    </div>
                </div>
                {/* <!-- single product catagory main area --> */}
            </div>
        </div>
    </section>
    )
}
export default CategoryProducts;

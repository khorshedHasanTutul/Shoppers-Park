import React from 'react';
import { Offers } from '../../Service/AppService';
import appData from '../DataSource/appData';
import SliderComponent from '../utilities/Slider/SliderComponent';
import OffersProductSingleItem from './OffersProductSingleItem';
const OffersProductArea = () => {
    const headingArea=Offers.OffersProductArea.HeaderAreaText;
    const concatData=appData.categoryProducts.concat(appData.TrandingProducts);
    
    const options={
        rewind: true,
        type: 'loop',
        autoplay: true,
        rewindSpeed: 1500,
        speed: 1000,
        perPage:5,
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
        <section class="catagory-product-area">
        <div class="container">
            <div class="catagory-main-product-area">
                {/* <!-- common heading --> */}
                <div class="butifull-heading-title">
                    <h4>{headingArea}</h4>
                </div>
                {/* <!-- common heading --> */}
                {/* <!-- single product catagory main area --> */}
                {
                    appData.ShopCategory.map(item=>(
                        <div class="product-catagory-main-flex owl-slider-perk">
                    <div class="product-catagory-inner-flex owl-slider-perk-items">
                        {/* <!-- single item --> */}
                        {
                            (item=concatData.filter(item2=>(item2.category_id==item.categoryId && item2.offer_status==true))).length>0 &&
                            <SliderComponent options={options} data={item} Template={OffersProductSingleItem} />
                        }
                        
                        {/* <!-- next prev --> */}
                    </div>
                </div>
                    ))
                }
                
                {/* <!-- single product catagory main area --> */}
            </div>
        </div>
    </section>
    );
};

export default OffersProductArea;
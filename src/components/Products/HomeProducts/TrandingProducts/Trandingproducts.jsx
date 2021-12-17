import React from 'react'
import { Link } from 'react-router-dom';
import { Offers } from '../../../../Service/AppService';
import appData from '../../../DataSource/appData';
import SliderComponent from '../../../utilities/Slider/SliderComponent';
import TrandingProductItem from './TrandingProductItem';

const Trandingproducts = ({wishItemsGet}) => {
    const textContent=Offers.OffersProductArea;
    const data=appData.categoryProducts.filter(item=>item.offer_status===true);
    data.sort((a,b)=>b.Ds-a.Ds);
    const options={
        rewind: true,
        type: 'slide',
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
        <section class="tranding-right-now-home catagory-product-area">
                <div class="container">
                    <div class="catagory-main-product-area">
                        {/* <!-- common heading --> */}
                        <div class="hompe-common-title">
                            <h2>{textContent.HeaderAreaText}</h2>
                            <div class="my-header-underline"></div>
                        </div>
                        {/* <!-- common heading --> */}
                        {/* <!-- single product catagory main area --> */}
                        <div class="product-catagory-main-flex owl-slider-perk">
                            <div class="product-catagory-inner-flex owl-slider-perk-items">
                                {/* <!-- single item --> */}

                             <SliderComponent options={options} data={data} Template={TrandingProductItem} wishItemsGet={wishItemsGet}/>
                                <div class="shop-all-offer-btn">
                                    <Link to="/offers">{textContent.buttonText}</Link>
                                </div>
                            </div>
                        </div>
                        {/* <!-- single product catagory main area --> */}
                    </div>
                </div>
            </section>
    )
}
export default Trandingproducts;
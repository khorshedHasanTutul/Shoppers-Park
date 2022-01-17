import React from 'react';
import { Link } from 'react-router-dom';
import appData from '../../../DataSource/appData';
import SliderComponent from '../../../utilities/Slider/SliderComponent';
import CategorySingleItem from './CategorySingleItem';

const CategoryWiseProduct = ({item,wishItemsGet,setalert}) => {
    const data=appData.categoryProducts.filter(item2=>item2.category_id===item.categoryId && item.categoryVisible===true)
    const options={
        rewind: true,
        type: 'slide',
        autoplay: true,
        rewindSpeed: 1500,
        speed: 1000,
        resetProgress:true,
        perPage: 5,
        // perMove: 2,
        width:'100%',
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
            }
      }
       
    }
    return (
        <>
        {
            (data.length>0) &&  <div class="catagory-main-product-area home-single-product-catagory-item">
                {/* <!-- common heading --> */}
                <div class="hompe-common-title">
                    <h2>{item.categoryName}</h2>
                    <div class="my-header-underline"></div>
                </div>
                {/* <!-- common heading -->
                <!-- single product catagory main area --> */}
                <div class="product-catagory-main-flex owl-slider-perk">
                    <div class="product-catagory-inner-flex owl-slider-perk-items">
                       <SliderComponent options={options} data={data} Template={CategorySingleItem} wishItemsGet={wishItemsGet} setalert={setalert}/>
                    </div>
                    <div class="shop-all-offer-btn">
                        <Link to={'/category/'+item.categoryId}>{item.buttonText+' '+item.categoryName}</Link>
                    </div>
                </div>
                {/* <!-- single product catagory main area --> */}
            </div>
        }
       </>
    );
};

export default CategoryWiseProduct;
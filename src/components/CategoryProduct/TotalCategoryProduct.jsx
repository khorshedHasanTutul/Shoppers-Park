import React from 'react';
import appData from '../DataSource/appData';
import SliderComponent from '../utilities/Slider/SliderComponent';
import ProductSingleItem from './ProductSingleItem';

const TotalCategoryProduct = ({category_id,subCategory_id}) => {
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
    const concatData=appData.categoryProducts.concat(appData.TrandingProducts);
    const data=concatData.filter(item=>(item.category_id==category_id && item.subCategory_id==subCategory_id))
    return (
        <>
        {
                <div class="product-catagory-main-flex owl-slider-perk">
                        <div class="product-catagory-inner-flex owl-slider-perk-items">
                            {/* <!-- single item --> */}
                            {
                                (data.length>0)&& <SliderComponent options={options} data={data} Template={ProductSingleItem} />
                            }
                            
                        </div> 
                </div>
        }
        </>
        
    );
};

export default TotalCategoryProduct;
import React from 'react';
import { ocassionCategory } from '../../Service/AppService';
import appData from '../DataSource/appData';
import SliderComponent from '../utilities/Slider/SliderComponent';
import FestivalProSingleItem from './FestivalProSingleItem';

const FestivalCategoryProduct = () => {
    const options={
        rewind: true,
        type: 'loop',
        autoplay: true,
        rewindSpeed: 1500,
        speed: 1000,
        perPage:5,
        width:'100%',

    }
    const concatData=appData.categoryProducts.concat(appData.TrandingProducts);

    
    
    return (
        <>
        {
          
            ocassionCategory.map((item)=>(
                <div class="catagory-main-product-area">
        {/* <!-- common heading --> */}
        <div class="hompe-common-title">
            <h2>{item.category_name}</h2>
            <div class="my-header-underline"></div>
        </div>
        {/* <!-- common heading --> */}
        {/* <!-- single product catagory main area --> */}
        <div class="product-catagory-main-flex owl-slider-perk">
            <div class="product-catagory-inner-flex owl-slider-perk-items">
                {/* <!-- single item --> */}

               {
                            (item=concatData.filter(item2=>(item2.FestivalCategory_id==item.category_id))).length>0 &&
                            <SliderComponent options={options} data={item} Template={FestivalProSingleItem} />
                        }

                {/* <!-- single item --> */}
                {/* <!-- next prev --> */}
            </div>
        </div>
        
        {/* <!-- single product catagory main area --> */}
    </div>
            ))
           
        }
         </>
    );
};

export default FestivalCategoryProduct;
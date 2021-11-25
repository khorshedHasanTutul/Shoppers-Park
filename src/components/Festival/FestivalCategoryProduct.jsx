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
    const concatData=appData.categoryProducts;
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
                            <>
                            {
                                (item.length>=5)&& <SliderComponent options={options} data={item} Template={FestivalProSingleItem} />
                            }
                            {
                                 (item.length<5)&&
                                 (item.map(item=>(
                                     <FestivalProSingleItem item={item}/>
                                 )))
                            }
                            </>
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
import React from 'react';
import appData from '../DataSource/appData';
import SliderComponent from '../utilities/Slider/SliderComponent';
import ProductSingleItem from './ProductSingleItem';

const TotalCategoryProduct = ({category_id,subCategory_id,setalert}) => {
    
    const options={
        rewind: true,
        type: 'slide',
        autoplay: true,
        rewindSpeed: 1500,
        speed: 1000,
        perPage:5,
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
    const concatData=appData.categoryProducts;
    const catId=parseInt(category_id);
    const subCatId=parseInt(subCategory_id)
    const data=concatData.filter(item=>(item.category_id===catId && item.subCategory_id===subCatId))
    if(data.length===0){
        return (
            <div class="no-product-found">
                <h6>"No Product Found!"</h6>
            </div>
        );
    }
    else
    return (
        <>
        {
                <div class="product-catagory-main-flex owl-slider-perk">
                        <div class="product-catagory-inner-flex owl-slider-perk-items">
                            {/* <!-- single item --> */}
                            {
                                (data.length>=5)&& <SliderComponent options={options} data={data} Template={ProductSingleItem} setalert={setalert}/>
                            }
                            {
                                 (data.length<5)&&
                                 (data.map(item=>(
                                     <ProductSingleItem item={item} setalert={setalert}/>
                                 )))
                            }
        
                            
                        </div> 
                </div>
        }
        </>
        
    );
};

export default TotalCategoryProduct;
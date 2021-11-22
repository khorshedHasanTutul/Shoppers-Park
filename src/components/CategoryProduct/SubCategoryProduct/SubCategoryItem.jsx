import React from 'react';
import appData from '../../DataSource/appData';
import SliderComponent from '../../utilities/Slider/SliderComponent';
import SubSingleItem from './SubSingleItem';

const SubCategoryItem = ({categoryId,subCategoryId,subCategoryItemID}) => {
    // console.log(['ids are',categoryId,subCategoryId,subCategoryItemID])
    const options={
        rewind: true,
        type: 'loop',
        autoplay: true,
        rewindSpeed: 1500,
        speed: 1000,
        perPage:5,
        width:'100%'
    }
    const concatData=appData.categoryProducts.concat(appData.TrandingProducts);
    const data=concatData.filter(item=>item.category_id==categoryId && item.subCategory_id==subCategoryId && item.subCategory_item_id==subCategoryItemID);
    return (
        <div class="product-catagory-main-flex owl-slider-perk">
            {
                
                    <div class="product-catagory-inner-flex owl-slider-perk-items">
                        {/* <!-- single item --> */}
                        {
                            (data.length>0)&&  <SliderComponent options={options} data={data} Template={SubSingleItem} />
                        }
                       
                    </div>
            
            }
                    
                </div>
    );
};

export default SubCategoryItem;
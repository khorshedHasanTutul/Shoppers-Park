import React from 'react';
import appData from '../../DataSource/appData';
import SliderComponent from '../../utilities/Slider/SliderComponent';
import SubSingleItem from './SubSingleItem';

const SubCategoryItem = ({categoryId,subCategoryId,subCategoryItemID,setalert}) => {
    // console.log(['ids are',categoryId,subCategoryId,subCategoryItemID])
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
    const catId=parseInt(categoryId)
    const subcatId=parseInt(subCategoryId)
    const subItemId=parseInt(subCategoryItemID)
    const data=concatData.filter(item=>item.category_id===catId && item.subCategory_id===subcatId && item.subCategory_item_id===subItemId);

    return (
        <div class="product-catagory-main-flex owl-slider-perk">
            {
                
                    <div class="product-catagory-inner-flex owl-slider-perk-items">
                        {/* <!-- single item --> */}
                       {
                                (data.length>=5)&& <SliderComponent options={options} data={data} Template={SubSingleItem} setalert={setalert} />
                            }
                            {
                                 (data.length<5)&&
                                 (data.map(item=>(
                                     <SubSingleItem item={item} setalert={setalert}/>
                                 )))
                            }
                       
                    </div>
            
            }
                    
                </div>
    );
};

export default SubCategoryItem;
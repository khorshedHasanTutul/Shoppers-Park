import React from 'react'
import appData from '../DataSource/appData';
import TotalCategoryProduct from './TotalCategoryProduct';

const CategorySubItemProductList = ({categoryId,subCategory_item}) => {
    const data=appData.categoryProducts.filter(item=>item.category_id==categoryId && item.subCategory_id==subCategory_item.subCategory_id);
    if(data.length===0){
        return false;
    }
    else
    return (
        <div class="catagory-main-product-area">
        <div class="hompe-common-title">
            <h2>{subCategory_item.subCategoryName}</h2>
            <div class="my-header-underline"></div>
        </div>
        <TotalCategoryProduct category_id={categoryId} subCategory_id={subCategory_item.subCategory_id}/>
    </div>
    )
}
export default CategorySubItemProductList;
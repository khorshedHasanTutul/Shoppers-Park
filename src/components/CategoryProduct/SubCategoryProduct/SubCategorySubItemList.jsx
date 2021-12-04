import React from 'react'
import appData from '../../DataSource/appData';
import SubCategoryItem from './SubCategoryItem';

const SubCategorySubItemList = ({item,categoryId,subCategoryId}) => {
    const data=appData.categoryProducts.filter(item2=>item2.category_id===categoryId && item2.subCategory_id===subCategoryId && item2.subCategory_item_id===item.subCategory_item);
    if(data.length===0){
        return false;
    }
    else
    return (
        <div class="catagory-main-product-area">
        {/* <!-- common heading --> */}
        <div class="hompe-common-title">
            <h2>{item.itemName}</h2>
            <div class="my-header-underline"></div>
        </div>
        {/* <!-- common heading --> */}
        {/* <!-- single product catagory main area --> */}

        <SubCategoryItem categoryId={categoryId} subCategoryId={subCategoryId} subCategoryItemID={item.subCategory_item}/>
        
        {/* <!-- single product catagory main area --> */}

        </div>
    )
}
export default SubCategorySubItemList;
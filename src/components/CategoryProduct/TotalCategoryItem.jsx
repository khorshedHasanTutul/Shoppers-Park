import React from 'react';
import appData from '../DataSource/appData';
import CategorySubItemProductList from './CategorySubItemProductList';

const TotalCategoryItem = ({categoryId}) => {
    const catId=parseInt(categoryId)
    const data=appData.ShopCategory.find(item=>(item.categoryId===catId)?item.subCategory :'');
    return (
        <section class="catagory-product-area view-all-sub-catagory">
        <div class="container">
        {
            
            data.subCategory.map(subCategory_item=>(
                <CategorySubItemProductList categoryId={categoryId} subCategory_item={subCategory_item}/> 

                    )) 
        }
      
        </div>
    </section>
    );
};

export default TotalCategoryItem;
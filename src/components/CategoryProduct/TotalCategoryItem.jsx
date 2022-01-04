import React from 'react';
import appData from '../DataSource/appData';
import CategorySubItemProductList from './CategorySubItemProductList';

const TotalCategoryItem = ({categoryId}) => {
    const catId=parseInt(categoryId)
    const data=appData.ShopCategory.find(item=>(item.categoryId===catId)?item.subCategory :'');
    const categoryData=appData.categoryProducts.filter(item=>item.category_id===catId);

    if(categoryData.length===0){
        return(
            <div class="container">
            <div className="pro-not-found-img-subcategory">
                <strong> <img src="/contents/assets/images/no-product-found.png" alt="" /> </strong>
            </div>
            </div>
           
        )
    }
    else
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
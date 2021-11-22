import React from 'react';
import appData from '../DataSource/appData';
import TotalCategoryProduct from './TotalCategoryProduct';

const TotalCategoryItem = ({categoryId}) => {
    const data=appData.ShopCategory.find(item=>(item.categoryId===parseInt(categoryId))?item.subCategory :'');
    return (
        <section class="catagory-product-area view-all-sub-catagory">
        <div class="container">
        {
            
            data.subCategory.map(subCategory_item=>(
                
                        <div class="catagory-main-product-area">
                    {/* <!-- common heading --> */}
                    <div class="hompe-common-title">
                        <h2>{subCategory_item.subCategoryName}</h2>
                        <div class="my-header-underline"></div>
                    </div>
                    {/* <!-- common heading --> */}
                    {/* <!-- single product catagory main area --> */}
                    
                    <TotalCategoryProduct category_id={categoryId} subCategory_id={subCategory_item.subCategory_id}/>

                    {/* <!-- single product catagory main area --> */}
                </div>
                    ))
                
                
            
        }
            {/* <!-- repeat sub catagory single --> */}
           
             {/* <!-- repeat sub catagory single --> */}
      
        </div>
    </section>
    );
};

export default TotalCategoryItem;
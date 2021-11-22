import React from 'react';
import appData from '../../DataSource/appData';
import SubCategoryItem from './SubCategoryItem';

const SubCategoryTotalItem = ({categoryId,subCategoryId}) => {
    const categoryData=appData.ShopCategory.find(item=>item.categoryId==categoryId);
    const subcategoryData=categoryData.subCategory.find(item=>item.subCategory_id==subCategoryId);
    return (
        <>
        {
           
           subcategoryData.subCategoryItem.map(item=>(
               
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
            ))
        }
        </>
    );
};

export default SubCategoryTotalItem;
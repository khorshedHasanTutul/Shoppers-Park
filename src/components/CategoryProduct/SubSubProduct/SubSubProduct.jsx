import React from 'react';
import { useParams } from 'react-router';
import appData from '../../DataSource/appData';
import SubSubAllProduct from './SubSubAllProduct';
import SubSubHeader from './SubSubHeader';

const SubSubProduct = () => {
    const {categoryId}=useParams();
    const catid=parseInt(categoryId)
    const {subCategoryId}=useParams();
    const subcatid=parseInt(subCategoryId);
    const {subItemId}=useParams();
    const subsubcatid=parseInt(subItemId);
    const categoryData=appData.ShopCategory.find(item=>item.categoryId ===catid);
    const subcategoryData=categoryData.subCategory.find(item=>item.subCategory_id===subcatid);
    const subItemData=subcategoryData.subCategoryItem.find(item=>item.subCategory_item===subsubcatid);

    
    return (
        <>
          <SubSubHeader categoryId={categoryData} subCategoryId={subcategoryData} subItemId={subItemData}/>

            <section class="catagory-product-area view-all-sub-catagory sub2-shop-all-new-in-make-up">
        <div class="container">
            {/* <!-- repeat sub catagory single --> */}
            <div class="catagory-main-product-area">
                {/* <!-- common heading --> */}
                <div class="hompe-common-title">
                    <h2>{subItemData.itemName}</h2>
                    <div class="my-header-underline"></div>
                </div>
                {/* <!-- common heading --> */}
                {/* <!-- single product catagory main area --> */}
                <div class="product-catagory-main-flex owl-slider-perk">
                    <div class="product-catagory-inner-flex owl-slider-perk-items">
                        {/* <!-- single item --> */}
                       
                       <SubSubAllProduct categoryId={categoryData} subCategoryId={subcategoryData} subItemId={subItemData}/>
              
                    </div>
                </div>
                {/* <!-- single product catagory main area --> */}
            </div>    
        </div>
    </section>
        </>
    );
};

export default SubSubProduct;
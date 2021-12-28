import React from 'react';
import { useParams } from 'react-router';
import appData from '../../DataSource/appData';
import SubCategoryProductHeader from './SubCategoryProductHeader';
import SubCategoryTotalItem from './SubCategoryTotalItem';

const SubCategoryProduct = () => {
    const {categoryId}=useParams();
    const {subCategoryId}=useParams()
    
    return (
        <>
        <SubCategoryProductHeader categoryId={categoryId} subCategoryId={subCategoryId}/>
        <section class="catagory-product-area view-all-sub-catagory">
        <div class="container">
            {/* <!-- repeat sub catagory single --> */}
              <SubCategoryTotalItem categoryId={categoryId} subCategoryId={subCategoryId}/>
        </div>
    </section>
        </>
    );
};

export default SubCategoryProduct;
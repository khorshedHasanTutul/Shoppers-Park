import React from 'react';
import { Link } from 'react-router-dom';
import appData from '../../DataSource/appData';

const SubCategoryProductHeader = ({categoryId,subCategoryId}) => {
    const catId=parseInt(categoryId)
    const subcatId=parseInt(subCategoryId)
    const categoryData=appData.ShopCategory.find(item=>item.categoryId===catId);
    const subCategoryData=categoryData.subCategory.find(item=>item.subCategory_id===subcatId);
  
    return (
        <section class="breadcrumb-main-area">
                <div class="container">
                    <nav aria-label="breadcrumb" class="breadcrumb-main">
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li class="breadcrumb-item"><Link to={'/category/'+categoryId}>{categoryData.categoryName}</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">{subCategoryData.subCategoryName}</li>
                        </ul>
                    </nav>
                </div>
            </section>
    );
};

export default SubCategoryProductHeader;
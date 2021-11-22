import React from 'react';
import { Link } from 'react-router-dom';
import appData from '../../DataSource/appData';

const SubCategoryProductHeader = ({categoryId,subCategoryId}) => {
    const categoryData=appData.ShopCategory.find(item=>item.categoryId==categoryId);
    const subCategoryData=categoryData.subCategory.find(item=>item.subCategory_id==subCategoryId);
  
    return (
        <section class="breadcrumb-main-area">
                <div class="container">
                    <nav aria-label="breadcrumb" class="breadcrumb-main">
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">{categoryData.categoryName}</a></li>
                            <li class="breadcrumb-item active" aria-current="page">{subCategoryData.subCategoryName}</li>
                        </ul>
                    </nav>
                </div>
            </section>
    );
};

export default SubCategoryProductHeader;
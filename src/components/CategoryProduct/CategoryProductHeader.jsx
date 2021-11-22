import React from 'react';
import { Link } from 'react-router-dom';
import appData from '../DataSource/appData';

const CategoryProductHeader = ({categoryId}) => {
        const data=appData.ShopCategory.find(item=>item.categoryId==categoryId);
        
    return (
        <section class="breadcrumb-main-area">
                <div class="container">
                    <nav aria-label="breadcrumb" class="breadcrumb-main">
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">{data.categoryName}</li>
                        </ul>
                    </nav>
                </div>
            </section>
    );
};

export default CategoryProductHeader;
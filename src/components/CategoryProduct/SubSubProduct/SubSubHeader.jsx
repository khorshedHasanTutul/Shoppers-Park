import React from 'react';
import { Link } from 'react-router-dom';
import appData from '../../DataSource/appData';

const SubSubHeader = ({categoryId,subCategoryId,subItemId}) => {
    
    return (
        <section class="breadcrumb-main-area">
                <div class="container">
                    <nav aria-label="breadcrumb" class="breadcrumb-main">
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li class="breadcrumb-item"><a href="#">{categoryId.categoryName}</a></li>
                            <li class="breadcrumb-item"><a href="#">{subCategoryId.subCategoryName}</a></li>
                            <li class="breadcrumb-item active" aria-current="page">{subItemId.itemName}</li>
                        </ul>
                    </nav>
                </div>
            </section>
    );
};

export default SubSubHeader;
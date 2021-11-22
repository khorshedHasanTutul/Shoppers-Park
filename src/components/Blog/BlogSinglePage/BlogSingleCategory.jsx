import React from 'react';
import { Link } from 'react-router-dom';
import { callBack } from '../../../Service/AppService';
import appData from '../../DataSource/appData';

const BlogSingleCategory = ({OnItemClick}) => {
    const data=appData.ShopCategory;
    return (
        
        <div class="blog-post-categories-main">
        <h5>Categories</h5>
        <ul>
            {
                data.map((category)=>(
                 <li><Link to="/blog" onClick={callBack(OnItemClick,category)}>{category.categoryName}</Link></li>
                ))
            }
           
        </ul>
    </div>
    );
};

export default BlogSingleCategory;
import React, { useState } from 'react'
import { BlogService } from '../../../Service/AppService';
import appData from '../../DataSource/appData';
import BlogSingleItem from './BlogSingleItem';
import { callBack } from '../../../Service/AppService';

const BlogCategory = ({OnItemClick}) => {

   console.log(['onCategoryClick',OnItemClick]);
   
const data=appData.ShopCategory;
    
    return (
        <div class="blog-post-categories-main">
                       <h5>Categories</h5>
                       <ul>
                           {
                               data.map((category)=>(
                                <li><a  onClick={callBack(OnItemClick,category)} >{category.categoryName}</a></li>
                               ))
                           }
                          
                       </ul>
                   </div>
    )
}
export default BlogCategory;
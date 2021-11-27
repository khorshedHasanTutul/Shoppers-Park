import React from 'react'
import appData from '../../DataSource/appData';
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
                                <li><a  onClick={callBack(OnItemClick,category)} href>{category.categoryName}</a></li>
                               ))
                           }
                          
                       </ul>
                   </div>
    )
}
export default BlogCategory;
import React, { useState } from 'react'
import { BlogService } from '../../../Service/AppService';
import BlogCategory from './BlogCategory';
import BlogRecentPost from './BlogRecentPost';
import BlogSingleItem from './BlogSingleItem';

export const BlogBody = () => {  
    var itemContext;
    function itemCallback(ctx){
        itemContext =ctx;
        console.log('itemContext',itemContext)
    };
    function onCategoryClick(item,evt){
        console.log(['item',item,this,evt]);
        itemContext.Refresh(item.categoryId);
    };
    return (
        <section class="blog-main-page-area">
        <div class="container">
            <div class="blog-page-main-flex">
                {/* <!-- blog view left --> */}
                <div class="blog-view-left">
                   <div class="shop-way-superdrag-main">
                       <div class="shop-way-superdrag-inner-flex">
                           {/* <!-- single item --> */}
                           <BlogSingleItem callBack={itemCallback} />

                       </div>
                       {/* <!-- pagenation for blog --> */}
                       <nav class="pagenation-for-web" aria-label="Page navigation example">
                           <ul class="pagination">
                               <li class="page-item">
                               <a class="page-link" href="#" aria-label="Previous">
                                   <span aria-hidden="true">&laquo;</span>
                                   <span class="sr-only">Previous</span>
                               </a>
                               </li>
                               <li class="page-item"><a class="page-link" href="#">1</a></li>
                               <li class="page-item active">
                               <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a> 
                               </li>
                               <li class="page-item"><a class="page-link" href="#">3</a></li>
                               <li class="page-item">
                               <a class="page-link" href="#" aria-label="Next">
                                   <span aria-hidden="true">&raquo;</span>
                                   <span class="sr-only">Next</span>
                               </a>
                               </li>
                           </ul>
                           </nav>
                       {/* <!-- pagenation for blog --> */}
                   </div>
               </div>
               {/* <!-- blog recent post right --> */}
               <div class="blog-recent-post-right">
                   {/* <!-- Categories --> */}
                   <BlogCategory OnItemClick={onCategoryClick} />
                   {/* <!-- Categories --> */}
                  <BlogRecentPost />
               </div>
            </div>
        </div>
    </section>
    )
}
export default BlogBody;
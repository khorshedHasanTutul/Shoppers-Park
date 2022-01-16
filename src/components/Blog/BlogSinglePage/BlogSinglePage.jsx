import React from 'react';
import BlogRecentPost from '../BlogContent/BlogRecentPost';
import BlogComment from './BlogComment';
import BlogItem from './BlogItem';
import BlogPostComent from './BlogPostComent';
import Nerwblogbrad from './Nerwblogbrad';

const BlogSinglePage = ({blogs}) => {
    
    // var itemContext;
    // function itemCallback(ctx){
    //     itemContext =ctx;
    // };
     
    // callBack=(func,data)=>{
    //     data.filter(func);
    // }

    // function onCategoryClick(item){
    //     console.log(['itemtutul',item])
    //     // itemContext.Refresh(item.categoryId);
    // };

    return (
        <div>
        <Nerwblogbrad></Nerwblogbrad>
        <section class="blog-main-page-area blog-single-page">
        <div class="container">
            <div class="blog-page-main-flex">
                {/* <!-- blog view left --> */}
                <div class="blog-view-left">
                   <div class="single-blog-shop-way-superdrag-main">
                       {/* <!-- blog img --> */}
                       {
                        //    (singlePageContext)? <BlogSingleItem callBack={itemCallback}/> :
                        //    <BlogItem />
                       }
                      <BlogItem blogs={blogs}/>
                      {/* <BlogSingleItem callBack={itemCallback}/> */}

                       {/* <!-- related blog post --> */}
                       {/* <ReleatedPOst /> */}
                      
                      {/* <SliderComponent options={options} data={callBack(getRelatedPost,ReleatedPOst)} Template={<BlogRelatedPost />}/> */}

                       {/* <!-- commnet replay area --> */}
                       <BlogComment />
                       {/* <!-- commnet replay area --> */}
                       {/* <!-- comment section for blog --> */}
                       <BlogPostComent />
                       {/* <!-- comment section for blog --> */}
                    </div>
                 </div>
               {/* <!-- blog recent post right --> */}
               <div class="blog-recent-post-right">
                   {/* <!-- Categories --> */}
                  {/* <BlogSingleCategory /> */}
                    {/* <BlogCategory  OnItemClick={onCategoryClick} /> */}
                   {/* <!-- Categories --> */}
                   <BlogRecentPost />
               </div>
            </div>
        </div>
    </section>
    </div>
    );
};

export default BlogSinglePage;
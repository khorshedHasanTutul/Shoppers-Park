import React from 'react';
import { callBack, ReleatedPOst } from '../../../Service/AppService';
import SliderComponent from '../../utilities/Slider/SliderComponent';
import BlogCategory from '../BlogContent/BlogCategory';
import BlogRecentPost from '../BlogContent/BlogRecentPost';
import BlogSingleItem from '../BlogContent/BlogSingleItem';
import BlogComment from './BlogComment';
import BlogItem from './BlogItem';
import BlogRelatedPost from './BlogRelatedPost';
import BlogSingleCategory from './BlogSingleCategory';
import Nerwblogbrad from './Nerwblogbrad';

const BlogSinglePage = ({blogs}) => {
    
    // var itemContext;
    // function itemCallback(ctx){
    //     itemContext =ctx;
    // };
     
    // callBack=(func,data)=>{
    //     data.filter(func);
    // }

    function onCategoryClick(item){
        console.log(['itemtutul',item])
        // itemContext.Refresh(item.categoryId);
    };

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
                       <div class="comment-sec-main">
                           <h2>Write a comment</h2>
                           <div class="comment-from-area">
                               <form>
                                   <div class="single-comment-inner-form">
                                       <div class="comment-textarea">
                                           <label for="message">Comment*</label>
                                           <textarea class="effect2" name="" id="message" required></textarea> 
                                       </div>
                                       <div class="comment-input-flex">
                                           <div class="custom-input">
                                               <label for="name">Name*</label>
                                               <input type="text" name="" id="name" required />
                                           </div>
                                           <div class="custom-input">
                                               <label for="email">Email*</label>
                                               <input type="email" name="" id="email" required />
                                           </div>
                                           <div class="custom-input">
                                               <label for="website">Website*</label>
                                               <input type="text" name="" id="website" required />
                                           </div>
                                       </div>
                                       <div class="custom-submit">
                                           <input class="cmt-submit" type="submit" value="post comment" />
                                       </div>
                                   </div>

                               </form>
                           </div>
                       </div>
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
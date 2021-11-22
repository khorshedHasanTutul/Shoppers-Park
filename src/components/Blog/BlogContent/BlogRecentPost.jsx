import React from 'react'
import { RecentPosts } from '../../../Service/AppService'
const BlogRecentPost = () => {
    return (
       
        <div class="blog-recent-post">
        <h5>Recent Posts</h5>
        {
            RecentPosts.map((item)=>(
                <div class="recent-blog-flex">
                <a href="#">
                    <div class="blog-p-img">
                        <img src={item.image} alt="img" />
                    </div>
                    <div class="blog-p-content">
                        <div class="heading-b-title">
                            <h6>{item.title}</h6>
                        </div>
                        <div class="inner-sub-blog-desc">
                            <time class="recent-posts-time">{item.created_date}</time>
                            <span>1 Comment</span>
                        </div>
                    </div>
                 </a>
            </div>
            ))
        }
        {/* <!-- single recent post --> */}
       

    </div>
    )
}
export default BlogRecentPost;
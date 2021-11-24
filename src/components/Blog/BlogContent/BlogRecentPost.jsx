import React from 'react'
import { Link } from 'react-router-dom';
import { BlogData} from '../../../Service/AppService'
const BlogRecentPost = () => {
    const date=new Date().getDate();
    const data=BlogData.filter(item=>(item.created_at-date<=7)? item : '')
    return (
       
        <div class="blog-recent-post">
        <h5>Recent Posts</h5>
        {
            data.map((item)=>(
                <div class="recent-blog-flex">
                <Link to={'/blog/'+item.id}>
                    <div class="blog-p-img">
                        <img src={item.image} alt="img" />
                    </div>
                    <div class="blog-p-content">
                        <div class="heading-b-title">
                            <h6>{item.postName}</h6>
                        </div>
                        <div class="inner-sub-blog-desc">
                            <time class="recent-posts-time">{item.created_at}</time>
                            <span>1 Comment</span>
                        </div>
                    </div>
                 </Link>
            </div>
            ))
        }
        {/* <!-- single recent post --> */}
       

    </div>
    )
}
export default BlogRecentPost;
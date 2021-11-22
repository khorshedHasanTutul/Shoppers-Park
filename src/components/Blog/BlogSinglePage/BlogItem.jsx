import React from 'react';
import BlogRelatedPost from './BlogRelatedPost';

const BlogItem = ({blogs}) => {
    console.log(blogs)
    return (
        <>
        {
            blogs.map((item)=>(
                <>
                <div class="blog-single-page-item">
                <div class="shop-drag-img">
                    <img src={item.image} alt="gif" />
                    <div class="post-date">
                        <span class="post-date-day">{item.date}</span>
                        <span class="post-date-month">{item.month}</span>
                    </div>
                </div>
            </div>
            
            <div class="shop-drag-comntent">
                <div class="meta-author">
                    <span>Posted by <small><a href="#">{item.postedBy}</a> </small></span>
                </div>
                <h3>{item.postName}</h3>
                <p>
                   {item.postContent}
                </p>
            </div>
            <BlogRelatedPost category_id={item.category_id} id={item.id} />
            </>
            ))
        }
      </>  
    );
    
};

export default BlogItem;
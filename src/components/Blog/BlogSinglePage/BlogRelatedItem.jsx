import React from 'react';
import { Link } from 'react-router-dom';

const BlogRelatedItem = ({item}) => {
    return (
        <div class="shop-way-superdrag-single-item">
        <Link to={'/blog/'+item.id}>
            <div class="shop-drag-img">
                <img src={item.image} alt="gif" />
                <div class="post-date">
                    <span class="post-date-day">{item.date}</span>
                    <span class="post-date-month">{item.month}</span>
                </div>
            </div>
            <div class="shop-drag-comntent">
                <div class="meta-author">
                    <span>Posted by <small>{item.postedBy}</small></span>
                </div>
                <h3>{item.postName}</h3>
                
                <p>{item.postContent}</p>
                <h4 class="block-btn">{item.buttonText}<img class="dot-img-hover" src={item.buttonImage} alt="img" /></h4>
            </div>
        </Link>
    </div>   
    );
};

export default BlogRelatedItem;
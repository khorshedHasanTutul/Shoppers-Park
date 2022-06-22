import React from 'react';
import ReviewSingleItem from './ReviewSingleItem';

const ReviewContent = () => {
    return (
        <div class="tab-content detalis-page-tab-content" style={{marginTop:0}}>
        {/* <!-- product desc review information --> */}
        <div class="product-comments-block-tab-review">
            <div class="new_comment_container" style={{margin:0}}>
                <div class="post-cmt-input-review">
                    <input placeholder="Post Your Review Here" type="text"/>
                </div>
                <div class="post-cmt-btn">
                    <button type="submit">Post</button>
                </div>
            </div>
            <p></p>
            <div class="comment_container">
                {/* <!-- single comment item --> */}
              <ReviewSingleItem />
                {/* <!-- single comment item --> */}
                
            </div>
        </div>
        {/* <!-- product desc review information --> */}
    </div>
    );
};

export default ReviewContent;
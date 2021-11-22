import React from 'react';
import { useParams } from 'react-router';
import { BlogCommentData } from '../../../Service/AppService';


const BlogComment = () => {
    const {id}=useParams();
    const commmentItem=BlogCommentData.filter(commentItem=>commentItem.blog_id==id)
    console.log(['commentItem',commmentItem])
    return (
        <div class="comment_container">
        {/* <!-- single comment item --> */}
        {
            commmentItem.map(item=>(
                <div class="cmt-item">
                <div class="cmt-row">
                    <div class="col ctr_img">
                        <div class="img_container">
                            <div class="img_round"><img src={item.image} /></div>
                        </div>
                    </div>
                    <div class="col commnet-dettail_container">
                        <div class="commnet-dettail">
                            <div>
                                <a><strong>{item.commenter_name}</strong></a>
                                <div></div>
                            </div>
                            <div class="commnet-content">{item.comment_content}</div>
                        </div>
                        <div class="comment_event">
                            <a class="comment_time col"><em>{item.date}</em></a><a class="btn_like"> Like </a><a class="btn_unlike"> Unlike </a><a class="btn_reply"> Reply </a>
                        </div>
                        <div class="comment_reply_container"></div>
                    </div>
                </div>
            </div>  
            ))
        }
       
    </div>
    );
};

export default BlogComment;
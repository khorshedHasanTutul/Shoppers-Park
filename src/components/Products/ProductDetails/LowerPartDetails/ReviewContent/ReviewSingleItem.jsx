import React from 'react';

const ReviewSingleItem = () => {
    return (
        <div class="cmt-item">
        <div class="cmt-row">
            <div class="col ctr_img">
                <div class="img_container">
                    <div class="img_round"><img src="/contents/assets/images/halloween/h1.png" /></div>
                </div>
            </div>
            <div class="col commnet-dettail_container">
                <div class="commnet-dettail">
                    <div>
                        <a><strong>Md. Sabbir Rahman</strong></a>
                        <div></div>
                    </div>
                    <div class="commnet-content">A class medicine store in Bangladesh........ Best wishes for LazzPharma</div>
                </div>
                <div class="comment_event">
                    <a class="comment_time col"><em>21, Apr-2021</em></a><a class="btn_like"> Like </a><a class="btn_unlike"> Unlike </a><a class="btn_reply"> Reply </a>
                </div>
                <div class="comment_reply_container"></div>
            </div>
        </div>
    </div>
    );
};

export default ReviewSingleItem;
import React from "react";

const ReviewSingleItem = ({ item }) => {
  return (
    <div class="cmt-item">
      <div class="cmt-row">
        <div class="col ctr_img">
          <div class="img_container">
            <div class="img_round">
              <img src="/contents/assets/images/no_productimg.jpg" alt="img" />
            </div>
          </div>
        </div>
        <div class="col commnet-dettail_container">
          <div class="commnet-dettail">
            <div>
              <a href>
                <strong>{item.customerName}</strong>
              </a>
              <div></div>
            </div>
            <div class="commnet-content">{item.content}</div>
          </div>
          <div class="comment_event">
            <a class="comment_time col" href>
              <em>{item.postDate.toString()}</em>
            </a>
            {/* <a class="btn_like" href>
              {" "}
              Like{" "}
            </a>
            <a class="btn_unlike" href>
              {" "}
              Unlike{" "}
            </a>
            <a class="btn_reply" href>
              {" "}
              Reply{" "}
            </a> */}
          </div>
          {/* <div class="comment_reply_container"></div> */}
        </div>
      </div>
    </div>
  );
};

export default ReviewSingleItem;

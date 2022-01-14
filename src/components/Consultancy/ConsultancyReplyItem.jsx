import React from 'react'

const ConsultancyReplyItem = ({replyValue}) => {
    return (
        <div className='consultancy-reply-item'>
            <div class="cmt-item-reply-area">
       <div class="cmt-item-reply-area-cmt-row">
          
           <div class="col commnet-dettail_container">
               <div class="commnet-dettail">
                   <div>
                       <a href><strong>Admin</strong></a>
                       <div></div>
                   </div>
                   <div class="commnet-content">{replyValue}</div>
               </div>
               <div class="comment_event">
               <a class="comment_time col" href><em>{new Date().toLocaleTimeString()}</em></a>
                    <a class="comment_time col" href><em>{new Date().toDateString()}</em></a>
               </div>
               <div class="comment_reply_container"></div>
           </div>

           <div class="col ctr_img">
               <div class="img_container">
                   <div class="img_round"><img src="/contents/assets/images/boy.jpg" alt="img" /></div>
               </div>
           </div>


       </div>
       
   </div>
        </div>
    )
}

export default ConsultancyReplyItem

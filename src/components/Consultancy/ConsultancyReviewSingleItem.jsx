import React, { useContext, useState } from 'react'
import authContext from '../../Store/auth-context'
import ConsultancyReplyItem from './ConsultancyReplyItem'

const ConsultancyReviewSingleItem = ({submitedTextValue}) => {
    const authCtx = useContext(authContext)
    const [replyValue, setreplyValue] = useState('')
    const [repliedValue, setrepliedValue] = useState('')
    const [replyVisible, setreplyVisible] = useState(false)
    const replyTextHandler=({target})=>{
        setreplyValue(target.value)
    }

    const submitReplyHandler=()=>{
        setreplyVisible(true)
        setrepliedValue(replyValue)
        setreplyValue('')

    }

    return (
        <>
        <div className='consultancy-reply'>
         <div class="cmt-item">
            <div class="cmt-row">
                <div class="col ctr_img">
                    <div class="img_container">
                        <div class="img_round"><img src="/contents/assets/images/boy.jpg" alt="img" /></div>
                    </div>
                </div>
                <div class="col commnet-dettail_container">
                    <div class="commnet-dettail">
                        <div>
                            <a href><strong>{(authCtx.getloginValue.name)?authCtx.getloginValue.name :'Customer'}</strong></a>
                            <div></div>
                        </div>
                        <div class="commnet-content">
                            <div className='submited-text-value'>
                            {submitedTextValue}
                            </div>
                        </div>
                    </div>
                    <div class="comment_event">
                        <a class="comment_time col" href><em>{new Date().toLocaleTimeString()}</em></a>
                        <a class="comment_time col" href><em>{new Date().toDateString()}</em></a>

                        {/* <a class="btn_like" href> Like </a><a class="btn_unlike" href> Unlike </a> */}
                    </div>
                       
                
                    
                </div>
                
            </div>

         
                 {(replyVisible)&&
                  <ConsultancyReplyItem replyValue={repliedValue}/>
                 } 
         

            <div class="comment_reply_container">
         <div className='post-cmt-input'>
         <textarea cols='7' rows='7' placeholder="Write your reply here..." type="text" onChange={replyTextHandler} value={replyValue}/>
         </div>
         {/* onClick={submitReplyHandler} */}
         <div class="reply-cmt-btn" >
         <i title='Send Message' class="fa fa-paper-plane" aria-hidden="true"><span onClick={submitReplyHandler}> Send</span></i>
         </div>
     </div>
        
    </div>
        </div>
         
        </>
        
       
    )
}

export default ConsultancyReviewSingleItem

import React, { useContext, useState } from 'react'
import authContext from '../../Store/auth-context'
import ConsultancyReplyItem from './ConsultancyReplyItem'

const ConsultancyReviewSingleItem = ({submitedTextValue}) => {
    const authCtx = useContext(authContext)
    const [replyArea, setreplyArea] = useState(false)
    const [replyValue, setreplyValue] = useState('')
    const [replyVisible, setreplyVisible] = useState(false)
    const [replied, setreplied] = useState(false)
    const replyButtonHandler=()=>{
        setreplyArea(true)
    }
    const replyTextHandler=({target})=>{
        setreplyValue(target.value)
    }

    const submitReplyHandler=()=>{
        setreplyVisible(true)
        setreplyArea(false)
        setreplied(true)
    }

    return (
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
                            <a href><strong>{authCtx.getloginValue.name}</strong></a>
                            <div></div>
                        </div>
                        <div class="commnet-content">{submitedTextValue}</div>
                    </div>
                    <div class="comment_event">
                        <a class="comment_time col" href><em>{new Date().toLocaleTimeString()}</em></a>
                        <a class="comment_time col" href><em>{new Date().toDateString()}</em></a>
                        {
                            (!replied)?<a class="btn_reply" href onClick={replyButtonHandler}> Reply </a>:
                            <a class="btn_reply" href > Replied </a>
                        }

                        {/* <a class="btn_like" href> Like </a><a class="btn_unlike" href> Unlike </a> */}
                    </div>
                    {
                        (replyArea)&&
                        <div class="comment_reply_container">
                            <div className='post-cmt-input'>
                            <input placeholder="Reply here..." type="text" onChange={replyTextHandler} value={replyValue}/>
                            </div>
                            <div class="reply-cmt-btn">
                                <button onClick={submitReplyHandler} type="submit">Reply</button>
                            </div>
                        </div>
                    }
                
                    
                </div>
                
            </div>

            <div>
                {
                    (replyVisible)&& <ConsultancyReplyItem replyValue={replyValue}/>
                }
            </div>
        
    </div>
        </div>
       
    )
}

export default ConsultancyReviewSingleItem

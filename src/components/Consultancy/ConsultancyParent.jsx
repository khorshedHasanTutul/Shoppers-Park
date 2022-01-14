import React, { useState } from 'react'
import ConsultancyReviewSingleItem from './ConsultancyReviewSingleItem'

const ConsultancyParent = () => {
    const [textValue, settextValue] = useState('')
    const [submitedTextValue, setsubmitedTextValue] = useState([])
    const [submitedValue, setsubmitedValue] = useState(false)
    const textChangeHandler=({target})=>{
        settextValue(target.value)
    }
    const submitButtonHandler=()=>{
        setsubmitedTextValue(textValue)
        settextValue('')
        setsubmitedValue(true)
    }
    console.log({submitedTextValue})
    return (
        <div className='container'>
        <div className='parent-cmt-2021'>
            <h2>Ask Us WhatEver...</h2>
        <div className='consultancy-container'>
             <div class="tab-content detalis-page-tab-content">
        {/* <!-- product desc review information --> */}
        <div class="product-comments-block-tab">
            <div class="new_comment_container">
                <div class="post-cmt-input">
                    <input placeholder="Post Your Query here..." type="text" onChange={textChangeHandler} value={textValue}/>
                </div>
                <div class="post-cmt-btn">
                    <button onClick={submitButtonHandler} type="submit">Post</button>
                </div>
            </div>
            <p></p>
            <div class="comment_container">
                {/* <!-- single comment item --> */}
                {
                    (submitedValue)&&
                    <ConsultancyReviewSingleItem submitedTextValue={submitedTextValue}/>
                }
              
                {/* <!-- single comment item --> */}
                
            </div>
        </div>
        {/* <!-- product desc review information --> */}
    </div>
        </div>

        </div>

        </div>
       
    )
}

export default ConsultancyParent

import React, { useState,useEffect,useContext } from 'react'
import authContext from '../../Store/auth-context'
import ModalPOpUp from '../MainHeader/TopHeader/AuthenticationPortal/ModalPOpUp'
import ConsultancyReviewSingleItem from './ConsultancyReviewSingleItem'

const ConsultancyParent = () => {
    const authCtx = useContext(authContext)
    const [alreadyQueryOne, setalreadyQueryOne] = useState(false)
    const [textValue, settextValue] = useState('')
    const [submitedTextValue, setsubmitedTextValue] = useState([])
    const [submitedValue, setsubmitedValue] = useState(false)
    const [textareaIsTouched, settextareaIsTouched] = useState(false)
    const [textareaValid, settextareaValid] = useState(false)
    const [loginPopupModel, setloginPopupModel] = useState(false)
    const [clicked, setclicked] = useState(false)
    const [consultancyPressed, setconsultancyPressed] = useState(false)
    const ModalClose=()=>{
        setloginPopupModel(false);
    }

    const textChangeHandler=({target})=>{
        settextValue(target.value)
    }
    const textAreaIsTouched=()=>{
        settextareaIsTouched(true)
    }

    useEffect(() => {
       if(clicked){
           if((textAreaIsTouched && textValue.length===0)|| (!textAreaIsTouched && textValue.length===0)){
               settextareaValid(true)
           }
           else
           settextareaValid(false)
       }

    }, [clicked,textValue.length])

    const submitButtonHandler=(e)=>{
        e.preventDefault()
         setclicked(true)
        if(authCtx.isLoggedIn!==true){
                setloginPopupModel(true)
                setconsultancyPressed(true)
        }
        else if(textValue.length!==0 && !textareaValid){
            setalreadyQueryOne(true)
            setsubmitedTextValue(textValue)
            settextValue('')
            setsubmitedValue(true)
        }

    }
    console.log({submitedTextValue})
    return (
        <div className='container'>
        <div className='parent-cmt-2021'>
            <h2>Any Query !...</h2>
        <div className='consultancy-container'>
             <div class="tab-content detalis-page-tab-content">
        {/* <!-- product desc review information --> */}
        <div class="product-comments-block-tab">
            {
                (!alreadyQueryOne)&&
                <div class="new_comment_container">
                <div class="post-cmt-input">
                    {/* <input placeholder="Post Your Query here..." type="text" onChange={textChangeHandler} value={textValue}/> */}
                    <textarea name="" placeholder="Post Your Query here..." onChange={textChangeHandler} value={textValue} onBlur={textAreaIsTouched}></textarea>
                </div>
                {
                    (textareaValid)&&
                    <div className='alert alert-error'>
                        Message is required.
                    </div>
                }
                {
                    (textareaIsTouched && textValue.length===0 && !textareaValid)&&
                    <div className='alert alert-error'>
                        Message is required.
                    </div>
                }
                <div class="post-cmt-btn">
                    <button onClick={submitButtonHandler} type="submit">Post</button>
                </div>
            </div>
            }
           
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
        {
            (loginPopupModel)&& <ModalPOpUp ModalOpen={ModalClose} consultancyPressed={consultancyPressed}/>
        }    
        </div>
       
    )
}

export default ConsultancyParent

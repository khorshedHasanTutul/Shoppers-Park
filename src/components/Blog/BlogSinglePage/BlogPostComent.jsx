import React, { useContext, useEffect, useState } from 'react'
import authContext from '../../../Store/auth-context'

const BlogPostComent = () => {
    const [comment, setcomment] = useState('')
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [commentIsTouched, setcommentIsTouched] = useState(false)
    const [nameIsTouched, setnameIsTouched] = useState(false)
    const [emailIsTouched, setemailIsTouched] = useState(false)
    const [nameValid, setnameValid] = useState(false)
    const [emailValid, setemailValid] = useState(false)
    const [commentValid, setcommentValid] = useState(false)
    const [clicked, setclicked] = useState(false)

    const authCtx = useContext(authContext)
    const commentChangeHandler=({target})=>{
        setcomment(target.value)
    }
    const nameChangeHandler=({target})=>{
        setname(target.value)
    }
    const emailChangeHandler=({target})=>{
        setemail(target.value)
    }
    const commentTouchedHandler=()=>{
        setcommentIsTouched(true)
    }
    const nameTouchedHandler=()=>{
        setnameIsTouched(true)
    }
    const emailTouchedHandler=()=>{
        setemailIsTouched(true)
    }
    const submitButtonHandler=(e)=>{
        e.preventDefault()
        setclicked(true)

    }
    useEffect(() => {
        if(authCtx.getloginValue.name){
            setname(authCtx.getloginValue.name)
        }
        if(authCtx.getloginValue.email){
            setemail(authCtx.getloginValue.email)
        }
    }, [authCtx.getloginValue.name,authCtx.getloginValue.email])

    useEffect(() => {
        if(clicked){
             if((nameIsTouched && name.length===0) || (!nameIsTouched && name.length===0)){
            setnameValid(true)
        }
        else
        setnameValid(false)
        if((commentIsTouched && comment.length===0)|| (!commentIsTouched && comment.length===0)){
            setcommentValid(true)
        }
        else
        setcommentValid(false)
        if((emailIsTouched && email.length===0)|| (!emailIsTouched && email.length===0)){
            setemailValid(true)
        }
        else
        setemailValid(false)
        }
       
    }, [clicked,nameIsTouched,name.length,commentIsTouched,comment.length,emailIsTouched,email.length])

   
    return (
        <div class="comment-sec-main">
        <h2>Write a comment</h2>
        <div class="comment-from-area">
            <form>
                <div class="single-comment-inner-form">
                    <div class="comment-textarea">
                
                            <label for="message">Comment*</label>
                        <textarea class="effect2" name="" id="message" onChange={commentChangeHandler} onBlur={commentTouchedHandler} value={comment}></textarea> 
                        {
                            (commentValid) && <div className='alert alert-error'>
                            Comment is required.
                            </div>
                        }
                        {
                            (commentIsTouched && comment.length===0 && !commentValid) &&
                            <div className='alert alert-error'>
                            Comment is required.
                            </div>
                        }
                        
                        
                    </div>
                    <div class="comment-input-flex">
                        <div class="custom-input">
                            <label for="name">Name*</label>
                            <input type="text" name="" id="name"  value={name} onChange={nameChangeHandler} onBlur={nameTouchedHandler} />
                            {
                            (nameValid) && <div className='alert alert-error'>
                            Name is required.
                            </div>
                        }
                        {
                            (nameIsTouched && name.length===0 && !nameValid) &&
                            <div className='alert alert-error'>
                            Name is required.
                            </div>
                        }
                        </div>
                        <div class="custom-input">
                            <label for="email">Email*</label>
                            <input type="email" name="" id="email"  onChange={emailChangeHandler} onBlur={emailTouchedHandler} value={email}/>
                            {
                            (emailValid) && <div className='alert alert-error'>
                            Email is required.
                            </div>
                        }
                        {
                            (emailIsTouched && email.length===0 && !emailValid) &&
                            <div className='alert alert-error'>
                            Email is required.
                            </div>
                        }
                        </div>
                        {/* <div class="custom-input">
                            <label for="website">Website*</label>
                            <input type="text" name="" id="website" required />
                        </div> */}
                    </div>
                    <div class="custom-submit">
                        <input class="cmt-submit" type="submit" value="post comment" onClick={submitButtonHandler}/>
                    </div>
                </div>

            </form>
        </div>
    </div>
    )
}

export default BlogPostComent

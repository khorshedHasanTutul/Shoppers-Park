import React, { useEffect, useState } from 'react';
import { endpoints } from '../../lib/endpoints';
import { http } from '../../Service/httpService';
import Popup from '../utilities/Popup/Popup';
import ContactPopUpAlert from './ContactPopUpAlert';

const ContactFrom = () => {
    const [name, setname] = useState('')
    const [nameIsTouched, setnameIsTouched] = useState(false)
    const [phone, setphone] = useState('')
    const [phoneIsTouched, setphoneIsTouched] = useState(false)
    const [email, setemail] = useState('')
    const [emailIsTouched, setemailIsTouched] = useState(false)
    const [message, setmessage] = useState('')
    const [messageIsTouched, setmessageIsTouched] = useState(false)
    const [nameValid, setnameValid] = useState(false)
    const [phoneValid, setphoneValid] = useState(false)
    const [emailValid, setemailValid] = useState(false)
    const [messageValid, setmessageValid] = useState(false)
    const [popUp, setpopUp] = useState(false)
    const [clicked, setclicked] = useState(false)
    const nameChangeHandler=({target})=>{
        setname(target.value)
    }
    const nameTouchedHandler=()=>{
        setnameIsTouched(true)
    }
    const phoneChangeHandler=({target})=>{
        setphone(target.value)
    }
    const phoneTouchedHandler=()=>{
        setphoneIsTouched(true)
    }
    const emailChangeHandler=({target})=>{
        setemail(target.value)
    }
    const emailTouchedHandler=()=>{
        setemailIsTouched(true)
    }
    const messageChangeHandler=({target})=>{
        setmessage(target.value)
    }
    const messageTouchedHandler=()=>{
        setmessageIsTouched(true)
    }
    const closePopUp=()=>{
        setpopUp(prevState=>!prevState)
    }
    useEffect(() => {
        if(clicked){
            
        if( (nameIsTouched && name.length===0) || (!nameIsTouched && name.length===0) ){
        setnameValid(true)
        }
        else
        setnameValid(false)

        if( (phoneIsTouched && phone.length===0) || (!phoneIsTouched && phone.length===0) ){
        setphoneValid(true)
        }
        else
        setphoneValid(false)

        if( (emailIsTouched && email.length===0) || (!emailIsTouched && email.length===0) ){
            setemailValid(true)
            }
        else
        setemailValid(false)

        if( (messageIsTouched && message.length===0) || (!messageIsTouched && message.length===0) ){
            setmessageValid(true)
            }
            else
            setmessageValid(false)
        }


    }, [name.length,nameIsTouched,phone.length,phoneIsTouched,emailIsTouched,email.length,messageIsTouched,message.length, clicked])
    
    const sendClickHandler=(e)=>{
        setclicked(true)
        e.preventDefault();
        if(name.length!==0 && phone.length!==0 && email.length!==0 && message.length!==0){
            http.post({
                url:endpoints.postContact,
                payload:{
                    Name:name,
                    Mobile: phone,
                    Email :email,
                    Massege :message,
                    ActivityId :'00000000-0000-0000-0000-000000000000',
                    Remarks :''
                },
                before:()=>{
                    console.log('program started');
                },
                successed:(data)=>{
                    setname('');
                    setemail('');
                    setphone('');
                    setmessage('');
                    setnameIsTouched(false);
                    setphoneIsTouched(false);
                    setemailIsTouched(false);
                    setmessageIsTouched(false);
                    setpopUp(true);
                    setnameValid(false);
                    setemailValid(false);
                    setphoneValid(false);
                    setmessageValid(false);
                },
                failed:()=>{
                    console.log('function failed')
                },
                always:()=>{
                    console.log('function end')
                }
            })
        }
    }


    return (
        <div class="contact-us-left">
        <div class="comment-from-area">
            <form>
                <div class="single-comment-inner-form">
                    <div class="comment-textarea">
                        <label for="message">Message*</label>
                        <textarea 
                        class="effect2" 
                        name="message" 
                        placeholder="Message" 
                        id="message" 
                        required
                        value={message}
                        onChange={messageChangeHandler}
                        onBlur={messageTouchedHandler}
                        ></textarea>
                        {
                        (messageValid) &&<div className="alert alert-error">Message is required.</div>
                        }
                        {
                             (messageIsTouched && message.length===0 && !messageValid) &&<div className="alert alert-error">Message is required.</div>
                        }
                    </div>
                    <div class="comment-input-flex">
                        <div class="custom-input">
                            <label for="name">Name*</label>
                            <input 
                            type="text"
                            name="name" 
                            placeholder="Name"
                            id="name"
                            value={name} 
                            required
                            onChange={nameChangeHandler} 
                            onBlur={nameTouchedHandler}
                            />
                             {
                                (nameValid) &&<div className="alert alert-error">Name is required.</div>
                             }
                            {
                             (nameIsTouched && name.length===0 && !nameValid) &&<div className="alert alert-error">Name is required.</div>
                            }
                        </div>
                       
                        <div class="custom-input">
                            <label for="phone">Phone*</label>
                            <input 
                            type="text" 
                            name="phone" 
                            placeholder="Phone" 
                            id="phone" 
                            value={phone}
                            required
                            onChange={phoneChangeHandler}
                            onBlur={phoneTouchedHandler}
                            />
                            {
                                (phoneValid) &&<div className="alert alert-error">Phone is required.</div>
                             }
                            {
                             (phoneIsTouched && phone.length===0 && !phoneValid) &&<div className="alert alert-error">Phone is required.</div>
                            }
                        </div>
                        <div class="custom-input">
                            <label for="email">Email*</label>
                            <input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            id="email" 
                            required 
                            value={email}
                            onChange={emailChangeHandler}
                            onBlur={emailTouchedHandler}
                            />
                            {
                                (emailValid) &&<div className="alert alert-error">Email is required.</div>
                             }
                            {
                             (emailIsTouched && email.length===0 && !emailValid) &&<div className="alert alert-error">Email is required.</div>
                            }
                        </div>
                    </div>
                    <div class="custom-submit">
                        <input class="cmt-submit" type="submit" value="Send" onClick={sendClickHandler}/>
                    </div>
                </div>
            </form>
            {
                (popUp)&& <Popup BodyComponent={ContactPopUpAlert} onClose={closePopUp} title={'Sent Successfully.'}/>
            }
        </div>
        
    </div>
    );
};

export default ContactFrom;
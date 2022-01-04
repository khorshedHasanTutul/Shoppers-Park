import React,{useContext, useEffect, useState} from 'react';
import { endpoints } from '../../../../lib/endpoints';
import { http } from '../../../../Service/httpService';
import authContext from '../../../../Store/auth-context';

const RegistrationModal = ({loginModalOpen,setModalCmp}) => {
    const [phone, setphone] = useState('')
    const [password, setpassword] = useState('')
    const [phoneIsTouched, setphoneIsTouched] = useState(false)
    const [phoneValidation, setphoneValidation] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordIsTouched, setpasswordIsTouched] = useState(false)
    const [passwordValidation, setpasswordValidation] = useState(false)
    const [mapData, setmapData] = useState('')
    const [errorMsgValue, seterrorMsgValue] = useState(false)
    const authCtx = useContext(authContext);
    const [saveBtnClicked, setsaveBtnClicked] = useState(false)

    const phoneChangeHandler=({target})=>{
        setphone(target.value);
    }
    const phoneTouchedHandler=()=>{
        setphoneIsTouched(true)
    }
    const passwordChangeHandler=({target})=>{
        setpassword(target.value);
    }
    const passwordTouchedHandler=()=>{
        setpasswordIsTouched(true)
    }
    const confirmPasswordChangeHandler=({target})=>{
        setConfirmPassword(target.value);
    }
    useEffect(() => {
        if(saveBtnClicked){
            if((phoneIsTouched && phone.length===0) || (!phoneIsTouched && phone.length===0)){
                setphoneValidation(true);
            }
            else
            setphoneValidation(false)
            if((passwordIsTouched && password.length===0)||(!passwordIsTouched && password.length===0)){
                setpasswordValidation(true)
            }
            else
            setpasswordValidation(false)
            if(phone.length===11 && password.length>=4 && password!==confirmPassword){
                seterrorMsgValue(true)
            }
            else
            seterrorMsgValue(false)
        }
    }, [phoneIsTouched,phone.length,passwordIsTouched,password.length,saveBtnClicked,confirmPassword,password])

    const loginSubmitHandler=(e)=>{
        e.preventDefault();
        setsaveBtnClicked(true)
        authCtx.registration.phone=phone;
        authCtx.registration.password=password;
        if(phone.length===11 && password.length>=4 && password===confirmPassword){
            http.post({
                url:endpoints.getOtp,
                payload:{
                    Phone:phone,
                    Password:password
                },
                before:()=>{
                    console.log('registratioin started')
                },
                successed:(data)=>{
                    authCtx.userOtpId.id=data.Id
                    setModalCmp(3)
                },
                failed:()=>{
                    console.log('failed')
                },
                always:()=>{
                    console.log('program end')
                },
                map:(data)=>{
                    // setmapData(data.Id)
                    // authCtx.userOtpId.Id=data.Id;
                    return data;
                }
            })
        }
       
    }
    return (
            <div>
                <div class="login-info-from">
                    <form>
                        <h2>registration to Shopper Perk</h2>
                        <div class="login-info-inner-content">
                            <div class="custom-input">
                                <label for="mobile">Mobile Number</label>
                                   <input 
                                type="text" 
                                name="" 
                                id="mobile" 
                                required="" 
                                onChange={phoneChangeHandler} 
                                value={phone}
                                onBlur={phoneTouchedHandler}
                                /> 
                                {phoneValidation && <div class="alert alert-error">Phone is required.</div>}
                                {(phoneIsTouched && phone.length===0 & !phoneValidation) ?<div class="alert alert-error">Phone is required.</div>:''}
                            </div>
                            <div class="custom-input">
                                <label for="password">Password</label>
                                <input 
                                type="password" 
                                name="" 
                                id="password" 
                                required="" 
                                onChange={passwordChangeHandler} 
                                value={password}
                                onBlur={passwordTouchedHandler}
                                />
                                 {passwordValidation && <div class="alert alert-error">Password should be minimum 4 charecter.</div>}
                                {(passwordIsTouched && password.length===0 & !passwordValidation)? <div class="alert alert-error">Password should be minimum 4 charecter.</div> :''}
                            </div>
                            <div class="custom-input">
                                <label for="confirmpassword">Confirm Password</label>
                                <input type="password" name="" id="confirmpassword" required="" onChange={confirmPasswordChangeHandler} value={confirmPassword}/>
                                {
                                    (errorMsgValue) && <span class="alert alert-error">Password not matched</span>
                                }
                            </div>
                            
                            <div class="login-submit">
                                <input type="submit" value="Registration" onClick={loginSubmitHandler}/>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="dont-have-account">
                    <p>Already a member?</p>
                    <a href onClick={loginModalOpen}>LogIn</a>
                </div>
            </div> 
    );
};

export default RegistrationModal;
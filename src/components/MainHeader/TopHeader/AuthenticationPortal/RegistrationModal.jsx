import React,{useContext, useState} from 'react';
import { endpoints } from '../../../../lib/endpoints';
import { http } from '../../../../Service/httpService';
import authContext from '../../../../Store/auth-context';

const RegistrationModal = ({loginModalOpen,setModalCmp}) => {
    const [phone, setphone] = useState('')
    const [password, setpassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [mapData, setmapData] = useState('')
    const [errorMsgValue, seterrorMsgValue] = useState(false)
    const authCtx = useContext(authContext);

    const phoneChangeHandler=({target})=>{
        setphone(target.value);
    }
    const passwordChangeHandler=({target})=>{
        setpassword(target.value);
    }
    const confirmPasswordChangeHandler=({target})=>{
        setConfirmPassword(target.value);
    }
    const loginSubmitHandler=(e)=>{
        e.preventDefault();
        authCtx.registration.phone=phone;
        authCtx.registration.password=password;
        if(password===confirmPassword){
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
        else{
            seterrorMsgValue(true)
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
                                <input type="text" name="" id="mobile" required="" onChange={phoneChangeHandler} value={phone}/>
                            </div>
                            <div class="custom-input">
                                <label for="password">Password</label>
                                <input type="password" name="" id="password" required="" onChange={passwordChangeHandler} value={password}/>
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
import React,{useState} from 'react';
import { endpoints } from '../../../../lib/endpoints';
import { http } from '../../../../Service/httpService';

const RegistrationModal = ({loginModalOpen,setModalCmp}) => {
    const [phone, setphone] = useState('')
    const [password, setpassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [mapData, setmapData] = useState('')

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
                setModalCmp(3)
            },
            failed:()=>{
                console.log('failed')
            },
            always:()=>{
                console.log('program end')
            },
            map:(data)=>{
                setmapData(data.Id)
            }
        })
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
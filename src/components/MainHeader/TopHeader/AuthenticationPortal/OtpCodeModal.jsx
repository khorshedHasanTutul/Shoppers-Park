import React, { useContext, useEffect, useState } from 'react';
import { endpoints } from '../../../../lib/endpoints';
import { http } from '../../../../Service/httpService';
import authContext from '../../../../Store/auth-context';
import { useHistory } from "react-router";

const OtpCodeModal = ({loginModalOpen,forgetPassModal,ModalOpen}) => {
    const [otpValue, setotpValue] = useState('')
    const [otpValidation, setotpValidation] = useState(false)
    const [otpIsTouched, setotpIsTouched] = useState(false)
    const [failedMessage, setfailedMessage] = useState(false)
    const authCtx = useContext(authContext)
    const [saveBtnClicked, setsaveBtnClicked] = useState(false)
    const history=useHistory();
    // console.log('iddddddd',authCtx.userOtpId.id)
    // console.log(authCtx.getRegistrationValue.password)
    const otpChangeHandler=({target})=>{
        setotpValue(target.value)
    }
    const otpTouchedHandler=()=>{
        setotpIsTouched(true)
    }
    useEffect(() => {
        if(otpIsTouched && otpValue.length===0){
            setotpValidation(true)
        }
        else
        setotpValidation(false)
    }, [otpIsTouched,otpValue.length])
    const savebtnClickedHandler=()=>{
        setsaveBtnClicked(true)
    }
    
    const submitButtonHandler=(e)=>{
        e.preventDefault();
        savebtnClickedHandler();
        if(otpValue.length!==0){
                http.post({
            url:endpoints.verifyOtp,
            payload:{
                Code:otpValue,
                Id:authCtx.userOtpId.id,
                ActivityId:'00000000-0000-0000-0000-000000000000'
            },
            before:()=>{
                console.log('function started');
            },
            successed:(data)=>{
               http.post({
                   url:endpoints.registration,
                   payload:{
                   Name:"",
                   Phone:authCtx.registration.phone,
                   Password:authCtx.registration.password,
                   OTPId:authCtx.userOtpId.id,
                   ActivityId:'00000000-0000-0000-0000-000000000000'
                },
                   before:()=>{
                       console.log('function start')
                   },
                   successed:(data)=>{
                       console.log(data)
                       http.post({
                        url: endpoints.login,
                        payload: {
                          UserName: authCtx.registration.phone,
                          Password: authCtx.registration.password,
                        },
                        before: () => {
                          console.log("request stareted");
                        },
                        successed: (data) => {
                          authCtx.login({
                            id: data.Id,
                            name: data.Name,
                            token: data.datacontent,
                            image: data.Icon,
                            email: data.Email,
                            phone: data.Phone,
                          });
                          history.push('/home')
                          ModalOpen();
                        },
                        failed: (data, msg) => {
                        },
                        always: () => {
                          console.log(`request end`);
                        },
                        // map:(data)=>{
                        //   return data.Id
                        // }
                      });
                   },
                   failed:()=>{
                    console.log('failed')
                   },
                   always:()=>{
                       console.log('function end')
                   }
                   
               })
            },
            failed:()=>{
                setfailedMessage(true)
            },
            always:()=>{
                console.log('program end');
            }
        })
        }
        else if(otpValue.length===0){
            setotpValidation(true)
            console.log('hello')
        }
        

    }
    const resendClickedHandler=(e)=>{
        e.preventDefault();
        http.post({
            url:endpoints.getOtp,
            payload:{
                Phone:authCtx.getRegistrationValue.phone,
                Password:authCtx.getRegistrationValue.password
            },
            before:()=>{
                console.log('registratioin started')
            },
            successed:(data)=>{
                authCtx.userOtpId.id=data.Id
                // setModalCmp(3)
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
    return (
            <div>
                <div class="login-info-from">
                    <form>
                        <h2>Please Enter Your Otp Code</h2>
                        <div class="login-info-inner-content">
                            <div class="custom-input">
                                <label for="mobile">Otp Code</label>
                                <input 
                                type="text" 
                                name="mobile" 
                                id="mobile" 
                                required="" 
                                value={otpValue}
                                onChange={otpChangeHandler}
                                onBlur={otpTouchedHandler}
                                />
                                {
                                    (failedMessage) && <span class="alert alert-error">Wrong OTP!</span>
                                }
                                {
                                    (otpValidation) && <span class="alert alert-error">OTP cant't be empty!</span>
                                }
                            </div>
                            <div class="login-submit" >
                               {/* <input type="submit" value="Next" />  */}
                                <a href onClick={submitButtonHandler}>Next</a>
                            </div>
                            {/* <div class="time-clock-otp">
                                <i class="fa fa-clock-o display-time" aria-hidden="true"></i>
                            </div> */}
                        </div>
                    </form>
                </div>
                <div class="dont-have-account">
                    <p>Didn't receive the OTP?</p>
                    <a href onClick={resendClickedHandler}>Resend</a>
                </div>
            </div> 
    );
};

export default OtpCodeModal;
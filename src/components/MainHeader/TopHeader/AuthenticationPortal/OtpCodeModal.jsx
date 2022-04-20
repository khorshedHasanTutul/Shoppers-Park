import React, { useContext, useEffect, useState } from "react";
import { getOtp, login, verifyOtp } from "../../../../lib/endpoints";
import authContext from "../../../../Store/auth-context";
import { useHistory } from "react-router";
import { httpV2 } from "../../../../Service/httpService2";
import Suspense from "../../../utilities/Suspense/Suspense";

const OtpCodeModal = ({ loginModalOpen, forgetPassModal, ModalOpen }) => {
  //otp state validation
  const [otpValue, setotpValue] = useState("");
  const [otpValidation, setotpValidation] = useState(false);
  const [otpIsTouched, setotpIsTouched] = useState(false);

  const authCtx = useContext(authContext);
  const history = useHistory();

  //failed msg check & saved btn clicked state
  const [failedMessage, setfailedMessage] = useState(false);
  const [saveBtnClicked, setsaveBtnClicked] = useState(false);

  //loader state
  const [isLoading, setIsLoading] = useState(false);

  // get context authentication values
  const user = {
    phone: authCtx.getRegistrationValue.phone,
    password: authCtx.getRegistrationValue.password,
  };

  //set otp & check validation
  const otpChangeHandler = ({ target }) => {
    setotpValue(target.value);
    setfailedMessage(false);
  };
  const otpTouchedHandler = () => {
    setotpIsTouched(true);
  };

  //useeffect for validation
  useEffect(() => {
    if (otpIsTouched && otpValue.length === 0) {
      setotpValidation(true);
    } else setotpValidation(false);
  }, [otpIsTouched, otpValue.length]);

  const savebtnClickedHandler = () => {
    setsaveBtnClicked(true);
  };

  const submitButtonHandler = (e) => {
    e.preventDefault();
    savebtnClickedHandler();
    if (otpValue.length !== 0) {
      //api request for otp
      httpV2.post({
        url: verifyOtp,
        payload: {
          phone: user.phone,
          password: user.password,
          requestId: authCtx.userOtpId.id,
          otp: otpValue,
        },
        before: () => {
          setIsLoading(true);
        },
        successed: (data) => {
          const loginInfo = {
            id: data.data.id,
            name: data.data.name,
            phone: data.data.phone,
            email: data.data.email,
            token: data.data.token,
          };
          authCtx.login(loginInfo);
          ModalOpen();
          history.push("/");
        },
        failed: (data) => {
          console.log(data);
          setfailedMessage(true);
        },

        always: () => {
          setIsLoading(false);
        },
      });
    } else if (otpValue.length === 0) {
      setotpValidation(true);
    }
  };

  //resend get otp if clicked
  const resendClickedHandler = (e) => {
    e.preventDefault();
    //api request for get otp again
    httpV2.post({
      url: getOtp,
      payload: {
        phone: user.phone,
        password: user.password,
      },
      before: () => {
        setIsLoading(true);
      },
      successed: (data) => {
        authCtx.userOtpId.id = data.data;
        authCtx.registration(user);
        setotpValidation(false);
        setfailedMessage(false);
      },
      failed: (data) => {
        console.log(data);
      },
      always: () => {
        setIsLoading(false);
      },
    });
  };
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
              {failedMessage && (
                <span class="alert alert-error">Wrong OTP!</span>
              )}
              {otpValidation && (
                <span class="alert alert-error">OTP cant't be empty!</span>
              )}
            </div>
            <div class="login-submit">
              {/* <input type="submit" value="Next" />  */}
              <a href onClick={submitButtonHandler}>
                Next
              </a>
            </div>
            {/* <div class="time-clock-otp">
                                <i class="fa fa-clock-o display-time" aria-hidden="true"></i>
                            </div> */}
          </div>
        </form>
      </div>
      <div class="dont-have-account">
        <p>Didn't receive the OTP?</p>
        <a href onClick={resendClickedHandler}>
          Resend
        </a>
      </div>
      {isLoading && <Suspense />}
    </div>
  );
};

export default OtpCodeModal;

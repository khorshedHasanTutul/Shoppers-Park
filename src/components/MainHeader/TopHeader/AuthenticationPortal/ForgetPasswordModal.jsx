import React, { useContext, useEffect, useState } from "react";
import { getOtp } from "../../../../lib/endpoints";
import { httpV2 } from "../../../../Service/httpService2";
import authContext from "../../../../Store/auth-context";

const ForgetPasswordModal = ({ OtpModal, loginModalOpen }) => {
  const authCtx = useContext(authContext);
  const [isLoading, setIsLoading] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneIsTouched, setPhoneIsTouched] = useState(false);
  const [phoneIsValid, setPhoneIsValid] = useState(false);

  const [password, setpassword] = useState("");
  const [passwordIsTouched, setPasswordIsTouched] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  const [rePassword, setRePassword] = useState("");
  const [rePasswordIsTouched, setRePasswordIsTouched] = useState(false);
  const [rePasswordIsValid, setRePasswordIsValid] = useState(false);

  const [checkedPasswaard, setCheckPassword] = useState(false);

  const phoneChangehandler = ({ target }) => {
    setPhone(target.value);
  };
  const passwordChangeHandler = ({ target }) => {
    setpassword(target.value);
  };
  const rePassChangehandler = ({ target }) => {
    setRePassword(target.value);
    setCheckPassword(false);
  };
  const phoneTouchedHandler = () => {
    setPhoneIsTouched(true);
  };
  const passwordTouchedHandler = () => {
    setPasswordIsTouched(true);
  };
  const rePassTouchedHandler = () => {
    setRePasswordIsTouched(true);
  };
  const submitHandler = () => {
    const user = {
      phone: phone,
      password: password,
    };
    setClicked(true);
    if (password !== rePassword) {
      setCheckPassword(true);
      return;
    }
    if (
      phone.length === 11 &&
      password.length >= 4 &&
      password === rePassword
    ) {
      //api request for get otp
      httpV2.post({
        url: getOtp,
        payload: {
          phone: phone,
          password: password,
        },
        before: () => {
          setIsLoading(true);
        },
        successed: (data) => {
          authCtx.userOtpId.id = data.data;
          authCtx.registration(user);
          OtpModal();
        },
        failed: (data) => {
          console.log(data);
        },
        always: () => {
          setIsLoading(false);
        },
      });
    }
  };

  useEffect(() => {
    if (clicked) {
      if (
        (phoneIsTouched && phone.length === 0) ||
        (!phoneIsTouched && phone.length === 0)
      ) {
        setPhoneIsValid(true);
      } else setPhoneIsValid(false);
      if (
        (passwordIsTouched && password.length === 0) ||
        (!passwordIsTouched && password.length === 0)
      ) {
        setPasswordIsValid(true);
      } else setPasswordIsValid(false);
      if (
        (rePasswordIsTouched && rePassword.length === 0) ||
        (!rePasswordIsTouched && rePassword.length === 0)
      ) {
        setRePasswordIsValid(true);
      } else setRePasswordIsValid(false);
    }
  }, [
    clicked,
    password.length,
    passwordIsTouched,
    phone.length,
    phoneIsTouched,
    rePassword.length,
    rePasswordIsTouched,
  ]);

  return (
    <div>
      <div class="login-info-from">
        <form>
          <h2>Reset Password</h2>
          <div class="login-info-inner-content">
            <div class="custom-input">
              <label for="mobile">Mobile Number</label>
              <input
                type="text"
                name=""
                id="mobile"
                required=""
                value={phone}
                onChange={phoneChangehandler}
                onBlur={phoneTouchedHandler}
              />
              {phoneIsValid && (
                <span class="alert alert-error">Phone is required.</span>
              )}
              {!phoneIsValid && phoneIsTouched && phone.length === 0 && (
                <span class="alert alert-error">Phone is required.</span>
              )}
            </div>
            <div class="custom-input">
              <label for="password">Password</label>
              <input
                type="password"
                name=""
                id="password"
                required=""
                value={password}
                onChange={passwordChangeHandler}
                onBlur={passwordTouchedHandler}
              />
              {passwordIsValid && (
                <span class="alert alert-error">Password is required.</span>
              )}
              {!passwordIsValid &&
                passwordIsTouched &&
                password.length === 0 && (
                  <span class="alert alert-error">Password is required.</span>
                )}
            </div>
            <div class="custom-input">
              <label for="password">Retype Password</label>
              <input
                type="password"
                name=""
                id="password"
                required=""
                value={rePassword}
                onChange={rePassChangehandler}
                onBlur={rePassTouchedHandler}
              />
              {rePasswordIsValid && (
                <span class="alert alert-error">Password is required.</span>
              )}
              {!rePasswordIsValid &&
                rePasswordIsTouched &&
                rePassword.length === 0 && (
                  <span class="alert alert-error">Password is required.</span>
                )}
              {checkedPasswaard && rePassword.length > 0 && (
                <span class="alert alert-error">Password is not matched.</span>
              )}
            </div>
            <div class="login-submit">
              {/* <input type="submit" value="Reset Password" /> */}
              <a href onClick={submitHandler}>
                Reset Password
              </a>
            </div>
          </div>
        </form>
      </div>
      <div class="dont-have-account">
        <p>Already a member?</p>
        <a href onClick={loginModalOpen}>
          LogIn
        </a>
      </div>
    </div>
  );
};

export default ForgetPasswordModal;

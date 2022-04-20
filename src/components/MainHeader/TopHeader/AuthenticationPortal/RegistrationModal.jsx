import React, { useContext, useEffect, useState } from "react";
import { getOtp, userIfExist } from "../../../../lib/endpoints";
import { httpV2 } from "../../../../Service/httpService2";
import authContext from "../../../../Store/auth-context";
import Suspense from "../../../utilities/Suspense/Suspense";

const RegistrationModal = ({ loginModalOpen, setModalCmp }) => {
  // phone validation States
  const [phone, setphone] = useState("");
  const [phoneIsTouched, setphoneIsTouched] = useState(false);
  const [phoneValidation, setphoneValidation] = useState(false);

  //password validation States
  const [password, setpassword] = useState("");
  const [passwordIsTouched, setpasswordIsTouched] = useState(false);
  const [passwordValidation, setpasswordValidation] = useState(false);

  //confirm password States
  const [confirmPassword, setConfirmPassword] = useState("");
  //User if Exist States
  const [isExistUser, setIsUserExist] = useState(false);

  const [errorMsgValue, seterrorMsgValue] = useState(false);
  //Authentication Context
  const authCtx = useContext(authContext);
  //loader
  const [isLoading, setIsLoading] = useState(false);
  // const [mapData, setMapData] = useState();

  const [saveBtnClicked, setsaveBtnClicked] = useState(false);

  const phoneChangeHandler = ({ target }) => {
    setphone(target.value);
  };

  const phoneTouchedHandler = () => {
    setphoneIsTouched(true);

    //api request to check if user exist
    httpV2.get({
      url: userIfExist + phone,
      before: () => {},
      successed: (data) => {
        if (data.data === true) {
          setIsUserExist(true);
        } else setIsUserExist(false);
      },
      failed: (data) => {
        console.log(data);
      },
      always: () => {},
    });
  };

  //password state changes Handler
  const passwordChangeHandler = ({ target }) => {
    setpassword(target.value);
  };
  const passwordTouchedHandler = () => {
    setpasswordIsTouched(true);
  };
  const confirmPasswordChangeHandler = ({ target }) => {
    setConfirmPassword(target.value);
  };

  //   validation effects coontroller
  useEffect(() => {
    if (saveBtnClicked) {
      if (
        (phoneIsTouched && phone.length === 0) ||
        (!phoneIsTouched && phone.length === 0)
      ) {
        setphoneValidation(true);
      } else setphoneValidation(false);
      if (
        (passwordIsTouched && password.length === 0) ||
        (!passwordIsTouched && password.length === 0)
      ) {
        setpasswordValidation(true);
      } else setpasswordValidation(false);
      if (
        phone.length === 11 &&
        password.length >= 4 &&
        password !== confirmPassword
      ) {
        seterrorMsgValue(true);
      } else seterrorMsgValue(false);
    }
  }, [
    phoneIsTouched,
    phone.length,
    passwordIsTouched,
    password.length,
    saveBtnClicked,
    confirmPassword,
    password,
  ]);

  //submit button handler
  const submitButtonHandler = (e) => {
    e.preventDefault();
    setsaveBtnClicked(true);
    const user = {
      phone: phone,
      password: password,
    };
    if (
      phone.length === 11 &&
      password.length >= 4 &&
      password === confirmPassword &&
      !isExistUser
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
          setModalCmp(3);
          authCtx.registration(user);
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
              {phoneValidation && (
                <div class="alert alert-error">Phone is required.</div>
              )}
              {isExistUser && (
                <div class="alert alert-error">User is already exist!.</div>
              )}
              {phoneIsTouched && (phone.length === 0) & !phoneValidation ? (
                <div class="alert alert-error">Phone is required.</div>
              ) : (
                ""
              )}
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
              {passwordValidation && (
                <div class="alert alert-error">
                  Password should be minimum 4 charecter.
                </div>
              )}
              {passwordIsTouched &&
              (password.length === 0) & !passwordValidation ? (
                <div class="alert alert-error">
                  Password should be minimum 4 charecter.
                </div>
              ) : (
                ""
              )}
            </div>
            <div class="custom-input">
              <label for="confirmpassword">Confirm Password</label>
              <input
                type="password"
                name=""
                id="confirmpassword"
                required=""
                onChange={confirmPasswordChangeHandler}
                value={confirmPassword}
              />
              {errorMsgValue && (
                <span class="alert alert-error">Password not matched</span>
              )}
            </div>

            <div class="login-submit">
              <input
                type="submit"
                value="Registration"
                onClick={submitButtonHandler}
              />
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
      {isLoading && <Suspense />}
    </div>
  );
};

export default RegistrationModal;

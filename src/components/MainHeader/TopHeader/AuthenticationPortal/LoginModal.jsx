import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { login } from "../../../../lib/endpoints";
import { httpV2 } from "../../../../Service/httpService2";
import authContext from "../../../../Store/auth-context";
import Suspense from "../../../utilities/Suspense/Suspense";

const LoginModal = ({
  CreateAccount,
  forgetPassModal,
  ModalOpen,
  closeCart,
  orderNowPressed,
  consultancyPressed,
}) => {
  const authCtx = useContext(authContext);
  const history = useHistory();

  const [clicked, setClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [phone, setPhone] = useState("");
  const [phoneIsTouched, setPhoneIsTouched] = useState(false);
  const [phoneIsValid, setPhoneIsValid] = useState(false);

  const [password, setpassword] = useState("");
  const [passwordIsTouched, setPasswordIsTouched] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  const [failedMsg, setfailedMsg] = useState(false);

  const phoneChangeHandler = ({ target }) => {
    setPhone(target.value);
  };

  const phoneTouchedHandler = () => {
    setPhoneIsTouched(true);
    setfailedMsg(false);
  };
  const passwordChangeHandler = ({ target }) => {
    setpassword(target.value);
  };
  const passwordTouchedHandler = () => {
    setPasswordIsTouched(true);
    setfailedMsg(false);
  };

  const submitButtonHandler = (e) => {
    setClicked(true);
    e.preventDefault();
    if (phone.length === 11 && password.length >= 3) {
      httpV2.post({
        url: login,
        payload: {
          phone: phone,
          password: password,
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
          orderNowPressed
            ? history.push("/checkout")
            : consultancyPressed
            ? history.push("/consultancy")
            : history.push("/");
          ModalOpen();
        },
        failed: () => {
          setfailedMsg(true);
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
    }
  }, [
    clicked,
    password.length,
    passwordIsTouched,
    phone.length,
    phoneIsTouched,
  ]);

  return (
    <>
      <div class="login-info-from">
        <form>
          <h2>Login to Shopper Perk</h2>
          <div class="login-info-inner-content">
            <div class="custom-input">
              <label for="mobile">Mobile Number</label>
              <input
                type="text"
                name="mpbile"
                id="mobile"
                required=""
                value={phone}
                onChange={phoneChangeHandler}
                onBlur={phoneTouchedHandler}
              />
              {phoneIsValid && (
                <span class="alert alert-error">Phone is required.</span>
              )}
              {!phoneIsValid && phoneIsTouched && phone.length === 0 && (
                <span class="alert alert-error">Phone is required</span>
              )}
            </div>
            <div class="custom-input">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                required=""
                value={password}
                onChange={passwordChangeHandler}
                onBlur={passwordTouchedHandler}
              />
              {passwordIsValid && (
                <span class="alert alert-error">Password is required</span>
              )}
              {!passwordIsValid &&
                passwordIsTouched &&
                password.length === 0 && (
                  <span class="alert alert-error">Password is required</span>
                )}
              {failedMsg && (
                <span class="alert alert-error">
                  Login failed, Phone or Password is wrong!
                </span>
              )}
            </div>
            <a class="forgot-pass" href>
              <span onClick={forgetPassModal}>Forgot Password?</span>
            </a>
            <div class="login-submit">
              <input
                type="submit"
                value="Login"
                onClick={submitButtonHandler}
              />
            </div>
          </div>
        </form>
      </div>
      <div class="dont-have-account">
        <p>Don't have account ?</p>
        <a href onClick={CreateAccount}>
          Create Account
        </a>
      </div>
      {isLoading && <Suspense />}
    </>
  );
};

export default LoginModal;

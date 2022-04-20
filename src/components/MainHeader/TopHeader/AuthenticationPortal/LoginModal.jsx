import React, { useContext, useState } from "react";
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
  const [phonenumber, setphonenumber] = useState("");
  const [password, setpassword] = useState("");
  const [failedMsg, setfailedMsg] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const authCtx = useContext(authContext);
  const history = useHistory();

  const phoneNumberChangeHandler = ({ target }) => {
    setphonenumber(target.value);
  };
  const passwordChangeHandler = ({ target }) => {
    setpassword(target.value);
  };
  const submitButtonHandler = (e) => {
    e.preventDefault();
    if (
      phonenumber.length !== 0 &&
      password.length !== 0 &&
      phonenumber.length === 11 &&
      password.length >= 4
    ) {
      httpV2.post({
        url: login,
        payload: {
          phone: phonenumber,
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
          console.log("failed");
        },
        always: () => {
          setIsLoading(false);
        },
      });
    } else {
      setfailedMsg(true);
    }
  };

  return (
    <>
      <div class="login-info-from">
        <form>
          <h2>LogIn to Shopper Perk</h2>
          <div class="login-info-inner-content">
            <div class="custom-input">
              <label for="mobile">Mobile Number</label>
              <input
                type="text"
                name="mpbile"
                id="mobile"
                required=""
                onChange={phoneNumberChangeHandler}
              />
            </div>
            <div class="custom-input">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                required=""
                onChange={passwordChangeHandler}
              />
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
      {
        isLoading && (
          <Suspense />
        )
      }
    </>
  );
};

export default LoginModal;

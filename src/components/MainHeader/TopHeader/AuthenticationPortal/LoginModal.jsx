import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { endpoints } from "../../../../lib/endpoints";
import { http } from "../../../../Service/httpService";
import authContext from "../../../../Store/auth-context";

const LoginModal = ({ CreateAccount, forgetPassModal,ModalOpen,closeCart }) => {
  const [phonenumber, setphonenumber] = useState("");
  const [password, setpassword] = useState("");
  const authCtx = useContext(authContext);
  const history=useHistory();

  const phoneNumberChangeHandler = ({ target }) => {
    setphonenumber(target.value);
  };
  const passwordChangeHandler = ({ target }) => {
    setpassword(target.value);
  };
  const submitButtonHandler = (e) => {
    e.preventDefault();
    http.post({
      url: endpoints.login,
      payload: {
        UserName: phonenumber,
        Password: password,
      },
      before: () => {
        console.log("request stareted");
      },
      successed: (data) => {
        console.log(data);
        authCtx.login({
          id: data.Id,
          name: data.Name,
          token: data.datacontent,
          image: data.Icon,
          email: data.Email,
          phone: data.Phone,
        });
         history.push('/profile')
        ModalOpen();
        closeCart();
       
      },
      failed: (data, msg) => {
       alert("Phone or Password doesn't match.")
      },
      always: () => {
        console.log(`request end`);
      },
    });
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
                name=""
                id="mobile"
                required=""
                onChange={phoneNumberChangeHandler}
              />
            </div>
            <div class="custom-input">
              <label for="password">Password</label>
              <input
                type="password"
                name=""
                id="password"
                required=""
                onChange={passwordChangeHandler}
              />
            </div>
            <a class="forgot-pass" href onClick={forgetPassModal}>
              Forgot Password?
            </a>
            <div class="login-submit" onClick={submitButtonHandler}>
              <input type="submit" value="Login" />
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
    </>
  );
};

export default LoginModal;

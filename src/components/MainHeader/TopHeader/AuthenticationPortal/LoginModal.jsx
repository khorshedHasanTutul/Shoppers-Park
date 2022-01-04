import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { endpoints } from "../../../../lib/endpoints";
import { http } from "../../../../Service/httpService";
import authContext from "../../../../Store/auth-context";

const LoginModal = ({ CreateAccount, forgetPassModal,ModalOpen,closeCart }) => {
  const [phonenumber, setphonenumber] = useState("");
  const [password, setpassword] = useState("");
  const [failedMsg, setfailedMsg] = useState(false)
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
    if(phonenumber.length!==0 && password.length!==0 && phonenumber.length===11 && password.length>=4){
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
        console.log({login:data});
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
        // closeCart();
      },
      failed: (data, msg) => {
        setfailedMsg(true)
      },
      always: () => {
        console.log(`request end`);
      },
      // map:(data)=>{
      //   return data.Id
      // }
    });
    }
    else{
      setfailedMsg(true)
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
              {
                (failedMsg) && <span class="alert alert-error">Login failed, Phone or Password is wrong!</span>
              }
             
            </div>
            <a class="forgot-pass" href >
              <span onClick={forgetPassModal}>Forgot Password?</span>
              
            </a>
            <div class="login-submit" >
              <input type="submit" value="Login" onClick={submitButtonHandler}/>
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

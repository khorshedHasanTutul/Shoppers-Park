import { Fragment, useState } from "react";
import Login from "./Login/Login";
import Register from "./Registration/Registration";
import Popup from "../utilities/Popup/Popup";
import VerifyOTP from "./VerifyOTP/VerifyOTP";
import ResetPassword from "./ResetPassword/ResetPassword";
import ReactDOM from "react-dom";

const AuthForms = ({onClose, onLoginSuccess}) => {
  const authFormEl = document.getElementById("auth-form");

  const openRegisterForm = () => {
    setAuthForm({
      form: (
        <Register
          onLoginClickHandler={openLoginForm}
          onRegistrationSubmitHandler={openVerifyOTPForm}
        />
      ),
      title: "Registration",
    });
  };

  const openLoginForm = () => {
    setAuthForm({
      form: (
        <Login
          onRegistrationClickHandler={openRegisterForm}
          onResetPasswordClickHandler={openResetPasswordForm}
          openLoginForm={openLoginForm}
          onSuccess={onLoginSuccess}
        />
      ),
      title: "Login",
    });
  };

  const openVerifyOTPForm = (otpModel, callback) => {
    setAuthForm({
      form: <VerifyOTP otpModel={otpModel} callback={callback} />,
      title: "Verify Phone Number",
    });
  };

  const openResetPasswordForm = () => {
    setAuthForm({
      form: (
        <ResetPassword
          onLoginClickHandler={openLoginForm}
          onSumitHandler={openVerifyOTPForm}
        />
      ),
      title: "Reset Password",
    });
  };

  const [authForm, setAuthForm] = useState({
    form: (
      <Login
        onRegistrationClickHandler={openRegisterForm}
        onResetPasswordClickHandler={openResetPasswordForm}
        openLoginForm={openLoginForm}
        onSuccess={onLoginSuccess}
      />
    ),
    title: "Login",
  });
  
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Popup
          title={authForm.title}
          BodyComponent={() => authForm.form}
          onClose={onClose}
        />,
        authFormEl
      )}
    </Fragment>
  );
};

export default AuthForms;

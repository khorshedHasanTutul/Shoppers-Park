import { Fragment, useContext, useEffect, useRef } from "react";
import InputControl from "../../utilities/InputControl/InputControl";
import { IqraForm, Server } from "../../../services/IqraService";
import AuthContext from "../../../store/auth-context";

const Login = (props) => {
  const authCtx = useContext(AuthContext);
  const formModel = {};

  const login = () => {
    Server.Upload({
      url: "/CustomerArea/AppCustomer/Login",
      data: formModel,
      onComplete: function (response) {
        authCtx.onLogin(response);
        props.onSuccess();
      },
      onError: function () {},
    });
  };

  const formRef = useRef();

  useEffect((param) => {
    IqraForm.Bind(formModel, formRef.current);
  });

  return (
    <Fragment>
      <div ref={formRef}>
        <div className="mb-16">
          <div className="form__control mb-8">
            <InputControl
              name={"phone"}
              label={"Phone Number"}
              error={undefined}
              data-binding={"UserName"}
              required
            />
          </div>
          <div className="form__control">
            <InputControl
              name={"password"}
              label={"Password"}
              error={undefined}
              data-binding={"Password"}
              required
              type="password"
            />
          </div>
        </div>
        <div className="flex justify-between align-end">
          <div className="">
            <p className="t-bold t-14 mb-8">
              Don't have account?
              <span
                className="t-secondary t-hover-underline pointer ml-4"
                onClick={props.onRegistrationClickHandler}
              >
                REGISTER
              </span>
            </p>
            <p className="t-bold t-14">
              Forgot password?
              <span
                className="t-secondary t-hover-underline pointer ml-4"
                onClick={props.onResetPasswordClickHandler}
              >
                RECOVER
              </span>
            </p>
          </div>
          <div>
            <button
              type="button"
              onClick={login}
              className="brick fill primary round-corner"
            >
              Login
            </button>
          </div>
        </div>
      </div>
      {/* { true && <Dialog>{'Error'}</Dialog> } */}
    </Fragment>
  );
};

export default Login;

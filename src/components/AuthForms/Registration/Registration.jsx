import { useEffect, useRef } from "react";
import InputControl from "../../utilities/InputControl/InputControl";
import { IqraForm } from "../../../services/IqraService";
import { Server } from "../../../services/IqraService";

const Register = ({ onLoginClickHandler, onRegistrationSubmitHandler }) => {
  
  //variables
  const formRef = useRef();
  const formModel = {};

  //hooks
  useEffect(() => {
    IqraForm.Bind(formModel, formRef.current);
  });

  // functions
  const isPasswordMatched = () => {
    return formModel.Password === formModel.RetryPassword;
  }

  const register = () => {
    console.log({ formMode: formModel, isValid: formModel.IsValid });

    if(!isPasswordMatched()) {
      alert('Password not matched!');
      return false;
    }

    if(!formModel.IsValid){
      return false;
    }

    Server.SendOTP("AppRegister", formModel.Phone, function (response) {
      console.log(["SendOTP=>response", response]);

      onRegistrationSubmitHandler(response, function (verifyModel, otpModel) {
        formModel.OTPId = response.Id;
        formModel.ActivityId = window.ActivityId;

        Server.Post(
          "/CustomerArea/Customer/Add",
          formModel,
          function (response) {
            console.log([
              "response,verifyModel,otpModel",
              response,
              verifyModel,
              otpModel,
            ]);
          }
        );
      });
    });
  };

  return (
    <div ref={formRef}>
      <div className="mb-12">
        <div className="form__control mb-8">
          <InputControl
            name={"phone"}
            label={"Phone Number"}
            error={undefined}
            required
            data-binding={"Phone"}
          />
        </div>
        <div className="form__control mb-8">
          <InputControl
            name={"password"}
            label={"Password"}
            error={undefined}
            required
            type="password"
            data-binding={"Password"}
          />
        </div>
        <div className="form__control mb-8">
          <InputControl
            name={"retry-password"}
            label={"Retry password"}
            error={undefined}
            required
            type="password"
            data-binding={"RetryPassword"}
            maxLength={20}
            minLength={4}
          />
        </div>
      </div>
      <div className="flex justify-between align-end">
        <div className="">
          <p className="t-bold t-14 mb-4">
            Have Account?
            <span
              className="t-secondary t-hover-underline pointer ml-4"
              onClick={onLoginClickHandler}
            >
              LOGIN
            </span>
          </p>
        </div>
        <div>
          <button
            type="button"
            onClick={register}
            className="brick fill primary round-corner"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;

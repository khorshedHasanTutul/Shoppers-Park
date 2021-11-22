import InputControl from "../../utilities/InputControl/InputControl";
import { useEffect, useRef } from "react";
import { IqraForm, Server } from "../../../services/IqraService";

const ResetPassword = ({ onLoginClickHandler, onSumitHandler, onSuccess }) => {
  // Variables
  const formRef = useRef();
  const formModel = {};

  // Functions
  const isPasswordMatched = () => {
    return formModel.Password === formModel.RetryPassword;
  }

  const resetPassword = () => {
    console.log({ formModel: formModel, isValid: formModel.IsValid });

    if(!isPasswordMatched()) {
      alert('Password not matched!');
      return false;
    }

    if(!formModel.IsValid){
      return false;
    }

    Server.SendOTP("AppRegister", formModel.Phone, function (response) {
      console.log(["SendOTP=>response", response]);

      onSumitHandler(response, function (verifyModel, otpModel) {
        formModel.OTPId = response.Id;
        formModel.ActivityId = window.ActivityId;

        Server.Post(
          "/CustomerArea/Customer/UpdatePassword",
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

  //Hooks
  useEffect(() => {
    IqraForm.Bind(formModel, formRef.current);
  });

  return (
    <div ref={formRef}>
      <div className="mb-12">
        <div className="form__control mb-8">
          <InputControl
            name={"phone"}
            label={"Registered phone number"}
            error={undefined}
            required
            data-binding={"Phone"}
          />
        </div>
        <div className="form__control mb-8">
          <InputControl
            name={"password"}
            label={"New password"}
            error={undefined}
            required
            data-binding={"Password"}
            type={"password"}
          />
        </div>
        <div className="form__control mb-8">
          <InputControl
            name={"retry-password"}
            label={"Retry new password"}
            error={undefined}
            required
            data-binding={"RetryPassword"}
            type={"password"}
          />
        </div>
      </div>
      <div className="flex justify-between align-end">
        <div className="">
          <p className="t-bold t-14 mb-4">
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
            onClick={resetPassword}
            className="brick fill primary round-corner"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

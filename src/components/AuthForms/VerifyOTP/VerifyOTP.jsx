import InputControl from "../../utilities/InputControl/InputControl";
import { useEffect, useRef } from "react";
import { IqraForm, Server } from "../../../services/IqraService";

const VerifyOTP = ({ otpModel, callback }) => {
  // Variables
  const formModel = {};
  const formRef = useRef();

  // Functions
  const verifyOTP = () => {
    console.log({ formModel: formModel, isValid: formModel.IsValid });

    Server.VerifyOTP(
      { Code: formModel.OTP, Id: otpModel.Id },
      function (response) {
        if (response.IsError) {
          alert(response.Msg||'Wrong OTP.')
        } else {
          callback(response, otpModel);
        }
      }
    );
  };

  // Hooks
  useEffect(() => {
    IqraForm.Bind(formModel, formRef.current);
  });

  return (
    <div ref={formRef}>
      <div className="mb-12">
        <div className="form__control mb-4">
          <InputControl
            name={"otp"}
            label={"Please Enter Your OTP Code"}
            error={undefined}
            required
            data-binding={"OTP"}
          />
        </div>
      </div>
      <div className="flex justify-between align-end">
        <div className="">
          <p className="t-bold t-14 mb-4">
            Didn't receive the OTP?
            <span className="t-secondary t-hover-underline pointer ml-4">
              RESEND
            </span>
          </p>
        </div>
        <div>
          <button
            type="button"
            onClick={verifyOTP}
            className="brick fill primary round-corner"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;

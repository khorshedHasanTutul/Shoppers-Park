import InputControl from "../../utilities/InputControl/InputControl";

const ChangePassword = () => {

  const changePassword = () => {
  };



  return (
    <div>
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
            label={"Password"}
            error={undefined}
            required
            data-binding={"Password"}
          />
        </div>
        <div className="form__control mb-8">
          <InputControl
            name={"new-password"}
            label={"New password"}
            error={undefined}
            required
            data-binding={"NewPassword"}
          />
        </div>
        <div className="form__control mb-8">
          <InputControl
            name={"retry-password"}
            label={"Retry new password"}
            error={undefined}
            required
            data-binding={"RetryNewPassword"}
          />
        </div>
      </div>
      <div className="flex justify-end align-end">
        <button
          type="button"
          onClick={changePassword}
          className="brick fill primary round-corner"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;

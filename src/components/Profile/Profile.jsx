import InputControl from "../utilities/InputControl/InputControl";
import Popup from "../utilities/Popup/Popup";
import ChangePassword from "../AuthForms/ChangePassword/ChangePassword";
import Card from '../utilities/Card/Card';

import "./Profile.css";
import { useContext, useEffect, useState } from "react";

const Profile = () => {
  const [isPopupOpened, setIsPopupOPened] = useState(false);
  const [user, setUser] = useState({});
  const [isDirty, setIsDirty] = useState(false);


  const openChangePasswordPopup = () => {
    setIsPopupOPened(true);
  };

  const closeChangePasswordPopup = () => {
    setIsPopupOPened(false);
  };

  const nameChangeHandler = ({ target }) => {
    setUser((prevState) => ({ ...prevState, Name: target.value }));
  };

  const emailChangeHandler = ({target}) => {
    setUser((prevState) => ({...prevState, Email: target.value}));
  }

  const isDirtyChecker = ({ target }) => {
   
  };

  const save = (e) => {
    e.preventDefault();
    console.log("Saved: ", user);
  };

  return (
    <Card className='p-16 mt-8'>
      <form className="user-profile-form">
        <div>
          <div className="form__control mb-16">
            <InputControl
              name={"user-name"}
              label={"Name"}
              error={undefined}
              value={user?.Name}
              onChange={nameChangeHandler}
              onBlur={isDirtyChecker}
            />
          </div>
          <div className="form__control">
            <InputControl
              name={"user-email"}
              label={"Email"}
              error={undefined}
              type="email"
              value={user?.Email}
              onChange={emailChangeHandler}
              onBlur={isDirtyChecker}
            />
          </div>
        </div>
        <div>
          <div className="form__control mb-16">
            <InputControl
              name={"user-phone"}
              label={"Phone Number"}
              error={undefined}
              disabled
              value={user?.Phone}
            />
          </div>
          <div className="form__control">
            <InputControl
              name={"user-picture"}
              label={"Upload Photo"}
              error={undefined}
              type="file"
            />
          </div>
        </div>
        <div>{/* void */}</div>
        <div className="flex justify-end mt-16 g-8">
          <button
            className="brick fill primary round-corner"
            type="button"
            disabled={!isDirty}
            onClick={save}
          >
            Save
          </button>
          <button
            className="brick fill secondary round-corner"
            type="button"
            onClick={openChangePasswordPopup}
          >
            Change Password
          </button>
        </div>
      </form>
      {isPopupOpened && (
        <Popup
          isInitHidden={false}
          title={"Change Password"}
          BodyComponent={ChangePassword}
          onCloseHandlder={closeChangePasswordPopup}
        />
      )}
    </Card>
  );
};

export default Profile;

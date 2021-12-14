import InputControl from "../utilities/InputControl/InputControl";
import Popup from "../utilities/Popup/Popup";
import ChangePassword from "../AuthForms/ChangePassword/ChangePassword";
import Card from '../utilities/Card/Card';

import "./Profile.css";
import { useContext, useState } from "react";
import authContext from "../../Store/auth-context";
import { http } from "../../Service/httpService";
import { endpoints } from "../../lib/endpoints";

const Profile = () => {
  const authCtx = useContext(authContext);
  const getUserValue=authCtx.getloginValue;
  console.log(getUserValue)
  const [name, setname] = useState(getUserValue.name)
  const [email, setemail] = useState(getUserValue.email)
  const [file, setfile] = useState(getUserValue.image)

  const nameChangeHandler=({target})=>{
    setname(target.value)
  }
  const emailChangehandler=({target})=>{
    setemail(target.value)
  }
  const fileUploadHandler=({target})=>{
    setfile(target.files[0])
  }
  const saveHandler=()=>{
    http.post({
      url:endpoints.updateInformation,
      payload:{
        UserId: getUserValue.id,
        Name: name,
        Email: email,
      },
      before:()=>{
        console.log('function started')
      },
      successed:(data)=>{
        console.log('info',data)
      },
      failed:()=>{
        console.log('failed')
      },
      always:()=>{
        console.log('function end')
      }
    })
    http.file({
      url:endpoints.updateInformation,
      payload:{
        Img: file,
        UserId: getUserValue.id,
        ActivityId: '00000000-0000-0000-0000-000000000000'
      },
      before:()=>{
        console.log('function started')
      },
      successed:(data)=>{
        console.log('picture',data)
      },
      failed:()=>{
        console.log('failed')
      },
      always:()=>{
        console.log('function end')
      }
    })
  }


  return (
    <Card className='p-16 mt-8'>
      <form className="user-profile-form">
        <div>
          <div className="form__control mb-16">
            <InputControl
              name={"user-name"}
              label={"Name"}
              error={undefined}
              onChange={nameChangeHandler}
              value={name}
            />
          </div>
          <div className="form__control">
            <InputControl
              name={"user-email"}
              label={"Email"}
              error={undefined}
              type="email"
              onChange={emailChangehandler}
              value={email}

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
              value={getUserValue?getUserValue.phone:''}
            />
          </div>
          <div className="form__control">
            <InputControl
              name={"user-picture"}
              label={"Upload Photo"}
              error={undefined}
              type="file"
              onChange={fileUploadHandler}
            />
          </div>
        </div>
        <div>{/* void */}</div>
        <div className="flex justify-end mt-16 g-8">
          <button
            className="brick fill primary round-corner"
            type="button"
            onClick={saveHandler}
          >
            Save
          </button>
          {/* <button
            className="brick fill secondary round-corner"
            type="button"
            onClick={openChangePasswordPopup}
          >
            Change Password
          </button> */}
        </div>
      </form>
      {/* {isPopupOpened && (
        <Popup
          isInitHidden={false}
          title={"Change Password"}
          BodyComponent={ChangePassword}
          onCloseHandlder={closeChangePasswordPopup}
        />
      )} */}
    </Card>
  );
};

export default Profile;

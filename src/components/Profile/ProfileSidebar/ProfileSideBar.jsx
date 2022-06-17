import { useContext } from "react";
import { BASE_URL } from "../../../Service/httpService2";
import authContext from "../../../Store/auth-context";
import SideBarLinks from "../SideBarLinks/SideBarLinks";

const ProfileSideBar = ({ profileInfo }) => {
  const authCtx = useContext(authContext);
  const getUserValue = authCtx.getloginValue;
  console.log("image", getUserValue.image);
  return (
    <div className="profile-sidebar">
      <div className="profile-user-info flex column justify-center align-center bg-background pt-16">
        <div className="img mb-8">
          {/* <img src={getUserValue.image} alt="" /> */}
          <img src={BASE_URL + profileInfo?.imageURL} alt="img" />
        </div>
        <div className="t-center">
          <p className="t-14 mb-4">{profileInfo?.name}</p>
          <p className="t-14 mb-4">{profileInfo?.phone}</p>
          <p className="t-14 mb-4">{profileInfo?.email}</p>
          <p className="t-14 mb-4">
            <small>My Wallet:</small> {profileInfo?.cashback}
            <span>BDT</span>
          </p>
          <p className="t-14 mb-8 t-secondary t-b">
            <small>Pending Cash:</small> {profileInfo?.dueAmount}
            <span>BDT</span>
          </p>
        </div>
      </div>
      <SideBarLinks />
    </div>
  );
};

export default ProfileSideBar;

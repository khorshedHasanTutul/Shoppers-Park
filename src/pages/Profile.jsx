import { useEffect, useState } from "react";
import ProfileBody from "../components/Profile/ProfileBody/ProfileBody";
import ProfileSideBar from "../components/Profile/ProfileSidebar/ProfileSideBar";
import Page from "../components/utilities/Page";
import { getProfileInfo } from "../lib/endpoints";
import { httpV2 } from "../Service/httpService2";

const Profile = () => {
  const [profileInfo, setProfileInfo] = useState();
  const getProfileInfoHttp = () => {
    httpV2.get({
      url: getProfileInfo,
      before: () => {},
      successed: (res) => {
        setProfileInfo(res.data);
      },
      failed: () => {
        console.log("failed");
      },
      always: () => {},
    });
  };

  useEffect(() => {
    getProfileInfoHttp();
  }, []);

  console.log({profileInfo})

  return (
    <div className="container">
      <Page className="profile">
        <div className="sidebar">
          <ProfileSideBar profileInfo={profileInfo} />
        </div>
        <div className="body">
          <ProfileBody getProfileInfoHttp={getProfileInfoHttp} />
        </div>
      </Page>
    </div>
  );
};

export default Profile;

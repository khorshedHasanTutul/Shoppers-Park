import ProfileBody from '../components/Profile/ProfileBody/ProfileBody';
import ProfileSideBar from '../components/Profile/ProfileSidebar/ProfileSideBar';
import Page from '../components/utilities/Page';

const Profile = () => {
  return (
    <div className="container">
      <Page className="profile">
      <div className="sidebar">
        <ProfileSideBar />
      </div>
        <div className="body">
          <ProfileBody />
        </div>
      </Page>
    </div>
  );
};

export default Profile;

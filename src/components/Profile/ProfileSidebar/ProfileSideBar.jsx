// import user from '../../../images/blog/member.1d0fea27.jpg';
import SideBarLinks from '../SideBarLinks/SideBarLinks';

const ProfileSideBar = () => {
    return (
        <div className='profile-sidebar'>
            <div className='profile-user-info flex column justify-center align-center bg-background pt-16'>
                <div className='img mb-8'> 
                    <img src="/contents/assets/images/blog/member.1d0fea27.jpg" alt="" />
                </div>
                <div className='t-center'>
                    <p className='t-14 mb-4'>01792855468</p>
                    <p className='t-14 mb-4'><small>Accounted Cash:</small> 1865<span>BDT</span></p>
                    <p className='t-14 mb-8 t-secondary t-b'><small>Pending Cash:</small> 300<span>BDT</span></p>
                </div>
            </div>
            <SideBarLinks />
        </div>
    )
}

export default ProfileSideBar;
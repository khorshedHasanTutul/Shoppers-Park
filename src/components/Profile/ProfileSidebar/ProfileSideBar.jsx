
import { useContext } from 'react';
import authContext from '../../../Store/auth-context';
import SideBarLinks from '../SideBarLinks/SideBarLinks';

const ProfileSideBar = () => {
    const authCtx = useContext(authContext)
    const getUserValue=authCtx.getloginValue;
    console.log('image',getUserValue.image)
    return (
        <div className='profile-sidebar'>
            <div className='profile-user-info flex column justify-center align-center bg-background pt-16'>
                <div className='img mb-8'> 
                    <img src={getUserValue.image} alt="" />
                </div>
                <div className='t-center'>
                <p className='t-14 mb-4'>{getUserValue.name}</p>
                    <p className='t-14 mb-4'>{getUserValue.phone}</p>
                    <p className='t-14 mb-4'><small>Accounted Cash:</small> 0<span>BDT</span></p>
                    <p className='t-14 mb-8 t-secondary t-b'><small>Pending Cash:</small> 0<span>BDT</span></p>
                </div>
            </div>
            <SideBarLinks />
        </div>
    )
}

export default ProfileSideBar;
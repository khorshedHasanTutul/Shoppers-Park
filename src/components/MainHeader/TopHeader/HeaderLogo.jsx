import React from 'react'
import { Link } from 'react-router-dom';
// import logo from '../../../images/sp.jpeg'

const HeaderLogo = () => {
    return (
        <div>
            <div class="header-top-logo">
            <Link to={"/"}><img src="/contents/assets/images/sp.jpeg" alt="logo_img" /></Link>
            </div>
        </div>
    )
}
export default HeaderLogo;

import React from 'react'
import { Link } from 'react-router-dom';
import appData from '../../DataSource/appData';

const HeaderLogo = () => {
    return (
        <div>
            <div class="header-top-logo">
            <Link to={"/home"}><img src={appData.HeaderData.Headerlogo.img} alt="logo_img" /></Link>
            </div>
        </div>
    )
}
export default HeaderLogo;

import React from 'react'
import appData from '../../DataSource/appData';

const BottomAddress = () => {
    return (
        <div class="footer-widget-single f-widget-1">
        <a href><img src={appData.BottomAdress.img} alt="img" /></a>
        <ul>
            <li>Address: <span>{appData.BottomAdress.address}</span></li>
            <li>Mobile: <a href="tel:+880258155933">{appData.BottomAdress.mobile}</a></li>
            <li>Email: <a href="mailto:lazzcorporate@gmail.com">{appData.BottomAdress.email}</a></li>
        </ul>
       </div>
    )
}
export default BottomAddress;

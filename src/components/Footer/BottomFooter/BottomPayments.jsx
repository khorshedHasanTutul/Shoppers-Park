import React from 'react'
import appData from '../../DataSource/appData';

const BottomPayments = () => {
    return (
        <div class="footer-widget-single f-widget-3">
        <h2>Payment System</h2>
        <ul>
            {
                appData.BottomPayments.map((payments)=>(
                    <li>
                    <a href><img src={payments.img} alt="img" /></a>
                </li>
                ))
            }
        </ul>
    </div>
    )
}
export default BottomPayments;
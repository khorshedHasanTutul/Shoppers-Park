import React from 'react'
import appData from '../../../DataSource/appData';

const BottomCopyRight = () => {
    return (
        <section class="copy-right-area">
        <div class="container">
            <div class="footer-copy-right">
                <p>Pharmacy Software & Website Developed By - <a target="_blank" href="https://iqrasys.com/">{appData.BottomCopyRight.text}</a></p>
                <a href="tel:01778-772327">(Mob: {appData.BottomCopyRight.mobile})</a>
            </div>
        </div>
    </section>
    )
}
export default BottomCopyRight;

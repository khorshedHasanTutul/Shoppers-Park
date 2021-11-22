import React from 'react'
import BottomAddress from './BottomAddress';
import BottomLinks from './BottomLinks';
import BottomPayments from './BottomPayments';
import BottomSocial from './BottomSocial';

const BottomFooter = () => {
    return (
        <section class="footer-bottom-area">
        <div class="container">
            <div class="footer-bottom-main">
                <div class="footer-bottom-flex">
                   
                    <BottomAddress />
                    <BottomLinks />
                    <BottomPayments />
                    <BottomSocial />

                </div>
            </div>
        </div>
    </section>
    )
}
export default BottomFooter;
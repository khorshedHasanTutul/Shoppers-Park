import React from 'react';
import { Link } from 'react-router-dom';

const PopUpModal = () => {
    return (
        <div className="alert-for-all-web">
            <div id="demo-modal3" class="modal">
            <div class="modal__content">
                <div class="alert-main-area">
                    <h1>Your order has been placed</h1>
                    <h2>Your order number is "258946"</h2>
                    <p>We'll call your number '01553501368' to reconfirm.</p>
                    <hr />
                    <div class="brick label info mb-16"><p class="t-center">All deliveries are closed on Fridays</p></div>
                    <Link to="/profile/order/details/2525" class="warning" >View Order</Link>
                </div>  
                {/* <a href="#" class="modal__close">&times;</a> */}
            </div>
        </div>
        </div>
    );
};

export default PopUpModal;
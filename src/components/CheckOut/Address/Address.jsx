import React from 'react';
import { Link } from 'react-router-dom';
import { callBack, Checkout } from '../../../Service/AppService';
import AddressFrom from './AddressFrom';

const Address = ({proceedOrder}) => {
    return (
        <div class="tab-content checkout-main-tab-content">
                                {/* <!-- product desc review information --> */}
                                <div class="cart-add-tab-content">
                                    <div class="checkout-address-information-main">
                                        <span>{Checkout.ShippingAddress.addressHeaderText}</span>
                                        <div class="address-info-inner-flex">
                                          <AddressFrom />

                                            <div class="address-info-right-default">
                                                <h2>Saved Addresses</h2>
                                                {/* <!-- single item --> */}
                                                <div class="address-home-default-single">
                                                    <h3>Home</h3>
                                                    <p>Jak ma (01792855468)</p>
                                                    <p>Mirpur 12,Dhaka City,Dhaka</p>
                                                    <p>House 1005,Road 12,Avenue 3,Mirpur DOSH</p>
                                                </div>
                                                {/* <!-- single item --> */}
                                                <div class="address-home-default-single">
                                                    <h3>Office</h3>
                                                    <p>No Address Saved In Office Slot</p>
                                                </div>
                                                {/* <!-- single item --> */}
                                                <div class="address-home-default-single">
                                                    <h3>Home Town</h3>
                                                    <p>No Address Saved In Home Town Slot</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cart_navigation">
                                        <Link class="prev-btn" to="/"><i class="fa fa-angle-left check-ang-left" aria-hidden="true"></i> Continue shopping</Link>
                                        <a class="next-btn" onClick={callBack(proceedOrder)} href> Proceed to order <i class="fa fa-angle-right check-ang-right" aria-hidden="true"></i></a>
                                    </div>    
                                </div>
                                {/* <!-- product desc review information  --> */}
                            </div>
    );
};

export default Address;
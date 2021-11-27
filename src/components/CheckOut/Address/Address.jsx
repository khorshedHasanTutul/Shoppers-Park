import React from 'react';
import { Link } from 'react-router-dom';
import { callBack } from '../../../Service/AppService';

const Address = ({proceedOrder}) => {
    return (
        <div class="tab-content checkout-main-tab-content">
                                {/* <!-- product desc review information --> */}
                                <div class="cart-add-tab-content">
                                    <div class="checkout-address-information-main">
                                        <span>Please Check your Shipping Informations</span>
                                        <div class="address-info-inner-flex">
                                            <div class="address-info-from">
                                                <form>
                                                    <div class="address-info-inner-content">
                                                        <div class="custom-input">
                                                            <label for="name">Name</label>
                                                            <input type="text" name="" id="name" required="" />
                                                        </div>
                                                        <div class="custom-input">
                                                            <label for="mobile">Mobile</label>
                                                            <input type="text" name="" id="mobile" required="" />
                                                        </div>
                                                        <div class="custom-input">
                                                            <label for="email">Email</label>
                                                            <input type="text" name="" id="email" required="" />
                                                        </div>
                                                        <div class="address-inner-select-item">
                                                            <div class="custom-input">
                                                                <label for="district">Select District</label>
                                                                <select id="district">
                                                                    <option value="">Dhake</option>
                                                                    <option value="">Rangpur</option>
                                                                    <option value="">Dinajpur</option>
                                                                </select>
                                                            </div>
                                                            <div class="custom-input">
                                                                <label for="district">Select Division</label>
                                                                <select id="district">
                                                                    <option value="">Dhake</option>
                                                                    <option value="">Rangpur</option>
                                                                    <option value="">Dinajpur</option>
                                                                </select>
                                                            </div>
                                                            <div class="custom-input">
                                                                <label for="district">Select Area</label>
                                                                <select id="district">
                                                                    <option value="">Dhake</option>
                                                                    <option value="">Rangpur</option>
                                                                    <option value="">Dinajpur</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="address-textarea">
                                                            <label for="message">Address</label>
                                                            <textarea class="effect2" name="" id="message" required=""></textarea> 
                                                        </div>
                                                        <div class="all-address-save-btn">
                                                            <div class="chosse-your-fvt-btn">
                                                                <ul>
                                                                    <li class="active"><a href>Home</a></li>
                                                                    <li><a href>Office</a></li>
                                                                    <li><a href>Home Town</a></li>
                                                                </ul>
                                                            </div>
                                                            <div class="chosse-another-address">
                                                                <a href>Save as Home Address</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>

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
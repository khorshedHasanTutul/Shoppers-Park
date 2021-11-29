import React from 'react';

const RegistrationModal = ({loginModalOpen}) => {
    return (
            <div>
                <div class="login-info-from">
                    <form>
                        <h2>registration to Shopper Perk</h2>
                        <div class="login-info-inner-content">
                            <div class="custom-input">
                                <label for="name">Name</label>
                                <input type="text" name="" id="name" required="" />
                            </div>
                            <div class="custom-input">
                                <label for="mobile">Mobile Number</label>
                                <input type="text" name="" id="mobile" required="" />
                            </div>
                            <div class="custom-input">
                                <label for="password">Password</label>
                                <input type="password" name="" id="password" required="" />
                            </div>
                            <div class="login-submit">
                                <input type="submit" value="Registration" />
                            </div>
                        </div>
                    </form>
                </div>
                <div class="dont-have-account">
                    <p>Already a member?</p>
                    <a href onClick={loginModalOpen}>LogIn</a>
                </div>
            </div> 
    );
};

export default RegistrationModal;
import React from 'react';

const LoginModal = ({closeModal}) => {
    return (
        <div class="modal">
		    <div class="modal__content">
                <div class="login-main-area">
                    <div class="login-info-from">
                        <form>
                            <h2>LogIn to Shopper Perk</h2>
                            <div class="login-info-inner-content">
                                <div class="custom-input">
                                    <label for="mobile">Mobile Number</label>
                                    <input type="text" name="" id="mobile" required="" />
                                </div>
                                <div class="custom-input">
                                    <label for="password">Password</label>
                                    <input type="password" name="" id="password" required="" />
                                </div>
                                <a class="forgot-pass" href="#demo-modal3">Forgot Password?</a>
                                <div class="login-submit">
                                    <input type="submit" value="Login" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="dont-have-account">
                        <p>Don't have account ?</p>
                        <a href="#demo-modal2">Create Account</a>
                    </div>
                </div>
		        <a onClick={closeModal} href="#" class="modal__close">&times;</a>
		    </div>
		 </div>
    );
};

export default LoginModal;
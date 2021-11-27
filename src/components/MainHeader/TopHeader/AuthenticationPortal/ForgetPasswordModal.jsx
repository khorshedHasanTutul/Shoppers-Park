import React from 'react';

const ForgetPasswordModal = () => {
    return (
        <div id="demo-modal3" class="modal">
		    <div class="modal__content">
                <div class="login-main-area">
                    <div class="login-info-from">
                        <form>
                            <h2>Reset Password</h2>
                            <div class="login-info-inner-content">
                                <div class="custom-input">
                                    <label for="mobile">Mobile Number</label>
                                    <input type="text" name="" id="mobile" required="" />
                                </div>
                                <div class="custom-input">
                                    <label for="password">Password</label>
                                    <input type="password" name="" id="password" required="" />
                                </div>
                                <div class="custom-input">
                                    <label for="password">Retype Password</label>
                                    <input type="password" name="" id="password" required="" />
                                </div>
                                <div class="login-submit">
                                    <input type="submit" value="Reset Password" />
                                    <a href="#demo-modal4">Reset Password</a>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="dont-have-account">
                        <p>Already a member?</p>
                        <a href="#demo-modal">LogIn</a>
                    </div>
                </div>
		        <a href class="modal__close">&times;</a>
		    </div>
		 </div> 
    );
};

export default ForgetPasswordModal;
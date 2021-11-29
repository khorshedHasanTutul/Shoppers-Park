import React from 'react';

const ForgetPasswordModal = ({OtpModal,loginModalOpen}) => {
    return (
                <div>
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
                                    {/* <input type="submit" value="Reset Password" /> */}
                                    <a href onClick={OtpModal}>Reset Password</a>
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

export default ForgetPasswordModal;
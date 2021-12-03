import React from 'react';

const LoginModal = ({CreateAccount,forgetPassModal}) => {
    return (
        <>
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
                                <a class="forgot-pass" href onClick={forgetPassModal}>Forgot Password?</a>
                                <div class="login-submit">
                                    <input type="submit" value="Login" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="dont-have-account">
                        <p>Don't have account ?</p>
                        <a href onClick={CreateAccount}>Create Account</a>
                    </div>
        </>
    );
};

export default LoginModal;
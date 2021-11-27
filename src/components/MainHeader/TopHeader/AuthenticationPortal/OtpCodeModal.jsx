import React from 'react';

const OtpCodeModal = () => {
    return (
        <div id="demo-modal4" class="modal">
        <div class="modal__content">
            <div class="login-main-area">
                <div class="login-info-from">
                    <form>
                        <h2>Please Enter Your Otp Code</h2>
                        <div class="login-info-inner-content">
                            <div class="custom-input">
                                <label for="mobile">Otp Code</label>
                                <input type="text" name="" id="mobile" required="" />
                            </div>
                            <div class="login-submit">
                               <input type="submit" value="Next" /> 
                                <a href="#demo-modal">Next</a>
                            </div>
                            <div class="time-clock-otp">
                                <i class="fa fa-clock-o display-time" aria-hidden="true"></i>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="dont-have-account">
                    <p>Don't Receved Otp Code</p>
                    <a href="#demo-modal3">Resent</a>
                </div>
            </div> 
            <a href class="modal__close">&times;</a>
        </div>
     </div> 
    );
};

export default OtpCodeModal;
import React from 'react';

const ContactFrom = () => {
    return (
        <div class="contact-us-left">
        <div class="comment-from-area">
            <form>
                <div class="single-comment-inner-form">
                    <div class="comment-textarea">
                        <label for="message">Message*</label>
                        <textarea class="effect2" name="" placeholder="Message" id="message" required=""></textarea>
                    </div>
                    <div class="comment-input-flex">
                        <div class="custom-input">
                            <label for="name">Name*</label>
                            <input type="text" name="" placeholder="Name" id="name" required="" />
                        </div>
                        <div class="custom-input">
                            <label for="phone">Phon*</label>
                            <input type="text" name="" placeholder="Phon" id="phone" required="" />
                        </div>
                        <div class="custom-input">
                            <label for="email">Email*</label>
                            <input type="email" name="" placeholder="Email" id="email" required="" />
                        </div>
                    </div>
                    <div class="custom-submit">
                        <input class="cmt-submit" type="submit" value="Send" />
                    </div>
                </div>
            </form>
        </div>
        
    </div>
    );
};

export default ContactFrom;
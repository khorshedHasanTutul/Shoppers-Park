import React from 'react';
import appData from '../DataSource/appData';
import ContactFrom from './ContactFrom';
import ContactHeader from './ContactHeader';


const ContactTemplate = () => {
    const data=appData.BottomAdress;
    return (
        <>
       <ContactHeader />
    <section class="contact-us-area">
        <div class="container">
            <div class="contact-us-main">
                <h6>{data.contact_header}</h6>
                <div class="contact-us-inner-flex">
                    <ContactFrom />
                    <div class="contact-us-right">
                    <div class="contact-us-address">
                            <ul>
                                <li>Address: <span>{data.address}</span></li>
                                <li>Mobile: <a href="tel:+880258155933">{data.mobile}</a></li>
                                <li>Email: <a href="mailto:lazzcorporate@gmail.com">{data.email}</a></li>
                            </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>    
    </> 
    );
};

export default ContactTemplate;
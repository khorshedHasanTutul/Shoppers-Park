import React from "react";
import { Link } from "react-router-dom";
import appData from "../DataSource/appData";
import ContactFrom from "./ContactFrom";
import ContactHeader from "./ContactHeader";

const ContactTemplate = () => {
  const data = appData.BottomAdress;
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
                    <li>
                    <i class="fa fa-home" aria-hidden="true"></i>
                       <span>{data.address}</span>
                    </li>
                    <li>
                     <i class="fa fa-volume-control-phone" aria-hidden="true"></i>
                   
                      <Link to={"tel:" + data.mobile}>{data.mobile}</Link>
                    </li>
                    <li>
                      <i class="fa fa-envelope-o" aria-hidden="true"></i>
                   
                      <Link to={"mailto:" + data.email}>{data.email}</Link>
                    </li>
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

import React, { useState } from "react";
import GoesWrongPage from "../../pages/GoesWrongPage";
import appData from "../DataSource/appData";
import ContactFrom from "./ContactFrom";
import ContactHeader from "./ContactHeader";

const ContactTemplate = () => {
  const [wrong, setWrong] = useState(false);
  const data = appData.BottomAdress;
  return (
    <>
      {!wrong && (
        <>
          <ContactHeader />
          <section class="contact-us-area">
            <div class="container">
              <div class="contact-us-main">
                <h6>{data.contact_header}</h6>
                <div class="contact-us-inner-flex">
                  <ContactFrom setWrong={setWrong} />
                  <div class="contact-us-right">
                    <div class="contact-us-address">
                      <ul>
                        <li>
                          <i class="fa fa-home" aria-hidden="true"></i>
                          <span>{data.address}</span>
                        </li>
                        <li>
                          <i
                            class="fa fa-volume-control-phone"
                            aria-hidden="true"
                          ></i>

                          <a href={`tel:${data.mobile}`}>{data.mobile}</a>
                        </li>
                        <li>
                          <i class="fa fa-envelope-o" aria-hidden="true"></i>

                          <a href={`mailto:${data.email}`}>{data.email}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      {wrong && <GoesWrongPage />}
    </>
  );
};

export default ContactTemplate;

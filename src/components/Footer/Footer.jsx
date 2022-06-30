import React from "react";
import BackTotop from "./BacktoTop";
import BottomCopyRight from "./BottomFooter/BottomCopyRight/BottomCopyRight";
import BottomFooter from "./BottomFooter/BottomFooter";
import FooterMapContent from "./TopFooter/FooterMapContent";

const Footer = () => {
  return (
    <>
      <section class="footer-area-top">
        <div class="container">
          <div class="footer-main-area">
            <div class="support-service-main-flex">
              <FooterMapContent />
            </div>
          </div>
        </div>
      </section>
      <BottomFooter />
      <BottomCopyRight />
      <BackTotop></BackTotop>
    </>
  );
};
export default Footer;

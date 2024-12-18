import FooterFive from "@/src/layout/footers/footer-5";
import HeaderSix from "@/src/layout/headers/header-6";
import React from "react";
import Breadcrumb from "../../common/breadcrumbs/breadcrumb-12";
import ContactFormArea from "./contact-form-area";
import ContactInner from "./contact-inner";
import CtaArea from "./cta-area";
import HeroBanner from "../../common/hero-banner";
import OfficeLocation from "./office-location";
import Footer from "@/src/layout/footers/footer";


const Contact = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb />
            {/* <HeroBanner bg_img="/assets/img/contact/contact-banner3.png" /> */}
            <ContactFormArea />

            <OfficeLocation />
            {/* <ContactInner /> */}
            <CtaArea />

          </main>
              <Footer />

          {/* <FooterFive style_contact={true} style_team={true} /> */}
        </div>
      </div>
    </>
  );
};

export default Contact;

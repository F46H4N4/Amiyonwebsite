import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import FunFactArea from "@/src/components/homes/home-5/fun-fact-area";
import Footer from "@/src/layout/footers/footer";

import HeroBanner from "@/src/common/hero-banner";
import FooterFive from "@/src/layout/footers/footer-5";
import HeaderSix from "@/src/layout/headers/header-6";
import React from "react"; 
import CardArea from "../../common/card-area";
import SalesArea from "../../common/sales-area";
import TestimonialArea from "../../common/testimonial-area";
import CtaArea from "../contact/cta-area";
import FaqArea from "../homes/home-2/faq-area";
import ServiceArea from "./service-area";

const Service = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb />
            {/* <HeroBanner title="Our" subtitle="Services" bg_img="/assets/img/service/servicefirstpic.png" /> */}
            <ServiceArea /> 
            <FunFactArea />
            {/* <CardArea style_service={true} /> */}
            {/* <SalesArea style_service={true} />
            <TestimonialArea />
            <FaqArea style_service={true} />
            <CtaArea /> */}
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Service;

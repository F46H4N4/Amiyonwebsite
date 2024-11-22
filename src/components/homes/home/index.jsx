import ScrollToTop from "@/src/hooks/scroll-to-top";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import FunFactArea from "@/src/components/homes/home-5/fun-fact-area";
import firstone from "../../../../public/assets/img/hero/herosection.jpg";
import HeroBanner from "./hero-banner";

import React from "react";
import AboutArea from "../../../common/about-area";
import FeatureArea from "./feature-area";
import HeroSlider from "./home-cta-area";
import AdditionalSections from "./additional-sections";
import AdditionalSections2 from "./additional-sections2";
import ClientSections from "@/src/layout/footers/footer-3";
import Connect from "@/src/components/contact/cta-area";
import PriceArea from "./price-area";
// import PriceArea from "./price-area";
import CtaArea from "./cta-area";
import CtaArea2 from "./cta-area2";
import CtaArea3 from "./cta-area3";

// project/index.jsx
import BreadcrumbSeven from "@/src/common/breadcrumbs/breadcrumb-7";
import Portfolio from "@/src/components/project/portfolio";
import TestimonialArea from "@/src/components/homes/home-2/testimonial-area"
import ProjectArea from "./projects-area";
import RankArea from "./rank-area";
// import ServicesArea from "./services-area";
import ServicesArea from "./serviceslides-area";

import CountArea from "@/src/common/count-area"
import TestimonialArea2 from "@/src/components/homes/home-3/testimonial-area"
import Trustportion from "@/src/components/about/company-area"
// import TestimonialArea from "./testimonial-area";

const HomeOne = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
      <div id="smooth-content">
      <main className="fix">
        <div className="common-width">

            {/* <Firstbg /> 
            */}
      
      <HeroBanner bg_img="/assets/img/hero/herosection.jpg"/>

      <FunFactArea/>
      <HeroSlider />
      <ServicesArea />    
      <CtaArea3 />    

      {/* <FeatureArea /> */}
      {/* <BreadcrumbSeven /> */}
            {/* <TestimonialArea /> */}
      <ProjectArea style/>
      <ClientSections/>
      <TestimonialArea2/>
      <CtaArea/>    
      {/* <AdditionalSections /> */}
      <Trustportion />
        <CtaArea2 />    
        </div>

      {/* <AdditionalSections2 /> */}
      <Connect />
      </main> 
      <Footer />
      <ScrollToTop />
      </div>
      </div>
    </>
  );
};

export default HomeOne;

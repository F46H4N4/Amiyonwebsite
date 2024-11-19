import ScrollToTop from "@/src/hooks/scroll-to-top";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import FunFactArea from "@/src/components/homes/home-5/fun-fact-area";

import React from "react";
import AboutArea from "../../../common/about-area";
import FeatureArea from "./feature-area";
import HeroSlider from "./hero-slider";
import AdditionalSections from "./additional-sections";
import AdditionalSections2 from "./additional-sections2";
import ClientSections from "@/src/layout/footers/footer-3";
import Connect from "@/src/components/contact/cta-area";
import PriceArea from "./price-area";
import Firstbg from "./firstbg";
// project/index.jsx
import BreadcrumbSeven from "@/src/common/breadcrumbs/breadcrumb-7";
import Portfolio from "@/src/components/project/portfolio";
import TestimonialArea from "@/src/components/homes/home-2/testimonial-area"
import ProjectArea from "./project-area";
import RankArea from "./rank-area";
import ServicesArea from "./services-area";
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
      <Firstbg />      
      <FunFactArea />
      <HeroSlider />
      <FeatureArea />
      {/* <BreadcrumbSeven /> */}
      <TestimonialArea />
      <ClientSections />
      <TestimonialArea2 />
      <AdditionalSections />
      <Trustportion />
      <AdditionalSections2 />
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

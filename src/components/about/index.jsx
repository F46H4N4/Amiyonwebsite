import AboutArea from "@/src/common/about-area";
import FooterFive from "@/src/layout/footers/footer-5";
import HomeFive from "@/src/components/homes/home-5";
import CteaArea3 from "@/src/components/homes/home-5/cta-area2";
import FunFactArea from "@/src/components/homes/home-5/fun-fact-area";
import Footer from "@/src/layout/footers/footer";

import HeaderSix from "@/src/layout/headers/header-6";
import React from "react";
import Breadcrumb from "../../common/breadcrumbs/breadcrumb";
import HeroBanner from "../../common/hero-banner";
import CtaArea from "../contact/cta-area";
import TeamArea from "../homes/home-4/team-area";
import Brand from "./brand";
import CompanyArea from "./company-area2";
import CompanyArea3 from "./company-area3";
import Trustportion from "@/src/components/about/company-area"

import JobArea from "./job-area";
import JourneyArea from "./journey-area";
 
const About = () => {
  return (
    <>
      <HeaderSix />
      {/* <Breadcrumb title_top="About"  title_bottom="Softec" /> */}
      <HeroBanner title="About" subtitle="Us" bg_img="/assets/img/about/aboutusbg.png" />
      <CompanyArea />
       <Trustportion />

      <HomeFive />

      {/* <CompanyArea3 /> */}
      <CteaArea3 />
      {/* <Brand /> */}
      {/* <AboutArea /> */}
      <FunFactArea />

      <TeamArea bg_style={true} />
      {/* <JourneyArea /> */}
      {/* <JobArea /> */}
      <CtaArea />
      <Footer />

      {/* <FooterFive style_contact={true} style_team={true} /> */}
    </>
  );
};

export default About;

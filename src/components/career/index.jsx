// import BreadcrumbThree from "@/src/common/breadcrumbs/breadcrumb-3";
// import FooterFive from "@/src/layout/footers/footer-5";
// import HeaderSix from "@/src/layout/headers/header-6";
// import React from "react";
// import PlatformArea from "../../common/platform-area";
// import JobArea from "../about/job-area";
// import CtaArea from "../contact/cta-area";
// import CarrerBanner from "./carrer-banner";
// import ContactInner from "@/src/components/contact/contact-inner";


// const Career = () => {
//   return (
//     <>
//       <HeaderSix />
//       <div id="smooth-wrapper">
//         <div id="smooth-content">
//           <main>
//             <BreadcrumbThree />
//             <ContactInner />
//             {/* <CarrerBanner /> */}
//             {/* <PlatformArea style_carrer={true} />
//             <JobArea style_carrer={true} />
//             <CtaArea /> */}
//           </main>
//           <FooterFive style_contact={true} style_team={true}/>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Career;

// import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";
// import FooterFive from "@/src/layout/footers/footer-5";
// import HeaderSix from "@/src/layout/headers/header-6";
// import React from "react";
// import JobArea from "../about/job-area";
// import CtaArea from "../contact/cta-area";
// import CareerDetailsArea from "./career-details-area";

// const CareerDetails = () => {
//   return (
//     <>
//       <HeaderSix />
//       <main>
//       {/* <BreadcrumbTwo title={"Careers Details"} innertitle={" Careers page"} career_details={true} />
//       <CareerDetailsArea />
//       <JobArea style_carrer={true}/>
//       <CtaArea /> */}
//       </main>
//       <FooterFive style_contact={true} style_team={true} />
//     </>
//   );
// };

// export default CareerDetails;

import FooterFive from "@/src/layout/footers/footer-5";
import Footer from "@/src/layout/footers/footer";

import HeaderSix from "@/src/layout/headers/header-6";
import React from "react";
import Breadcrumb from "../../common/breadcrumbs/breadcrumb";
// import ContactFormArea from ".@/src/components/contact/contact-form-area";
import ContactInner from "./career-inner";
import CarrerBanner  from "@/src/components/career/carrer-banner";
import Openings  from "@/src/components/about/job-area";
import Connect from "@/src/components/contact/cta-area";

// import CtaArea from "./cta-area";
import HeroBanner from "../../common/hero-banner";
// import OfficeLocation from "./office-location";

// import ContactInner from "@/src/components/contact/contact-inner";


const Career = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* <Breadcrumb title_top="Get In" title_bottom="Get In" /> */}
            <HeroBanner bg_img="/assets/img/career/thirdbg2.jpg" />
             <ContactInner />
            <CarrerBanner />
            <Openings />
            <Connect />

            {/* <OfficeLocation /> */}
            {/* <ContactFormArea /> */}
            {/* <ContactInner />
            <CtaArea /> */}
          </main>
      <Footer />
        </div>
      </div>
    </>
  );
};

export default Career;



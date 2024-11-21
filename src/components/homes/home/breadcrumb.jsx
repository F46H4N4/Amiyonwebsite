import Image from 'next/image';
import React, { useState } from 'react';

// // import shape_1 from "../../../public/assets/img/breadcrumb/breadcrumb-shape-1.png"
// import shape_2 from "../../../public/assets/img/hero/herosection.jpg"
import plan_img_6 from "../../../../public/assets/img/hero/herosection.jpg"


const Breadcrumb = ({ title_top, title_bottom }) => {
   const [offset, setOffset] = useState(0);

   function handleScroll() {
      setOffset(window.scrollY);
   }
   // Add an event listener to update the offset on scroll
   React.useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);


   return (
      <>

         <div className=" p-relative" >
            <div className="about-shape-1 z-index-3">
               <Image src={plan_img_6} alt="theme-pure" style={{ height: '531', width:'1440'}} />
            </div>
            <div className=" z-index-3">
               {/* <Image src={shape_2} alt="theme-pure" /> */}
            </div>
            <div className="p-relative z-index fix">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-12">
                        <div className="content">
                           <h4 style={{ transform: `translateY(${offset * 0.9}px)` }} 
                                 className="title" 
                                 data-parallax='{"y": 1000, "smoothness": 10}'>
                              <span>{title_top}</span> <br />
                              <span>{title_bottom}</span>
                           </h4>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Breadcrumb;
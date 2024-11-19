import RightArrow from '@/src/svg/right-arrow';
import Link from 'next/link';
import Image from 'next/image';
import React, { useRef } from 'react';
import useTitleAnimation from "@/src/hooks/useTitleAnimation";
import CountArea from '@/src/common/count-area';

// Icon import 
import icon_1 from "../../../../public/assets/img/feature/webapp.png";
import icon_2 from "../../../../public/assets/img/feature/ecommerce.png";
import icon_3 from "../../../../public/assets/img/feature/web-hosting_icon.png";
import icon_4 from "../../../../public/assets/img/feature/buisness_solution.png";
import bg from "../../../../public/assets/img/feature/Energetic.jpeg";
import discussion from "../../../../public/assets/img/feature/frame10.png"; // your image



// Feature data




const AdditionalSections2= () => {
   let titleRef = useRef(null);
   useTitleAnimation(titleRef);

   return (
      <div className="tp-feature__area tp-feature pt-50  p-relative">
         <div className="container">
            {/* Section Title */}
         

            {/* Scrollable Inline Feature Blocks */}
          

            <div className="row mt-5 align-items-center">
               {/* <div className="best-solution-text">Best Solution</div> */}

               <div className="col-md-6">
                  <Image src={discussion} alt="Additional Image" className="img-fluid" />
               </div>
               <div className="col-md-6">
                  <h4>Amiyon Your Complete Solution Partner.</h4>
                  <p className="additional-paragraph">
                           We believe in a personalized approach,
                           understanding that each customer and project is unique, a
                           nd this is where our expertise truly shines.
                  </p>
                  
               </div>
            </div>
         </div>
      </div>
   );
};

export default AdditionalSections2;
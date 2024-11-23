import React from 'react';
import useBreadcrumbTitleAnime from "@/src/hooks/useBreadcrumbTitleAnime";

const BreadcrumbSeven = () => {
   const { animeRef } = useBreadcrumbTitleAnime();

   return (
      <div
         style={{
            backgroundImage: `url('/assets/img/hero/homepage.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '410px', // Fixed height for the image
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
         }}
      >
        <div className="breadcrumb__content z-index-3 text-center">
                           <h3 ref={animeRef} className="breadcrumb__title tp-char-animation text-black anime_text" style={{ color:'white !important',fontSize:'70px !important' }}>Building Smart Futures</h3>
                           <div className="breadcrumb__text wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".6s">
                              {/* <p>We have an experienced team of production and inspection personnel <br /> to ensure quality.</p> */}
                           </div>
                        </div>
      </div>
   );
};

export default BreadcrumbSeven;

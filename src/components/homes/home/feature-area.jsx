import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import RightArrow from '@/src/svg/right-arrow';
import useTitleAnimation from "@/src/hooks/useTitleAnimation";

// Import Swiper styles - add these at the top
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import icon_1 from "../../../../public/assets/img/feature/webapp.png";
import icon_2 from "../../../../public/assets/img/feature/ecommerce.png";
import icon_3 from "../../../../public/assets/img/feature/web-hosting_icon.png";
import icon_4 from "../../../../public/assets/img/feature/buisness_solution.png";
import bg from "../../../../public/assets/img/feature/Energetic.jpeg";
import discussion from "../../../../public/assets/img/feature/discussion.png";

// Feature data
const feature_data = [
   { id: 1, img: icon_1, title: <>Web Application</>, content: "Unlock your online potential with our all-in-one e-commerce solution designed for your success.", delay: ".4s" },
   { id: 2, img: icon_2, title: <>E Commerce</>, content: "Unlock your online potential with our all-in-one e-commerce solution designed for your success.", delay: ".6s" },
   { id: 3, img: icon_3, title: <>Web Hosting</>, content: "Unlock your online potential with our all-in-one e-commerce solution designed for your success.", delay: ".8s" },
   { id: 4, img: icon_4, title: <>Business Solution</>, content: "Unlock your online potential with our all-in-one e-commerce solution designed for your success.", delay: ".8s" },
];

// Swiper settings
const swiperSettings = {
  modules: [Navigation, Scrollbar],
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
  scrollbar: {
    el: ".feature-scrollbar",
    clickable: true,
    draggable: true,
  }
};

const FeatureArea = () => {
   let titleRef = useRef(null);
   const [isDragged, setIsDragged] = useState(false);
   useTitleAnimation(titleRef);

   const handleSlideChange = () => {
     setIsDragged(true);
   };

   const handleTransitionEnd = () => {
     setIsDragged(false);
   };

   return (
      <div className="tp-feature__area tp-feature__pt-pb p-relative" style={{ background : 'white' }}>
         <div
            className="feature-inline-wrapper"
            style={{
               backgroundImage: `url(${bg.src})`,
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat',
               width: '100%',
               height: '500px',
               position: 'relative',
               overflow: 'hidden'
            }}
         >
            <div className="container">
               <h2 ref={titleRef} className="text-white text-center mb-4">Our Services</h2>

               {/* Feature Blocks with Swiper */}
               <div className="tp-feature__container">
                  <Swiper
                    {...swiperSettings}
                    onSliderMove={handleSlideChange}
                    onTransitionEnd={handleTransitionEnd}
                    className={`swiper-container feature-slider-active ${isDragged ? "dragged" : ""}`}
                  >
                    {feature_data.map((item, i) => (
                      <SwiperSlide key={i}>
                        <div
                          className="tp-feature__item"
                          data-wow-duration=".9s"
                          data-wow-delay={item.delay}
                          style={{
                            background: 'rgba(255, 255, 255, 0.8)',
                            borderRadius: '10px',
                            padding: '20px',
                            height: '300px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            margin: '0 10px'
                          }}
                        >
                          <div className="tp-feature__icon">
                            <Image src={item.img} alt={item.title} width={60} height={60} />
                          </div>
                          <h3 className="tp-feature__title-sm">{item.title}</h3>
                          <p className="tp-feature__content">{item.content}</p>
                          <div className="tp-feature__link tp-common-btn mt-auto">
                            <Link href="/service-details">
                              <RightArrow />
                            </Link>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="feature-scrollbar" style={{ marginTop: '20px' }}></div>
               </div>
            </div>
         </div>

         {/* Additional Section */}
         <div className="container mt-5">
            <div className="row align-items-center">
               <div className="col-md-6">
                  <Image
                     src={discussion}
                     alt="Discussion"
                     width={601}
                     height={473}
                     className="img-fluid"
                  />
               </div>
               <div className="col-md-6">
                  <h4>Business solutions made with purpose</h4>
                  <p>Experience enhanced efficiency and achieve digital success with our innovative services.</p>
               </div>
            </div>
         </div>

         <style jsx global>{`
            .feature-slider-active {
              position: relative;
              overflow: visible;
              padding-bottom: 30px;
            }

            .feature-slider-active.dragged {
              cursor: grabbing;
            }

            .feature-scrollbar {
              position: relative;
              height: 2px;
              background-color: rgba(255, 255, 255, 0.2);
              border-radius: 2px;
            }

            .feature-scrollbar .swiper-scrollbar-drag {
              height: 100%;
              background-color: white;
              border-radius: 2px;
              cursor: grab;
            }

            .tp-feature__item {
              transition: transform 0.3s ease;
            }

            .tp-feature__item:hover {
              transform: translateY(-5px);
            }

            .swiper-wrapper {
              display: flex;
              align-items: stretch;
            }

            .swiper-slide {
              height: auto;
            }
         `}</style>
      </div>
   );
};

export default FeatureArea;
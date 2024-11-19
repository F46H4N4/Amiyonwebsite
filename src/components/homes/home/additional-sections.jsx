import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import HeroForm from '@/src/forms/hero-form';
import LineShape from '@/src/svg/line-shape';
import { gsap } from 'gsap';
import useCharAnimation from '@/src/hooks/useCharAnimation';
import Count from '@/src/common/count';
// import CountArea from '../../../../common/count-area';  // Relative path to count-area


// import './hero.css'; // or './hero.module.scss'

// images import 
import hero_frame from "../../../../public/assets/img/hero/hero-frame.png"; 
import shape_1 from "../../../../public/assets/img/hero/hero-line-shape.png";
import shape_2 from "../../../../public/assets/img/hero/hero-line-shape-2.png";
import shape_img_1 from "../../../../public/assets/img/hero/hero-shape-1.png"; 
import shape_img_2 from "../../../../public/assets/img/hero/hero-shape-2.png"; 
import hero_thumb_1 from "../../../../public/assets/img/hero/office_space.png";  
import girlworking from "../../../../public/assets/img/feature/girlworking.png";


const AdditionalSections = () => {
    let hero_bg = useRef(null);

    useEffect(() => {
        gsap.from(hero_bg.current, {
            opacity: 0,
            scale: 1.2,
            duration: 1.5
        });
        gsap.to(hero_bg.current, {
            opacity: 1,
            scale: 1,
            duration: 1.5
        })
    }, []);

    useCharAnimation('.tp-hero__hero-title span.child');

    return (
        <>
        

        <div className="tp-feature__area tp-feature p-relative pt-50" >
        <div className="container">
            <div className="row align-items-center mb-4">
                <div className="col-md-6">
                    <div className="tp-feature__image-text">
                     <h3 className="tp-feature__title">Why We're the Right Choice<br></br></h3>
                        <p className="tp-feature__description">
                                    At Amiyon, we prioritize your success by delivering high-quality,
                                    customized software solutions that meet your unique needs.
                                    Our client-focused approach ensures every project is handled with care,
                                    keeping your goals and budget in mind.
                        </p>
                    </div>
                </div>
                <div className="col-md-6 text-right">
                    <Image style={{ width: "auto", height: "auto" }} src={girlworking} alt="theme-pure" />
                </div>
                    </div>
                                   
             
                </div>
            </div>
          {/* <div>
        <CountArea />
        </div> */}
               
             
    
        </>
    );
};

export default AdditionalSections;

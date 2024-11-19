import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import HeroForm from '@/src/forms/hero-form';
import LineShape from '@/src/svg/line-shape';
import { gsap } from 'gsap';
import useCharAnimation from '@/src/hooks/useCharAnimation';
import Count from '@/src/common/count';
// import CountArea from '../../../../common/count-area';  // Relative path to count-area

// images import 
import hero_frame from "../../../../public/assets/img/hero/hero-frame.png"; 
import shape_1 from "../../../../public/assets/img/hero/hero-line-shape.png";
import shape_2 from "../../../../public/assets/img/hero/hero-line-shape-2.png";
import shape_img_1 from "../../../../public/assets/img/hero/hero-shape-1.png"; 
import shape_img_2 from "../../../../public/assets/img/hero/hero-shape-2.png"; 
import hero_thumb_1 from "../../../../public/assets/img/hero/office_space.png";  
import firstone from "../../../../public/assets/img/hero/firstone.jpg";

// background image import (you can adjust the path)
// import hero_background from "../../../../public/assets/img/hero/background.jpg";

const hero_content = {
    hero_shape: [
        { id: 1, cls: "tp-hero-shape-1", img: shape_1 },
        { id: 2, cls: "tp-hero-shape-2", img: shape_2 },
    ],
    hero_title: <><span className='tp_title' style={{ color:"white" , font:"geist", fontSize:"80px" }}><span className='child'>Building Smart Futures</span></span> <br />
        <span><span className='child' style={{ color:"white",fontSize:"20px" ,font:"geist",}}>Delivering Seamless Solutions for a Digital-First World</span></span> </>,
    hero_shape_img: [
        { id: 1, cls: "1", img: shape_img_1 },
        { id: 2, cls: "2", img: shape_img_2 },
    ],
};

const { hero_shape, hero_title, hero_shape_img } = hero_content;

const HeroSlider = () => {
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
            <div className="tp-hero__area tp-hero__pl-pr pt-0 pr-0 pl-0 " style={{ borderRadius:"0px" }}>
                <div 
                    className="tp-hero__bg p-relative" 
                    style={{ 
                        // paddingBottom: "150px", 
                        backgroundImage: `url(${firstone.src})`, // Set the background image
                        backgroundSize: 'cover', // Ensure the background covers the entire area
                        backgroundPosition: 'center', // Center the background image
                    }}
                >
                    {/* <div className="tp-hero-bg tp-hero-bg-single" ref={hero_bg}>
                        <Image src={hero_frame} alt="theme-pure" />
                    </div> */}
                    <div className="tp-hero-shape">
                        {hero_shape.map((item, i) =>
                            <Image key={i} className={item.cls} src={item.img} alt="theme-pure" />
                        )}
                    </div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-10">
                                <div className="tp-hero__content-box text-center z-index-3">
                                    <div className="tp-hero__title-box p-relative">
                                        <h2 className="tp-hero__hero-title tp-title-anim">
                                            {hero_title}
                                        </h2>
                                    </div>
                                    {/* Hero Form */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          <div class="centralized-content pb-150">
            <div class="heading">Welcome to Amiyon!</div>
            <div class="content">
                For over a decade, we've been crafting innovative digital solutions that help businesses grow, streamline operations, and achieve success. From websites to custom applications,
                we combine creativity and technology to deliver impactful results tailored to your unique needs.
            </div>
        </div>
        </>
    );
};

export default HeroSlider;

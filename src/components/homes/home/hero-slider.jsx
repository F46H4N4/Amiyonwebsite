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


const fun_fact_data = [
    {
        id: 1, 
        cls: "1",
        count: 10,
        simble: "+",
        description: <>Years <br /> Of Experience</>
    },
    {
        id: 2, 
        cls: "2",
        count: 99,
        simble: "%",
        description: <>Customer<br />Satisfacation</>
    },
    {
        id: 3, 
        cls: "3",
        count: 350,
        simble: "+",
        description: <>Projects<br />Completed</>
    },

]

const hero_content = {
    hero_shape: [
        { id: 1, cls: "tp-hero-shape-1", img: shape_1 },
        { id: 2, cls: "tp-hero-shape-2", img: shape_2 },
    ],
    hero_title: <><span className='tp_title'><span className='child'>Accelerate Your Digital</span></span> <br />
        <span><span className='child'>Journey With Us</span></span> </>,
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
          

        <div className="tp-feature__area tp-feature__pt-pb pt-0 p-relative"  style={{ marginTop: "0" }}>
        <div className="container">
            <div className="row align-items-center mb-4">
             <div className="col-md-6">
                <div className="tp-feature__image-text">
                    <h3 className="tp-feature__title">
                        Your Trusted IT Solutions
                        <br />
                        <span>Partner</span>
                    </h3>
                    <p className="tp-feature__description">
                        Amiyon Solutions is a trusted provider of IT services with extensive market experience and a personalized approach.
                        We deliver high-quality products and services while exceeding expectations and staying within budget.
                        Our commitment to exceptional service and a customer-centric focus drives success through tailored IT solutions.
                    </p>
                </div>
            </div>
                <div className="col-md-6 text-right">
                    <Image style={{ width: "601px", height: "468px" , borderRadius:"47px"}} src={girlworking} alt="theme-pure" />
                </div>
                    </div>
                {/* <div style={{ textAlign: 'center' , padding : '30px'}}>
                Manufacturing software that goes beyond benchmark
                </div>                    
                 <div className="tp-counter-wrapper">
                        <div className="row">
                            {fun_fact_data.map((item, i) => (
                                <div key={i} className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="tp-counter-wrap">
                                        <div className="tp-counter-item">
                                            <h4>
                                                <span>
                                                    <Count number={item.count} text={item.simble} />
                                                </span>
                                            </h4>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> */}
                </div>
            </div>
          {/* <div>
        <CountArea />
        </div> */}
               
             
    
        </>
    );
};

export default HeroSlider;

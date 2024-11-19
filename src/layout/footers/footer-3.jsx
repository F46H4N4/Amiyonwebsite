import Brwoser from '@/src/common/brwoser';
import { CopyRight } from '@/src/common/social-links';
import EmailIcon from '@/src/svg/email';
import EmailTwo from '@/src/svg/email-2';
import PhoneTwo from '@/src/svg/phone-2';
import RightArrow from '@/src/svg/right-arrow';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';

import footer_logo from "../../../public/assets/img/logo/logo-black.png";

// Footer slider data
const footer_slider_data = [
    { logo: "/assets/img/logo/mada.png" },
    { logo: "/assets/img/logo/paynet_logo.png" },
    { logo: "/assets/img/logo/organique-logo.png" },
    { logo: "/assets/img/logo/Al-Eid-Logistics_logo.png" },
    { logo: "/assets/img/logo/OMAHATLOGO02_logo.png" },
    { logo: "/assets/img/logo/alsabah_logo.png" },
];

// Slider settings
const setting = {
    speed: 7000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
            }
        },
        {
            breakpoint: 992,
            settings: {
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
}

const FooterThree = () => {
    return (
        <>
            <div className="footer-bottom-content tp-browser-bg-shape pt-150">
                <div className="tp-footer-slide pb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center mb-4">
                                <h2 className="footer-slider-heading">Our Clients</h2>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid g-0">
                        <div className="row g-0 justify-content-center">
                            <Slider {...setting} className="footer-slide-active">
                                {footer_slider_data.map((item, i) => (
                                    <div key={i} className="footer-slide-wrapper">
                                        <div
                                            className="footer-slide-item"
                                            style={{
                                                borderRadius: "0",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                height: "100px",
                                                width:"211.35px",
                                                padding: "10px",
                                                background: "#f9f9f9",
                                                boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
                                            }}
                                        >
                                            <Image
                                                src={item.logo}
                                                alt={`Logo ${i + 1}`}
                                                width={60}
                                                height={60}
                                                className="footer-slide-logo"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterThree;

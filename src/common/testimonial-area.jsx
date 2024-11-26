import testimonial_data from '@/src/data/testimonial-data';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { gsap } from 'gsap';
import 'swiper/swiper-bundle.min.css'; // Import Swiper styles

const testimonial_content = {
  bg_img: "assets/img/testimonial/customersnew.png",
  sub_title: "CLIENTS",
  title: <>About Customer <span>Stories</span></>,
};

const { bg_img, sub_title, title } = testimonial_content;

const setting = {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    1400: { slidesPerView: 4, spaceBetween: 40 }, // Extra large screens
    1200: { slidesPerView: 3, spaceBetween: 30 }, // Desktops
    992: { slidesPerView: 2, spaceBetween: 20 },  // Tablets in landscape
    768: { slidesPerView: 2, spaceBetween: 15 },  // Tablets in portrait
    576: { slidesPerView: 1, spaceBetween: 10 },  // Small screens
    0: { slidesPerView: 1, spaceBetween: 10 },    // Extra small screens
  },
  scrollbar: {
    el: ".tp-scrollbar",
    clickable: true,
  },
  navigation: {
    nextEl: '.test-next',
    prevEl: '.test-prev',
  },
};

const TestimonialArea = () => {
  const [isDragged, setIsDragged] = useState(false);

  const handleSlideChange = () => {
    setIsDragged(true);
  };

  const handleTransitionEnd = () => {
    setIsDragged(false);
  };

  useEffect(() => {
    gsap.fromTo(
      '.tp-testimonial-five-item',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 1, ease: 'easeOut' }
    );
  }, []);

  return (
    <div
      className="tp-testimonial-area fix"
      style={{
        backgroundImage: `url(${bg_img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        position: 'relative',
        paddingBottom: '100px',
      }}
    >
      <div className="container">
        <div className="row align-items-end tp-testimonial-five-section-space" style={{ paddingTop: '50px' }}>
          <div className="col-md-8">
            <div className="tp-testimonial-five-section-box">
              <span className="tp-section-subtitle-5"  style={{ fontSize:'24px'}}>{sub_title}</span>
              <h2
                className="tp-section-title-5"
                style={{
                  fontWeight: '500',
                  fontSize: '48px',
                  marginBottom: '20px',
                }}
              >
                {title}
              </h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="tp-testimonial-five-arrow d-flex align-items-center justify-content-start justify-content-md-end">
              <div className="test-next">
                <button><i className="far fa-arrow-left"></i></button>
              </div>
              <div className="test-prev">
                <button><i className="far fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0" style={{ marginTop: '100px',marginBottom :'74px'}}>
        <div className="row g-0">
          <div className="col-12">
            <div className="tp-testimonial-five-slider-section">
              <Swiper
                {...setting}
                onSliderMove={handleSlideChange}
                onTransitionEnd={handleTransitionEnd}
                modules={[Navigation, Scrollbar]}
                className={`swiper-container testimonial-five-slider-active ${isDragged ? "dragged" : ""}`}
                style={{ paddingBottom: '40px' }}
              >
                {testimonial_data.slice(12, 25).map((item, i) => (
                  <SwiperSlide
                    key={i}
                    className="tp-testimonial-five-item"
                    style={{
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                      minWidth: '600px',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    <div className="tp-testimonial-five-wrapper d-flex justify-content-between align-items-center">
                      <div className="tp-testimonial-five-top-info d-flex align-items-center">
                        <div className="tp-testimonial-five-avata">
                          <Image src={item.author_img} alt="theme-pure" />
                        </div>
                        <div className="tp-testimonial-five-author-info">
                          <h4 style={{ width: '177px' }}>{item.name}</h4>
                          <span>{item.title}</span>
                        </div>
                      </div>
                      <div className="tp-testimonial-five-brand d-none d-sm-block">
                        <Image
                          src={item.brand_icon}
                          alt="theme-pure"
                          style={{ width: '100px' }}
                        />
                      </div>
                    </div>
                    <div className="tp-testimonial-five-content">
                      <p>{item.description}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="tp-scrollbar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialArea;

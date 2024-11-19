import React, { useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import portfolio_data from "@/src/data/portfolio-data";

const TestimonialArea = () => {
  const sliderRef = useRef();

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const testimonial_content = {
    bg_img: "/assets/img/testimonial/projectbackground.jpg",
    title: <>Our Latest 8 Projects</>,
    subtitle: "We have an experienced team of production and inspection personnel to ensure quality.",
    // image: "/assets/img/testimonial/project-image.jpg",
  };

  const { bg_img, title, subtitle, image } = testimonial_content;

  return (
    <div
      className="tp-testimonial-2-area pt-110 pb-120"
      style={{
        backgroundImage: `url(${bg_img})`,
          backgroundSize: 'cover',  // Ensure the image covers the entire container
                  backgroundPosition: 'center',  // Center the background image
                  backgroundRepeat: 'no-repeat', // Ensure the image does not repeat
                  height: '940px',    // Adjust the height as needed
                  width: '100%',      // Ensure full width
                  display: 'flex',    // Use flexbox to center the blocks
                  justifyContent: 'center',  // Horizontally center
                  alignItems: 'center',     // Vertically center
                  boxSizing: 'border-box',
    
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 text-center">
            {/* Image Section */}
            <div className="testimonial-image">
              {/* <Image src={image} alt="Project" width={200} height={200} /> */}
            </div>

            {/* Title and Subtitle Section */}
            <div className="tp-testimonial-2-section-box mb-15">
              <h3 className="tp-section-title-lg text-white">{title}</h3>
              <h6 className="subtitle text-white">{subtitle}</h6>
            </div>
          </div>
        </div>

        {/* Slider Section */}
        <div className="row">
          <div className="col-12">
            <div className="tp-testimonial-2-section" >
              <Slider {...settings} ref={sliderRef} className="tp-testimonial-2-slider-active">
                {portfolio_data.map((item) => (
                  <div key={item.id} className="tp-testimonial-2-item" style={{   width: "374px",
    height: "522px",
    borderRadius: "25px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#fff", // Optional: Add a background color
    padding: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
                   
                      <div className="tp-testimonial-2-img">
                        <Image src={item.thumb_img} alt="Author" width={352} height={325} />
                    </div>
                     
                    <div className="tp-testimonial-2-author d-flex align-items-center">
                      <div className="tp-testimonial-2-content">
                        <div className="tp-testimonial-2-author-info pt-5 pb-5">
                        <span style={{ color:"#2C36FF"}}>{item.job_title}</span>
                      </div>
                        <h5>{item.title}</h5>

                      <p>{item.des}</p>
                    </div>
                    
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialArea;

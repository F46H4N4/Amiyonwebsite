import React, {useState, useEffect} from 'react';
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import icon_1 from "../../../../public/assets/img/feature/webapp.png";
import icon_2 from "../../../../public/assets/img/feature/ecommerce.png";
import icon_3 from "../../../../public/assets/img/feature/web-hosting_icon.png";
import icon_4 from "../../../../public/assets/img/feature/buisness_solution.png";

// slider setting
const setting = {
    loop: true, 
    slidesPerView: 5,
    spaceBetween: 30,
    breakpoints: {
        '1200': {
            slidesPerView: 5,
        },
        '992': {
            slidesPerView: 3,
        },
        '768': {
            slidesPerView: 2,
        },
        '576': {
            slidesPerView: 2,
        },
        '0': {
            slidesPerView: 1,
        },
    }, 
      scrollbar: {
        el: ".tp-scrollbar",
        clickable: true,
    },
  }
// journey_data
  const journey_data =[
    {
        id: "01", 
        icon:  "/assets/img/feature/webapp.png",
        title: <>Web Application</>,
        description: <>We envision sales teams having the tools <br />
        and talent they need to make remote <br /> work.</>,
    },
    {
        id: "02", 
        icon: "/assets/img/feature/ecommerce.png",
        title: <>E Commerce</>,
        description: <>We envision sales teams having the tools <br />
        and talent they need to make remote <br /> work.</>,
    },
    {
        id: "03", 
        icon: "/assets/img/feature/web-hosting_icon.png",
        title: <>Web Hosting</>,
        description: <>We envision sales teams having the tools <br />
        and talent they need to make remote <br /> work.</>,
    },
    {
        id: '04', 
        icon: "/assets/img/feature/buisness_solution.png",
        title: <>Business Solution</>,
        description: <>We envision sales teams having the tools <br />
        and talent they need to make remote <br /> work.</>,
    },
    {
        id: "05", 
        icon: "Present",
        title: <>Featured On <br /> Envato</>,
        description: <>We envision sales teams having the tools <br />
        and talent they need to make remote <br /> work.</>,
    },
    {
        id: "06", 
        date: "OCT 2020",
        title: <>Official <br /> Beta Launch</>,
        description: <>We envision sales teams having the tools <br />
        and talent they need to make remote <br /> work.</>,
    },
    {
      id: "07", 
      date: "OCT 2021",
      title: <>Rolling <br /> Up Sleeves</>,
      description: <>We envision sales teams having the tools <br />
      and talent they need to make remote <br /> work.</>,
  },
  {
      id: '08', 
      date: "OCT 2022",
      title: <>Design <br />Rewards In NYC</>,
      description: <>We envision sales teams having the tools <br />
      and talent they need to make remote <br /> work.</>,
  },
//   {
//       id: "09", 
//       date: "Present",
//       title: <>Featured On <br /> Envato</>,
//       description: <>We envision sales teams having the tools <br />
//       and talent they need to make remote <br /> work.</>,
//   },
//   {
//       id: "10", 
//       date: "OCT 2020",
//       title: <>Official <br /> Beta Launch</>,
//       description: <>We envision sales teams having the tools <br />
//       and talent they need to make remote <br /> work.</>,
//   },
//   {
//     id: "11", 
//     date: "OCT 2019",
//     title: <>Our Vision <br /> Of a better Way</>,
//     description: <>We envision sales teams having the tools <br />
//     and talent they need to make remote <br /> work.</>,
//   },
//   {
//       id: "12", 
//       date: "OCT 2020",
//       title: <>Official <br /> Beta Launch</>,
//       description: <>We envision sales teams having the tools <br />
//       and talent they need to make remote <br /> work.</>,
//   },
//   {
//     id: "13", 
//     date: "OCT 2021",
//     title: <>Rolling <br /> Up Sleeves</>,
//     description: <>We envision sales teams having the tools <br />
//     and talent they need to make remote <br /> work.</>,
//   },
//   {
//     id: '14', 
//     date: "OCT 2022",
//     title: <>Design <br />Rewards In NYC</>,
//     description: <>We envision sales teams having the tools <br />
//     and talent they need to make remote <br /> work.</>,
//   },
//   {
//     id: "15", 
//     date: "Present",
//     title: <>Featured On <br /> Envato</>,
//     description: <>We envision sales teams having the tools <br />
//     and talent they need to make remote <br /> work.</>,
//   },
//   {
//     id: "16", 
//     date: "OCT 2020",
//     title: <>Official <br /> Beta Launch</>,
//     description: <>We envision sales teams having the tools <br />
//     and talent they need to make remote <br /> work.</>,
//   },
  ]

const ServiceslidesArea = () => {

  const [isDragged, setIsDragged] = useState(false);

  const handleSlideChange = () => {
     setIsDragged(true);
  };

  const handleTransitionEnd = () => {
     setIsDragged(false);
    };
    
const backgroundStyle = {
    backgroundImage: "url('assets/img/feature/Energetic.jpeg')", // Replace with your image path
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "50px 0", // Optional padding
    height: "700px",
    width:"100%"
  };
    return (
      <>
        <div className="journey-area p-relative fix" style={backgroundStyle}>
          <div className="journey-grey-bg grey-bg"></div>
          <div className="container">
            <div className="row">
              <div className="col-12">
        <div
        className="journey-section-box"
        style={{
            display: "flex", // Enables flexbox
            justifyContent: "center", // Centers horizontally
            alignItems: "center", // Centers vertically
            // height: "100vh", // Full viewport height to center vertically
            textAlign: "center", // Ensures the text is aligned properly
        }}
        >                  {/* <h5 className="inner-section-subtitle pb-10">TIMELINE</h5> */}
                  <h3 className="ab-brand-title pb-0 mb-0" style={{ color:'white',font:'geist',fontSize:"60px", alignContent:'center'}}>
                      Our services
                    </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid g-0">
            <div className="row g-0">
              <div className="col-xl-12">
                <div className="journey-slider-wrapper pt-65">
                  <Swiper
                    {...setting}
                    onSliderMove={handleSlideChange}
                    onTransitionEnd={handleTransitionEnd}
                    modules={[Navigation, Scrollbar]}
                    className={`swiper-container journey-slider-active ${isDragged ? "dragged" : ""}`}
                  >
                    {journey_data.map((item, i) => (
                      <SwiperSlide
                        key={i}
                            className="journey-slider-item p-relative"
                            style={{
                                width: "372pX",
                                height: "324px",
                                background: "rgba(255, 255, 255, 0.6)", // Semi-transparent white
                                backdropFilter: "blur(10px)", // Blur effect
                                borderRadius: "33px", // Rounded edges
                                padding: "20px", // Internal padding
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
                                transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth hover effect
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "scale(1.05)"; // Zoom on hover
                                e.currentTarget.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.2)"; // Enhanced shadow
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "scale(1)"; // Reset zoom
                                e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"; // Reset shadow
                            }}
                            >
                        {/* <div className="journey-stroke-text">
                          <h2>{item.id}</h2>
                        </div> */}
                        <div className="journey-slider-meta">
                         <img
                          src={item.icon}
                          alt={`Icon ${item.id}`}
                          className="journey-icon"
                        />                        </div>
                        <div className="journey-slider-content">
                          <h4 className="journey-slider-title">{item.title}</h4>
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
      </>
    );
};

export default ServiceslidesArea;
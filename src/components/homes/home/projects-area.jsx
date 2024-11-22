import React, { useState } from 'react';
import Slider from 'react-slick'; // Import react-slick
import portfolio_data from '@/src/data/projects-data'; // Assuming your data path
import Image from 'next/image';
import Link from 'next/link';

// // Data
// const categories = [
//   "All",
//   ...new Set(portfolio_data.map((item) => item.category)),
// ];

const ProjectsArea = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [items, setItems] = useState(portfolio_data);

  // Slider settings for dot navigation (no numbers)
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,       // Enable dot navigation
    arrows: false,    // Disable arrows
    customPaging: function (i) {
      return (
        <div
           style={{
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        border: "2px solid #ffffff", // Border color
        margin: "0 5px",
        display: "inline-block", // Ensures horizontal alignment
        }}
        ></div>
      );
    },
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",        // Align the dots horizontally
          justifyContent: "center", // Center dots horizontally
         padding: "10px 0",
        listStyle: "none", // Removes any default marker styles

          
        }}
      >
        {dots}
      </div>
    ),
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

  // Filter items based on selected category
  const filterItems = (cateItem) => {
    setActiveCategory(cateItem);

    if (cateItem === "All") {
      return setItems(portfolio_data);
    } else {
      const findItems = portfolio_data.filter((findItem) => findItem.category === cateItem);
      setItems(findItems);
    }
  };

  return (
      <div className="portfolio-area pt-50 pb-0"
          style={{
        backgroundImage: 'url(assets/img/testimonial/projectbackground.jpg)', // Path to your background image
        backgroundSize: 'cover', // Ensures the image covers the full container
        backgroundPosition: 'center', // Centers the background image
        backgroundRepeat: 'no-repeat', // Prevents the background from repeating
      }}>
          <div className="container">
        <div
        style={{
          display: "flex",
          flexDirection: "column", // Stack content vertically
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h3
          className="ab-brand-title pb-5 mb-0"
          style={{
            font: "geist",
            fontSize: "60px",
            color: "white",
            textAlign: "center",
            wordBreak: "break-word",
            lineHeight: "1.4", // Adds spacing between lines
// Ensures wrapping for small screens
          }}
        >
          Our Latest <span style={{ whiteSpace: "nowrap" }}>Projects</span>
        </h3>
        <h6
          style={{
            color: "white",
            marginTop: "10px",
            fontSize: "16px",
            font:"geist"
              // Smaller font for subheading
          }}
        >
          We have an experienced team of production and inspection personnel to ensure quality.
        </h6>
      </div>

        <div className="row">
          <div className="col-xl-12">
            {/* <div className="portfolio-filter masonary-menu text-center mb-35">
              {categories.map((cate, i) => (
                <button
                  onClick={() => filterItems(cate)}
                  key={i}
                  className={`${cate === activeCategory ? "active" : ""}`}
                >
                  <span>{cate}</span>
                </button>
              ))}
            </div> */}
          </div>
        </div>

        {/* Slider Section */}
        <div className="row">
          <div className="col-12">
            <div className="tp-project-slider">
              <Slider {...settings}> {/* Implementing React Slick slider */}
                {items.map((item, i) => (
             <div
                key={i}
                className="col-xl-4 col-lg-6 col-md-6 col-sm-6 grid-item"
                style={{
                    marginBottom: "30px",
                    marginLeft: "15px",
                    marginRight: "15px",
                }}
                >
                <div
                    className="inner-project-item"
                    style={{
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    padding: "20px",
                    margin: "15px",
                    maxHeight: "522px", // Set minimum height
                    display: "flex", // Flexbox for consistent layout
                    flexDirection: "column", // Stack content vertically
                    justifyContent: "space-between", // Ensure content spans the full height
                    }}
                >
                    <div className="inner-project-img fix p-relative">
                    <Image className="w-100" src={item.thumb_img} alt="theme-pure" />
                    <div
                        className="brand-logo"
                        style={{
                        position: "absolute",
                        bottom: "10px",
                        left: "10px",
                        zIndex: "10",
                        // background: "rgba(255, 255, 255, 0.8)",
                        padding: "5px",
                        borderRadius: "5px",
                        }}
                    >
                        <Image src={item.brand_logo} alt="brand-logo" />
                    </div>
                    </div>
                    <div className="inner-project-content" style={{ marginTop: "15px" }}>
                    <span className="inner-project-category-title">{item.job_title}</span>
                    <h4 className="inner-project-title">
                    <Link href={`${item.slug}-project-details`}>
                      {item.title}
                    </Link>
                  </h4>
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

export default ProjectsArea;

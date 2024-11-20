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
      <div className="portfolio-area pt-5 pb-90"
          style={{
        backgroundImage: 'url(assets/img/testimonial/projectbackground.jpg)', // Path to your background image
        backgroundSize: 'cover', // Ensures the image covers the full container
        backgroundPosition: 'center', // Centers the background image
        backgroundRepeat: 'no-repeat', // Prevents the background from repeating
      }}>
          <div className="container">
        <div style={{
          display: "flex", // Enables flexbox
          justifyContent: "center", // Centers horizontally
          alignItems: "center", // Centers vertically
          textAlign: "center", // Ensures the text is aligned properly
              }}>
                  <h3 className="ab-brand-title pb-5 mb-0" style={{ font: 'geist', fontSize: "60px", alignContent: 'center' }}>
                    Our Latest 8 Projects
                  </h3>
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
                      marginBottom: "30px", // Add space below each slide
                      marginLeft: "15px",   // Add space between slides horizontally
                      marginRight: "15px",  // Add space between slides horizontally
                    }}
                  >
                    <div className="inner-project-item"  style={{
                        backgroundColor: "#fff", // White background for each block
                        borderRadius: "8px", // Optional: Adds rounded corners
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Optional: Adds a subtle shadow
                        padding: "20px", // Optional: Adds padding inside the block
                        margin: "15px",          // Adds consistent gap around each block

                    }}
                    >
                      <div className="inner-project-img fix p-relative">
                        <Image className="w-100" src={item.thumb_img} alt="theme-pure" />
                      </div>
                      <div className="inner-project-content">
                        <span className="inner-project-category-title">{item.job_title}</span>
                        <h4 className="inner-project-title">
                          <Link href="/project-details">{item.title}</Link>
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

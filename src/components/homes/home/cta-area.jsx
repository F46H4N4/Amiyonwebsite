import React from 'react';
import Image from 'next/image';

import plan_img_1 from "../../../../public/assets/img/feature/hifi.png";

const cta_content = {
  img_box: [
    { id: 1, img: plan_img_1, cls: "1" },
  ],
  title: (
    <>
      Why We're the Right Choice
    </>
  ),
  des: (
    <>
      At Amiyon, we pride ourselves on being a trusted partner for businesses seeking effective software solutions. We deliver tailored, high-quality products that meet your unique needs and goals.  Our experienced team takes the time to understand your challenges, creating functional, scalable, and efficient solutions. We guarantee timely delivery and adherence to budget while maintaining the highest quality standards.
    </>
  ),
};

const { img_box, title, des } = cta_content;

const CtaArea = () => {
  return (
    <div
      className="tp-plan-area tp-plan-space"
      style={{
        background: "white",
        display: "flex",
        justifyContent: "flex-start",  // Align to the left
        alignItems: "center",          // Center vertically
        height: "100vh",               // Ensure full viewport height
        paddingLeft: "5%",            // Add left padding to shift content to the right
      }}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {/* Text Content Section */}
          <div
            className="col-xl-5 col-lg-5 order-2 order-lg-1 wow tpfadeRight"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div className="tp-plan-section-box">
              <h3
                className="tp-section-title-5 text-black pb-15"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 500,
                  lineHeight: "1.5",
                  fontSize: "36px",
                  marginBottom: "20px",
                  maxWidth: "400px",
                  // textAlign: "center",  // Center the title text
                }}
              >
                {title}
              </h3>
              <p
                className="mb-0 pb-30"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.8",
                  color: "#333",
                  marginBottom: "30px",
                  maxWidth: "400px",
                  textAlign: "justify",  // Center the description text
                }}
              >
                {des}
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div
            className="col-xl-7 col-lg-7 order-1 order-lg-2 wow tpfadeLeft"
            data-wow-duration=".9s"
            data-wow-delay=".3s"
          >
            <div className="tp-plan-img-box p-relative">
              {img_box.map((item, i) => (
                <div key={i} className={`tp-plan-img-${item.cls}`}>
                  <Image
                    src={item.img}
                    alt="plan image"
                    style={{
                      width: "100%",
                      maxWidth: "557px",
                      height: "auto",
                      borderRadius: "20px",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaArea;

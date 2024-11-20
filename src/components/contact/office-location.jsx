import React from 'react';
import img_1 from "../../../public/assets/img/contact/location1.png";
import img_2 from "../../../public/assets/img/contact/location2.png";
import Image from 'next/image';
import Link from 'next/link';

// Office location data
const office_data = [
  {
    id: 1,
    cls: "",
    img: img_1,
    location: "Colombia",
    address: <>Bogota D.C., Colombia, b. a 181 <br /> C No. 930 Ap 202</>,
  },
  {
    id: 2,
    cls: "p-relative",
    img: img_2,
    // badge: "Main Office",
    location: "France",
    address: <>9 Pearse Street, Kinsale, Cork, <br /> P17 AH66, Ireland</>,
  },
];

const OfficeLocation = () => {
  return (
    <>
      <div className="contact-info-area ">
        <div className="container">
            <div className="row mb-50">
            <div className="col-12">
              <h2 className="section-title text-center">Our Locations</h2>
            </div>
          </div>

          <div className="row">
            {office_data.map((item, i) => (
              <div
                key={i}
                className="col-xl-6 col-lg-6 col-md-12 mb-30" // Adjusted classes for 2 columns
              >
                <div className={`contact-info-item ${item.cls}`}>
                  {item.badge && (
                    <div className="contact-info-badge">
                      <span>{item.badge}</span>
                    </div>
                  )}
                  <div className="contact-info-img">
                    <Image src={item.img} alt="theme-pure" />
                  </div>
                  <div className="contact-info-title-box">
                    <h5 className="contact-info-title-sm">
                      <Link href="#">{item.location}</Link>
                    </h5>
                    <p>{item.address}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OfficeLocation;

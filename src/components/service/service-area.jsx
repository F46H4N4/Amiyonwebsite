import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import portfolio_data from '@/src/data/services-data';

const ServiceArea = () => {
    return (
        <>
            {/* <div className="pb-120 z-index">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-12">
                        <div className="tp-service-section-wrapper mb-60 d-flex justify-content-between align-items-end">
                           {/* <h3 className="tp-section-title tp-title-anim">Our Portfolio</h3> */}
                        {/* </div>
                     </div>
                  </div>
                  <div className="row">
                     {portfolio_data.map((item, i) => (
                        <div key={i} className="col-xl-4 col-lg-6 col-md-6 wow tpfadeUp" 
                             data-wow-duration=".9s" 
                             data-wow-delay={item.delay}>
                           <div className="tp-service-sm-item mb-30">
                              <div className="tp-portfolio-thumb mb-4">
                                 <Image 
                                    src={item.thumb_img}
                                    alt={item.title}
                                    className="w-full h-64 object-cover rounded-lg"
                                 />
                              </div>
                              <div className="tp-service-sm-content">
                                 <span className="text-sm text-gray-600" style={{ border:"none",color:"#2C36FF" }}>{item.job_title}</span>
                                 <h3 className="tp-service-sm-title text-xl font-bold mt-2">
                                    <Link href={`/portfolio/${item.id}`}>
                                       {item.title}
                                    </Link>
                                 </h3>
                                 <p className="mt-2 text-gray-700">{item.des}</p>
                                 <div className="tp-service-sm-link mt-4">
                                    {/* <Link href={`/portfolio/${item.id}`} className="inline-flex items-center">
                                       Learn More <i className="far fa-arrow-right ml-2"></i>
                                    </Link> */}
                                 {/* </div>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
          </div> */} *
          
               <div class="centralized-content pt-0 pb-150"   style={{
               width: '806px',
               height: '193px',
               textAlign: 'center',
               margin: '0 auto', // Horizontally center the container
               display: 'flex', // Use flexbox
               flexDirection: 'column', // Arrange items vertically
               justifyContent: 'center', // Vertically center the content
               alignItems: 'center', // Horizontally center the content
            }}>
            <div class="heading" tyle ={{ font:'geist',fontWeight:'400px',lineHeight:'30px',fontSize:'82.5px' }}>Our Impact!</div>
            <div class="content" style ={{ font:'geist',fontWeight:'400px',lineHeight:'30px',fontSize:'20px' }}>
                For over a decade, Amiyon has delivered impactful,
                tailored solutions that drive efficiency and growth.
                We provide high-quality software on time, within budget, and designed to make a difference.
            </div>
        </div>
        </>
    );
};

export default ServiceArea;
import React from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SocialLinks from '@/src/common/social-links';
import Image from 'next/image';
import solution_1  from "../../../public/assets/img/project/kficblock.png";
import solution_2  from "../../../public/assets/img/project/solution-2.jpg";
import { useIsomorphicLayoutEffect } from '@/src/hooks/useIsomorphicEffect';


const project_details_data = [
    {
        id: 1,
        cls: "info", 
        title: "About the Project",
        feture_list: false,
        description: (
            <>
                **KFIC** offers personalized and efficient financing solutions tailored to meet the needs of businesses and individuals. Their range of services includes business loans, personal financing, and customized financial advice, ensuring that every client receives solutions that are designed to support their financial goals and growth.
                <br /><br />
                The platform prides itself on providing seamless, transparent, and secure financing options. With a commitment to excellent customer service and efficient processing, KFIC ensures that every customer has access to the best financing options available in the market.
            </>
        ),
    },
    {
        id: 2,
        cls: "overview", 
        title: "Project Highlights",
        feture_list: [
            <>Tailored financing solutions for both businesses and individuals.</>,
            <>Seamless, transparent, and secure processing of financial products.</>,
            <>Wide range of services including business loans, personal financing, and financial advice.</>,
            <>Dedicated team providing expert guidance and customer support.</>,
            <>Efficient and user-friendly platform designed to make the financing process hassle-free.</>,
        ],
        description: (
            <>
                KFIC offers the following key features:
                <br /><br />
                - A variety of financing options to suit both business and personal needs, including short-term and long-term loans.
                <br />
                - Transparent and secure online processes that prioritize customer safety.
                <br />
                - Expert financial advice and tailored solutions that cater to the specific needs of each customer.
                <br />
                - A simple, easy-to-use platform that simplifies the financing application and approval process.
                <br />
                - Fast and efficient service with dedicated customer support to assist at every step.
            </>
        ),
    },
];

const project_details_content = { 
    solution_title: "Solution & Result",
    des_1: (
        <>
            **KFIC** was developed with the mission to provide businesses and individuals with customized financial solutions that meet their unique needs. With a wide range of financing products and services, KFIC ensures that customers have access to the best solutions to achieve their financial goals.
            <br /><br />
            The platform focuses on providing a quick, secure, and user-friendly experience for all customers, ensuring that each financial product is tailored to the customer's requirements.
        </>
    ),
    des_2: (
        <>
            The outcome of the KFIC project has been an overwhelmingly positive response from clients. The platform has helped numerous businesses expand and individuals achieve financial independence by providing easy access to financing options. The business continues to grow, and KFIC is expanding its range of services to include even more personalized financial products.
            <br /><br />
            By focusing on customer satisfaction and seamless processing, **KFIC** has established itself as a trusted partner for all financial needs.
        </>
    ),
};

const {solution_title, des_1, des_2 }  = project_details_content;

const ProjectDetailsArea = () => {
   
   useIsomorphicLayoutEffect(() => {
      ScrollTrigger.create({
         trigger: ".social-box-pin",
         start: "top 10%",
         end: "bottom 60%",
         pin: ".social-box-pin",
         pinSpacing: false
        });
   },[])

    return (
        <>
       <div className="pd-details-area" style={{ paddingTop: '74px' }}>
      <div
         className="container"
         style={{
            maxWidth: '1200px', // Center the content within a fixed width
            margin: '0 auto',  // Center horizontally
            padding: '0 20px', // Add space on left and right
         }}
      >
         <div
            className="row g-0"
            style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            }}
         >
            <div className="col-xl-2 col-lg-2 social-box-pin" style={{ display: 'none' }}>
            {/* Hidden social links */}
            </div>
            <div
            className="col-xl-10 col-lg-10"
            style={{
               flex: 1,
               paddingLeft: '20px', // Add small padding on the left
            }}
            >
            <div className="pd-details-wrapper" style={{ textAlign: 'left' }}>
               {project_details_data.map((item, i) => (
                  <div key={i} className={`pd-details-${item.cls}`} style={{ marginBottom: '20px' }}>
                  <h4
                     className="pd-details-title"
                     style={{
                        textAlign: 'left',
                        marginLeft: '0',
                        paddingLeft: '0',
                     }}
                  >
                     {item.title}
                  </h4>
                  {item.feture_list && (
                     <ul style={{ paddingLeft: '40px' }}>
                        {item.feture_list.map((list, i) => (
                        <li key={i}>{list}</li>
                        ))}
                     </ul>
                  )}
                  <p style={{ textAlign: 'left', marginLeft: '0' }}>{item.description}</p>
                  </div>
               ))}
               <div className="pd-details-solution">
                  <div
                  className="pd-details-solution-img-box"
                  style={{
                     display: 'flex',
                     alignItems: 'flex-start',
                     justifyContent: 'flex-start',
                     marginBottom: '20px',
                  }}
                  >
                  <div className="pd-details-solution-img" style={{ marginRight: '30px' }}>
                     <Image src={solution_1} alt="theme-pure" />
                  </div>
                  </div>
                  <div className="row" style={{ margin: '0', padding: '0' }}>
                  <div className="col-md-3" style={{ padding: '0' }}>
                     <div
                        className="pd-solution-title-box"
                        style={{ textAlign: 'left', paddingLeft: '20px' }}
                     >
                        <h4 className="pd-details-title">{solution_title}</h4>
                     </div>
                  </div>
                  <div
                     className="col-md-9"
                     style={{
                        padding: '0',
                        paddingLeft: '20px', // Adjust space for the description
                     }}
                  >
                     <div className="pd-solution-paragraph" style={{ textAlign: 'left' }}>
                        <p>{des_1}</p>
                        <p>{des_2}</p>
                     </div>
                  </div>
                  </div>
               </div>
            </div>
            </div>
         </div>
      </div>
      </div>


        </>
    );
};

export default ProjectDetailsArea;
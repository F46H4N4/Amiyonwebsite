import React from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SocialLinks from '@/src/common/social-links';
import Image from 'next/image';
import solution_1  from "../../../public/assets/img/project/omahatblock.png";
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
                **Omahat** is a specialized e-commerce platform focused on providing premium baby care products. From baby essentials like diapers, clothes, and feeding accessories to toys and health care items, Omahat curates the best selection of trusted baby care brands.
                <br /><br />
                The platform aims to support new and experienced parents by offering a convenient shopping experience with products designed to ensure the well-being and comfort of babies. Omahat is committed to quality, safety, and the peace of mind of parents.
            </>
        ),
    },
    {
        id: 2,
        cls: "overview", 
        title: "Project Highlights",
        feture_list: [
            <>High-quality baby care products from trusted brands.</>,
            <>Safe and secure shopping experience with reliable payment methods.</>,
            <>Wide variety of items including baby clothes, diapers, skincare, and toys.</>,
            <>User-friendly interface for quick and easy shopping.</>,
            <>Dedicated customer support for any product inquiries or issues.</>,
        ],
        description: (
            <>
                Omahat offers the following key features for parents:
                <br /><br />
                - A vast selection of baby care products, ensuring parents have access to all essential items needed for their little ones.
                <br />
                - Safe and secure online shopping with payment options parents trust.
                <br />
                - Personalized recommendations based on a parent's shopping preferences.
                <br />
                - A smooth shopping experience, including easy navigation and quick checkout.
                <br />
                - Excellent customer support available to answer any questions about products or orders.
            </>
        ),
    },
]

const project_details_content = { 
    solution_title: "Solution & Result",
    des_1: (
        <>
            **Omahat** was created with the goal of making baby care shopping easier and more convenient for parents. With a carefully selected collection of top-rated baby care items, the platform ensures that every product meets the highest standards of safety and quality.
            <br /><br />
            The platform aims to offer parents an easy way to find and purchase everything their baby needs in one place, ensuring convenience and peace of mind.
        </>
    ),
    des_2: (
        <>
            The outcome of this project has been a highly positive response from parents who appreciate the curated selection of products. **Omahat** has quickly gained the trust of parents by delivering the best baby care essentials, fast shipping, and a user-friendly platform. The business is steadily growing and expanding into new product categories.
            <br /><br />
            By focusing on quality, ease of use, and customer satisfaction, **Omahat** has positioned itself as a go-to destination for all baby care needs.
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
import React from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SocialLinks from '@/src/common/social-links';
import Image from 'next/image';
import solution_1  from "../../../public/assets/img/project/yalfishblock.png";
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
                **Yalfish** is an innovative online marketplace designed to offer a wide variety of fresh fish and seafood, including popular local and international varieties. From tuna and salmon to shrimp, shellfish, and other seafood delicacies, Yalfish ensures that customers can order fresh fish delivered directly to their doorsteps.
                <br /><br />
                Yalfish's commitment to sustainability and ethical sourcing makes it the ideal platform for customers who value fresh, responsibly sourced seafood. The platform is designed to be user-friendly, allowing customers to easily browse and place orders with just a few clicks, ensuring a seamless and hassle-free shopping experience.
            </>
        ),
    },
    {
        id: 2,
        cls: "overview", 
        title: "Project Highlights",
        feture_list: [
            <>Wide selection of fresh fish and seafood including popular and local varieties.</>,
            <>Sustainably and ethically sourced products that prioritize environmental responsibility.</>,
            <>Fast and reliable delivery to ensure the freshest seafood arrives at your doorsteps.</>,
            <>User-friendly platform with easy navigation and quick ordering process.</>,
            <>Multiple payment options for convenience and a safe online shopping experience.</>,
        ],
        description: (
            <>
                **Yalfish** provides the following key features for seafood lovers:
                <br /><br />
                - A diverse selection of fresh fish, shellfish, and other seafood delicacies sourced from certified fisheries.
                <br />
                - Environmentally conscious practices to promote responsible fishing and sourcing.
                <br />
                - A fast and convenient delivery system to ensure products arrive fresh.
                <br />
                - A simple, user-friendly website where customers can browse and order with ease.
                <br />
                - Safe, secure online payment options for a hassle-free shopping experience.
            </>
        ),
    },
]

const project_details_content = { 
    solution_title: "Solution & Result",
    des_1: (
        <>
            **Yalfish** was created with the goal of transforming the seafood shopping experience by offering customers a reliable, convenient, and environmentally responsible platform to order fresh seafood. With an easy-to-use website and a broad range of products, customers can browse and purchase seafood from the comfort of their homes, with fast and efficient delivery.
            <br /><br />
            By prioritizing sustainability and freshness, Yalfish ensures that customers receive only the highest-quality seafood that supports ethical fishing practices.
        </>
    ),
    des_2: (
        <>
            The result of this project has been a successful online marketplace for seafood lovers who want to enjoy fresh products while supporting ethical fishing practices. **Yalfish** has established a strong reputation for delivering high-quality seafood, and customers have responded positively to the platform's user-friendly design and convenience.
            <br /><br />
            As **Yalfish** continues to grow, the platform will expand its offerings, introduce more sustainable products, and enhance its services, ensuring it remains the go-to platform for fresh, responsibly sourced seafood.
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
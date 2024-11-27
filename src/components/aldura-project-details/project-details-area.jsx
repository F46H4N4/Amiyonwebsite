import React from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SocialLinks from '@/src/common/social-links';
import Image from 'next/image';
import solution_1  from "../../../public/assets/img/project/aldurablock.png";
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
                This project introduces a **Company for Recruitment and Employment of Domestic Workers**, the first of its kind in Kuwait to be established by national entities. The platform is a significant step towards addressing the recruitment challenges for domestic workers, ensuring transparency, and fostering public interest.
                <br /><br />
                The company aims to bring a qualitative shift in domestic employment services by adhering to the highest standards of ethics and professionalism. It bridges the gap between employers and domestic workers, providing a streamlined process for recruitment while ensuring the rights and needs of both parties are respected.
                <br /><br />
                Backed by national organizations, the platform is committed to excellence and innovation, setting a benchmark for similar initiatives in the region.
            </>
        ),
    },
    {
        id: 2,
        cls: "overview", 
        title: "Project Highlights",
        feture_list: [
            <>The first platform in Kuwait dedicated to domestic worker recruitment, formed by national entities.</>,
            <>Commitment to ethical practices and fostering public interest.</>,
            <>Streamlined recruitment process for both employers and domestic workers.</>,
            <>Focus on transparency, professionalism, and innovation.</>,
        ],
        description: (
            <>
                The project is designed to address the critical needs of the domestic employment sector, focusing on:
                <br /><br />
                - Building trust and transparency in the recruitment process.
                <br />
                - Empowering both employers and workers with clear guidelines and efficient services.
                <br />
                - Providing a national platform that ensures compliance with regulations and ethical standards.
                <br />
                - Offering a user-friendly experience, making it convenient for all stakeholders to access services.
            </>
        ),
    },
];

const project_details_content = { 
    solution_title: "Solution & Result",
    des_1: (
        <>
            The platform provides a comprehensive solution for domestic worker recruitment, revolutionizing the way employers and workers connect. By offering a user-centric approach, the platform ensures efficient recruitment, contract management, and post-recruitment services.
            <br /><br />
            With a focus on transparency and trust, the system enables employers to select domestic workers based on verified profiles and qualifications. The platform also ensures that domestic workers' rights are protected and that their employment is managed ethically.
        </>
    ),
    des_2: (
        <>
            Since its inception, the platform has achieved a significant milestone in redefining the domestic employment sector in Kuwait. It has streamlined the recruitment process, minimized delays, and enhanced user satisfaction through innovative tools and services.
            <br /><br />
            The initiative stands as a model of national collaboration, paving the way for sustainable development in the recruitment industry while addressing key social and economic challenges.
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
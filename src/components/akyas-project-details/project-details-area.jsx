import React from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SocialLinks from '@/src/common/social-links';
import Image from 'next/image';
import solution_1  from "../../../public/assets/img/project/akyasblock.png";
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
                "Bags" is a premier online shopping platform owned by the National Union Plastic Factory, a significant investment of Jenan National General Trading and Contracting Company. This eCommerce store is the first of its kind in Kuwait and the surrounding region, providing a wide variety of products including daily consumables, household items, and cleaning tools. 
                <br /><br />
                The platform serves both individuals and businesses, offering round-the-clock access to a comprehensive product range. Our products are carefully selected for their high quality, meeting both local and international standards. Each item is tested rigorously to ensure it meets the specifications and expectations of our customers.
                <br /><br />
                "Bags" also emphasizes environmental responsibility by offering sustainable, eco-friendly products whenever possible. Our goal is to ensure that all our customers can rely on our platform for their everyday needs while also prioritizing the wellbeing of the planet. 
            </>
        ),
    },
    {
        id: 2,
        cls: "overview", 
        title: "Project Highlights",
        feture_list: [
            <>Wide range of products including daily consumables, household items, and cleaning tools.</>,
            <>High-quality products that meet local and international standards.</>,
            <>24/7 service for both individual customers and businesses.</>,
            <>Commitment to offering environmentally friendly products whenever possible.</>,
        ],
        description: (
            <>
                The “Bags” online store offers a wide array of product categories designed to meet the daily needs of individuals and businesses. Key highlights include:
                <br /><br />
                - A variety of products, including daily consumables, household essentials, and cleaning tools.
                <br />
                - Focus on high-quality products that are rigorously tested to ensure they comply with both local and international quality standards.
                <br />
                - The ability to provide services around the clock, ensuring that all customers, whether individuals or businesses, have access to our products at any time.
                <br />
                - A commitment to sustainability, offering environmentally friendly options and focusing on eco-friendly products.
            </>
        ),
    },
]

const project_details_content = { 
    solution_title: "Solution & Result",
    des_1: (
        <>
            The "Bags" eCommerce platform offers a comprehensive solution for customers seeking high-quality household and daily consumable products. By providing an intuitive online shopping experience, the site enables users to browse, select, and purchase items effortlessly. The platform’s user-friendly interface, coupled with robust back-end integration, ensures seamless navigation and efficient order processing, making it convenient for both individuals and businesses to shop at any time.
            <br /><br />
            In terms of product quality, "Bags" ensures all items meet rigorous local and international standards, subjecting them to thorough testing before they are made available for sale. This attention to quality control provides customers with confidence in the products they purchase, knowing that they meet the highest industry standards.
        </>
    ),
    des_2: (
        <>
            "Bags" also stands out for its commitment to sustainability by offering eco-friendly product options. The platform carefully selects environmentally conscious products to promote a greener lifestyle among its customers. The store’s commitment to eco-friendly products aligns with its mission to provide high-quality, responsibly sourced items for everyday use.
            <br /><br />
            Since its launch, the "Bags" eCommerce site has quickly become a trusted destination for reliable, high-quality products, offering an extensive range of items for homes and businesses alike. The platform’s scalable design allows it to adapt to increasing customer demand, positioning it for continued growth and success in the region.
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
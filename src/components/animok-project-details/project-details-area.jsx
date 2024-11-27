import React from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SocialLinks from '@/src/common/social-links';
import Image from 'next/image';
import solution_1  from "../../../public/assets/img/project/animokblock.png";
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
                Animok Toy Store is an online destination for all things toys and games. Designed with kids and families in mind, the store offers a wide selection of high-quality toys, games, and educational products. 
                <br /><br />
                The platform is intuitive and easy to navigate, ensuring a seamless shopping experience for parents, caregivers, and children alike. Whether you're looking for the latest action figures, puzzles, educational toys, or plush dolls, Animok has something for everyone. 
                <br /><br />
                We pride ourselves on offering products that not only entertain but also promote creativity, learning, and imagination. Our toys adhere to the highest safety standards, ensuring that your little ones play and learn in a safe environment.
            </>
        ),
    },
    {
        id: 2,
        cls: "overview", 
        title: "Project Highlights",
        feture_list: [
            <>A vast selection of toys and games for children of all ages.</>,
            <>User-friendly online shopping platform for parents and families.</>,
            <>Educational and fun toys that promote creativity and learning.</>,
            <>High-quality, safe products that meet international safety standards.</>,
            <>Customizable gift wrapping and personalized messages for special occasions.</>,
        ],
        description: (
            <>
                Animok Toy Store offers a comprehensive range of products designed to bring joy and learning to kids everywhere. Some key highlights include:
                <br /><br />
                - A diverse collection of toys, games, and educational products for children.
                <br />
                - A seamless, easy-to-use online shopping experience for parents and caregivers.
                <br />
                - Educational toys that help children develop essential skills and promote creativity.
                <br />
                - Safe, high-quality products that comply with global safety standards.
                <br />
                - Personalization options like gift wrapping and custom messages for special occasions.
            </>
        ),
    },
]

const project_details_content = { 
    solution_title: "Solution & Result",
    des_1: (
        <>
            Animok Toy Store has transformed the way parents and children shop for toys by offering a one-stop online platform. The site provides a wide range of carefully curated toys, from educational tools to the latest in entertainment products. Customers can easily browse and filter products by age, category, and interests to find the perfect item for any occasion.
            <br /><br />
            The platform’s user-friendly interface ensures that shopping is both fun and efficient. Parents can confidently shop for toys that will help their children develop valuable skills, whether it's through play or education.
        </>
    ),
    des_2: (
        <>
            With a strong emphasis on safety, quality, and learning, Animok has become a trusted brand among parents and gift-givers. Additionally, the store offers customizable gift options and personalized messages, making it the perfect choice for special events like birthdays, holidays, or other celebrations.
            <br /><br />
            Animok Toy Store continues to grow as a reliable source for fun, safe, and educational toys, providing a satisfying experience for families and bringing joy to children worldwide.
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
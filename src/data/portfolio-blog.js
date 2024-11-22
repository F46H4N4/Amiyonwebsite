// thumb img import here 
import thumb_img_1 from "../../public/assets/img/service/firstblock.png";
import thumb_img_2 from "../../public/assets/img/service/secondblock.png";
import thumb_img_3 from "../../public/assets/img/service/thirdblock.png";
import thumb_img_4 from "../../public/assets/img/service/fourblock.png";
import thumb_img_5 from "../../public/assets/img/service/fiveblock.png";
import thumb_img_6 from "../../public/assets/img/service/sixblock.png";
import thumb_img_7 from "../../public/assets/img/service/sevenblock.png";
import thumb_img_8 from "../../public/assets/img/service/eightblock.png";
import thumb_img_9 from "../../public/assets/img/service/nineblock.png";
import thumb_img_10 from "../../public/assets/img/blog/blog-grid-4.jpg";
import thumb_img_11 from "../../public/assets/img/blog/blog-grid-5.jpg";
import thumb_img_12 from "../../public/assets/img/blog/blog-grid-6.jpg";

// avata img import here
import avata_img_1 from "../../public/assets/img/avata/avata-1.png";
import avata_img_2 from "../../public/assets/img/avata/avata-2.png";
import avata_img_3 from "../../public/assets/img/avata/avata-3.png";
import avata_img_4 from "../../public/assets/img/avata/avata-4.png";
import avata_img_5 from "../../public/assets/img/avata/avata-5.png";
import avata_img_6 from "../../public/assets/img/avata/avata-6.png";
import avata_img_7 from "../../public/assets/img/avata/avata-1.png";
import avata_img_8 from "../../public/assets/img/avata/avata-2.png";
import avata_img_9 from "../../public/assets/img/avata/avata-3.png";
import avata_img_10 from "../../public/assets/img/avata/avata-4.png";
import avata_img_11 from "../../public/assets/img/avata/avata-5.png";
import avata_img_12 from "../../public/assets/img/avata/avata-6.png";

const portfolio_blog = [
    {
        id: 1,
        thumb_img: thumb_img_1,
        // avata_img: avata_img_1,
        // name: "WEB APPLICATION",
        // job_title: "Founder & CEO Dulalix",
        slug:"webapp",
        title: <>Seamless,<br></br>data-driven web apps.</>,
        // cls: "",
        // date: "April 12, 2023",
        // col: "",
        // delay: ".5s",
        category: "WEB APPLICATION",
        filter_id: ["all", "business", "marketing", "designing", "development", "resources" ],
    },
    {
        id: 2,
        thumb_img: thumb_img_2,
        // avata_img: avata_img_2,
        // name: "Rudra Ghosh",
        // job_title: "Founder & CEO Dulalix",
        slug: "webhost",
        title: <>Reliable, fast web hosting with <br></br> 99.9% uptime.</>,
        // cls: "",
        // date: "April 12, 2023",
        // col: "",
        // delay: ".5s",
        category: "WEB HOSTING",
        filter_id: ["all", "business", "marketing", "designing", "development", "resources" ],
    },
    {
        id: 3,
        thumb_img: thumb_img_3,
        // avata_img: avata_img_3,
        // name: "Geraldine",
        // job_title: "Founder & CEO Dulalix",
        slug: "outsource",
        title: <>All-in-one IT outsourcing <br></br>solutions.</>,
        // cls: "",
        // date: "April 12, 2023",
        // col: "",
        // delay: ".5s",
        category: "OUTSOURCING SERVICES",
        filter_id: ["all", "business", "marketing", "designing", "development", "resources" ],
    },
    {
        id: 4,
        thumb_img: thumb_img_4,
        // avata_img: avata_img_4,
        // name: "Helen M.",
        // job_title: "Founder & CEO Dulalix",
        title: <>Mobile app development for <br></br>iOS and Android..</>,
        // cls: "",
        // date: "April 24, 2023",
        // col: "",
        // delay: ".5s",
        slug: "mobiledev",
        category: "MOBILE DEVELOPMENT",
        filter_id: ["all", "business", "marketing", "designing", "development", "resources" ],
    },
    {
        id: 5,
        thumb_img: thumb_img_5,
        // avata_img: avata_img_5,
        // name: "R. Jones",
        // job_title: "Founder & CEO Dulalix",
        title: <>Adaptive tech solutions for <br></br> manufacturing and retail.</>,
        // cls: "",
        // date: "April 12, 2023",
        // col: "",
        // delay: ".5s",
        slug: "buisness",
        category: "BUSINESS SOLUTION",
        filter_id: ["all", "business", "marketing", "designing", "development", "resources" ],
    },
    {
        id: 6,
        thumb_img: thumb_img_6,
        // avata_img: avata_img_6,
        // name: "Frank P. Miller",
        // job_title: "Founder & CEO Dulalix",
        title: <>End-to-end e-commerce solutions for <br></br>B2B and B2C..</>,
        // cls: "",
        // date: "April 12, 2023",
        // col: "",
        // delay: ".5s",
        slug: "commerce",
        category: "E-COMMERCE",
        filter_id: ["all", "business", "marketing", "designing", "development", "resources" ],
    }, 

    // extra
    {
        id: 7,
        thumb_img: thumb_img_7,
        // avata_img: avata_img_7,
        // name: "Hilary Ouse",
        // job_title: "Founder & CEO Dulalix",
        title: <>Mobile app development for <br></br>iOS and Android.</>,
        // cls: "",
        // date: "April 12, 2023",
        // col: "",
        // delay: ".5s",
        slug: "assurance",
        category: "QUALITY ASSURANCE & TESTING",
        filter_id: ["all", "business", "marketing", "designing", "development", "resources" ],
    },
    {
        id: 8,
        thumb_img: thumb_img_8,
        // avata_img: avata_img_8,
        // name: "Rudra Ghosh",
        // job_title: "Founder & CEO Dulalix",
        title: <>Adaptive tech solutions for <br></br>manufacturing and retail.</>,
        // cls: "",
        // date: "April 12, 2023",
        // col: "",
        // delay: ".5s",
        slug: "consultancy",
        category: "UI/UX CONSULTANCY",
        filter_id: ["all", "business", "marketing", "designing", "development", "resources" ],
    },
    {
        id: 9,
        thumb_img: thumb_img_9,
        // avata_img: avata_img_9,
        // name: "GeraldineI",
        // job_title: "Founder & CEO Dulalix",
        title: <>End-to-end e-commerce solutions <br></br> for B2B and B2C.</>,
        // cls: "",
        // date: "April 12, 2023",
        // col: "",
        // delay: ".5s",
        slug: "commerce",
        category: "E-COMMERCE",
        filter_id: ["all", "business", "marketing", "designing", "development", "resources" ],
    },
    // {
    //     id: 10,
    //     thumb_img: thumb_img_10,
    //     avata_img: avata_img_10,
    //     name: "Helen M.",
    //     job_title: "Founder & CEO Dulalix",
    //     title: <>Project Management at <br /> Your fingertips.</>,
    //     cls: "",
    //     date: "April 24, 2023",
    //     col: "",
    //     delay: ".5s",
    //     category: "Designing",
    //     filter_id: ["all", "business", "marketing", "designing", "development", "resources" ],
    // },
    // {
    //     id: 11,
    //     thumb_img: thumb_img_11,
    //     avata_img: avata_img_11,
    //     name: "R. Jones",
    //     job_title: "Founder & CEO Dulalix",
    //     title: <>2023 Professional Year In <br /> Review</>,
    //     cls: "",
    //     date: "April 12, 2023",
    //     col: "",
    //     delay: ".5s",
    //     category: "Development",
    //     filter_id: ["all", "business", "marketing", "designing", "development", "resources" ],
    // },
    // {
    //     id: 12,
    //     thumb_img: thumb_img_12,
    //     avata_img: avata_img_12,
    //     name: "Frank P. Miller",
    //     job_title: "Founder & CEO Dulalix",
    //     title: <>How Chatbots Can Help You <br /> Drive More Sales</>,
    //     cls: "",
    //     date: "April 12, 2023",
    //     col: "",
    //     delay: ".5s",
    //     category: "Resources",
    //     filter_id: ["all", "business", "marketing", "designing", "development", "resources" ],
    // }, 

]
export default portfolio_blog
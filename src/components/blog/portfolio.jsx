import Image from 'next/image';
import Link from 'next/link';
import React, {useState} from 'react';
import portfolio_blog from '@/src/data/portfolio-blog';
import useMultipleAnime from '@/src/hooks/useMultipleAnime';
 
// data
const categories = [
   "All",
   ...new Set(portfolio_blog.map((item) => item.category)),
 ]; 

const Portfolio = () => {
   const {dataRef} = useMultipleAnime();
   const [activeCategory, setActiveCategory] = useState("All");
   const [items, setItems] = useState(portfolio_blog); 
  
    const filterItems = (cateItem) => {
      setActiveCategory(cateItem);
  
      if (cateItem === "All") {
        return setItems(portfolio_blog);
      } else {
        const findItems = portfolio_blog.filter((findItem) => {
          return findItem.category == cateItem;
        });
        setItems(findItems);
      }
    };

    return (
        <>
            <div className="portfolio blog-grid-inner pt-50">
               <div className="container">
                  {/* <div className="row justify-content-center">
                     <div className="col-lg-8">
                        <div className="tp-about__section-box text-center mb-40">
                           <h4 className="inner-section-subtitle">OVER 150K+ CLIENT</h4>
                           <h3 className="tp-section-title">Accomplish more, Together</h3>
                           <p>Softuch blog is your knowledge center for everything remote.</p>
                        </div>
                     </div>
                  </div> */}
                  {/* <div className="row">
                     <div className="col-xl-12">
                        <div className="portfolio-filter masonary-menu text-center mb-35">
                        {categories.map((cate, i) => (
                        <button
                           onClick={() => filterItems(cate)}
                           key={i}
                           className={`${cate === activeCategory ? "active" : ""}`}
                        >
                           <span>{cate}</span>
                        </button>
                        ))} 
                        </div>
                     </div>
                  </div> */}
                  <div className="row grid blog-grid-inner" ref={dataRef}>
               
                     {items.map((item, i ) => 
                        <div key={i} data-index={i} className="col-xl-4 col-lg-6 col-md-6 mb-30 grid-item cat1 cat4 cat3 cat5"style={{ paddingTop:'30px',paddingLeft:'15px' }}>
                           <div className="tp-blog-item" style={{ height:'414px' }}>
                              <div className="tp-blog-thumb fix">
                                 <Link href="/blog-details"><Image src={item.thumb_img} /></Link>
                              </div>
                              <div className="tp-blog-content">
                                 <div className="tp-blog-meta d-flex align-items-center">
                                    <div className="tp-blog-category category-color-1">
                                       <span>{item.category}</span>
                                    </div>
                                    {/* <div className="tp-blog-date">
                                       <span>{item.date}</span>
                                    </div> */}
                                 </div>
                                 <div className="tp-blog-title-box" style={{ fontSize: '20px', fontWeight:'bold',color:"#393939", lineHeight:'33px', letterSpace:'33px' }}>
                                    <Link className="tp-blog-title-sm" 
                                       href={`${item.slug}-service-details`}>{item.title}</Link>
                                 </div>
                                 <div className="tp-blog-author-info-box d-flex align-items-center">
                                    <div className="tp-blog-avata">
                                       <Image src={item.avata_img}  />
                                    </div>
                                    <div className="tp-blog-author-info">
                                       <h5>{item.name}</h5>
                                       <span>{item.job_title}</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        )
                     } 

                  </div>
               </div>
            </div>
        </>
    );
};

export default Portfolio;
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import portfolio_data from '@/src/data/portfolio-data';

const categories = [
    "All",
    ...new Set(portfolio_data.map((item) => item.category)),
];

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [items, setItems] = useState(portfolio_data);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    
    // const filterItems = (cateItem) => {
    //     setActiveCategory(cateItem);
    //     setCurrentIndex(0);
        
    //     if (cateItem === "All") {
    //         setItems(portfolio_data);
    //     } else {
    //         const findItems = portfolio_data.filter((findItem) => {
    //             return findItem.category === cateItem;
    //         });
    //         setItems(findItems);
    //     }
    // };

    useEffect(() => {
        let timer;
        if (!isHovered) { // Only run timer if not hovered
            timer = setInterval(() => {
                setCurrentIndex((prevIndex) => {
                    const nextIndex = prevIndex + 1;
                    return nextIndex > items.length - 3 ? 0 : nextIndex;
                });
            }, 3000);
        }

        return () => clearInterval(timer);
    }, [items.length, isHovered]); // Add isHovered to dependencies

    const visibleItems = items.slice(currentIndex, currentIndex + 3);
    
    if (visibleItems.length < 3) {
        const remainingItems = items.slice(0, 3 - visibleItems.length);
        visibleItems.push(...remainingItems);
    }

    return (
        <div className="portfolio-area" style={{ paddingTop:'74px' }}>
            <div className="container">
                <div className="row">
                    {/* <div className="col-xl-12">
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



                <div className="col-xl-12">
                    <div className="portfolio-heading" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                        <h4 className="section-title" style={{ fontSize: '50px', marginBottom: '10px' }}>
                            Our Latest Projects
                        </h4>
                        <p className="section-subtitle" style={{ textAlign: 'center', width: '80%', maxWidth: '600px', fontSize: '16px', color: '#6c757d' }}>
                            Discover our most recent innovations and creative solutions that showcase
                            our commitment to excellence and cutting-edge design.
                        </p>
                    </div>
                </div>

                </div>

                <div 
                    className="row grid"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {visibleItems.map((item, i) => (
                        <div 
                            key={`${item.id}-${i}`} 
                            className="col-xl-4 col-lg-4 col-md-4 grid-item"
                        >
                            <div className="inner-project-item mb-30" style={{ maxHeight: '522px'}}>
                                <div className="inner-project-img fix p-relative">
                                    <Image 
                                        className="w-100" 
                                        src={item.thumb_img} 
                                        alt="theme-pure" 
                                    />
                                    <div className="inner-project-brand">
                                        <Image 
                                            src={item.brand_logo} 
                                            alt="theme-pure" 
                                        />
                                    </div>
                                </div>
                                <div className="inner-project-content">
                                    <span className="inner-project-category-title">
                                        {item.job_title}
                                    </span>
                                    <h4 className="inner-project-title">
                                        <Link href="/project-details">{item.title}</Link>
                                    </h4>
                                    <p>{item.des}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
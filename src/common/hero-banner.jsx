import React, { useState } from 'react';

const HeroBanner = ({ bg_img, title = "Join", subtitle = "Us" }) => {
    const [offset, setOffset] = useState(0);

    // Handle scroll to update offset
    function handleScroll() {
        setOffset(window.scrollY);
    }

    // Add an event listener to update the offset on scroll
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <div className="row ">
                <div className="col-12">
                    <div
                        className="about-img about-img-height p-relative pt-0"
                        style={{
                            backgroundImage: `url(${bg_img})`,
                            // backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '100vh', // Full screen height
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'white',
                            textAlign: 'center',
                        }}
                    >
                        {/* Title and Subtitle */}
                        <div className="about-img-content">
                            <h1
                                style={{
                                    transform: `translateY(${offset * 0.9}px)`,
                                    fontSize: '4rem', // Adjust font size as needed
                                    lineHeight: '1.2', // Control spacing between lines
                                    margin: '0', // Remove default margin
                                    color: `white`,
                                    font:`geist`
                                }}
                                className="about-img-title"
                            >
                                {title} {subtitle}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;

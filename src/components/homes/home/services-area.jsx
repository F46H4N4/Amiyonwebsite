'use client'
import React, { useEffect, useRef } from 'react'

const VideoArea = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    // Add animation class after component mounts
    if (titleRef.current) {
      titleRef.current.classList.add('animation-active');
    }
  }, []);

  return (
    <>
      <div 
        ref={titleRef} 
        className="tp-service__section-box text-center tp-title-anim"
        style={{
          width: '100%',
          maxWidth: '806px',
          margin: '0 auto',
          padding: '20px',
        }}
      >
        <h2 className="section-title tp__title_anime">
          Welcome To Amiyon!
        </h2>
        <p className="section-text tp__text_anime">
          For over a decade, 
          we've been crafting innovative digital solutions that help businesses grow, 
          streamline operations, and achieve success. From websites to custom applications, 
          we combine creativity and technology to deliver impactful results tailored to your unique needs.
        </p>
      </div>

      <style jsx>{`
        .tp-title-anim {
          opacity: 0;
          transform: translateY(100px);
          transition: all 1s cubic-bezier(0.33, 1, 0.68, 1);
        }

        .tp-title-anim.animation-active {
          opacity: 1;
          transform: translateY(0);
        }

        .tp__title_anime {
          opacity: 0;
          transform: translateY(100px);
          transition: all 1s cubic-bezier(0.33, 1, 0.68, 1);
          transition-delay: 0.3s;
        }

        .animation-active .tp__title_anime {
          opacity: 1;
          transform: translateY(0);
        }

        .tp__text_anime {
          opacity: 0;
          transform: translateY(100px);
          transition: all 1s cubic-bezier(0.33, 1, 0.68, 1);
          transition-delay: 0.5s;
        }

        .animation-active .tp__text_anime {
          opacity: 1;
          transform: translateY(0);
        }

        /* Heading Styles */
        .section-title {
          font-size: 82.5px;
          font-weight: 400;
          line-height: 1.2;
          margin-bottom: 20px;
        }

        /* Paragraph Styles */
        .section-text {
          font-size: 20px;
          font-weight: 400;
          line-height: 1.5;
        }

        @media (max-width: 767px) {
          .section-title {
            font-size: 40px; // Adjust for mobile if needed
          }
          .section-text {
            font-size: 16px; // Adjust for mobile if needed
          }
        }
      `}</style>
    </>
  );
};

export default VideoArea;
'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const VideoArea = () => {
  const contentRef = useRef(null); // Reference for content div

  useEffect(() => {
    // Animation using GSAP
    const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.8 } });

    // Fade-in animation for the container
    tl.from('.centralized-content', { opacity: 0, duration: 1 });

    // Slide-up animation for content
    tl.fromTo(
      contentRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.3 }
    );
  }, []);

  return (
    <>
      <div
        className="centralized-content"
        style={{
          width: '100%',
          maxWidth: '750px',
          margin: '0 auto',
          textAlign: 'center',
          padding: '20px',
          paddingTop: '74px',
          paddingBottom :'74px'

        }}
      >
        <div
          ref={contentRef}
          className="content"
          style={{
            fontWeight: '200',
            fontSize: '34px',
            marginTop: '10px',
            lineHeight :'1.1',
            fontFamily: 'var(--tp-ff-heading)',
            color: 'var(--tp-common-black)',
          }}
        >
          Welcome to Amiyon, where we transform innovative ideas into powerful solutions.
          {/* Our commitment to excellence drives us to deliver cutting-edge technology that empowers your business to thrive in the digital age. */}
        </div>
      </div>
    </>
  );
};

export default VideoArea;

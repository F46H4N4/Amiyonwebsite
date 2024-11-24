'use client'
import React, { useState, useRef } from 'react'

const VideoArea = () => {
  return (
    <>
      <div
        className="centralized-content animate-fade-in"
        style={{
          width: '100%',
          maxWidth: '806px',
          margin: '0 auto',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        <div
          className="heading animate-slide-down"
          style={{
            fontWeight: '400',
            lineHeight: '1.2',
            fontSize: '82.5px',
          }}
        >
          Welcome To Amiyon!
        </div>

        <div
          className="content animate-slide-up"
          style={{
            fontWeight: '400',
            lineHeight: '1.5',
            fontSize: '20px',
            marginTop: '10px',
          }}
        >
          For over a decade, 
          we've been crafting innovative digital solutions that help businesses grow, 
          streamline operations, and achieve success. From websites to custom applications, 
          we combine creativity and technology to deliver impactful results tailored to your unique needs.
        </div>
      </div>

      <style jsx>{`
        .centralized-content .heading {
          font-size: 10vw;
        }
        .centralized-content .content {
          font-size: 4vw;
        }

        @media (min-width: 768px) {
          .centralized-content .heading {
            font-size: 82.5px;
          }
          .centralized-content .content {
            font-size: 20px;
          }
        }

        /* Animations */
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-slide-down {
          opacity: 0;
          animation: slideDown 0.8s ease-out forwards;
          animation-delay: 0.2s;
        }

        .animate-slide-up {
          opacity: 0;
          animation: slideUp 0.8s ease-out forwards;
          animation-delay: 0.5s;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideDown {
          from {
            transform: translateY(-50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default VideoArea;
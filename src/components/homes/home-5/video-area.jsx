// components/VideoArea/index.jsx
'use client'
import React, { useState, useRef, useContext } from 'react'
// import { X } from 'lucide-react'

// VideoPopup Component
const VideoPopup = ({ isVideoOpen, setIsVideoOpen, videoId }) => {
  return (
    <>
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <X size={24} />
            </button>
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// Main VideoArea Component
const VideoArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const videoEl = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

   return (
    <>
      <div
        className="centralized-content"
        style={{
          width: '100%', // Full width for smaller screens
          maxWidth: '806px', // Restrict width on larger screens
          margin: '0 auto', // Center the container horizontally
          textAlign: 'center', // Center text alignment
          padding: '20px', // Add padding for better spacing
        }}
      >
        <div
          className="heading"
          style={{
            // fontFamily: 'geist',
            fontWeight: '400',
            lineHeight: '1.2',
            fontSize: '82.5px', // Default font size for larger screens
          }}
        >
          Welcome To Amiyon!
        </div>
        <div
          className="content"
          style={{
            // fontFamily: 'geist',
            fontWeight: '400',
            lineHeight: '1.5',
            fontSize: '20px', // Default font size for larger screens
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
          font-size: 10vw; /* Adjust font size for smaller screens */
        }
        .centralized-content .content {
          font-size: 4vw; /* Adjust font size for smaller screens */
        }

        @media (min-width: 768px) {
          /* Larger screens */
          .centralized-content .heading {
            font-size: 82.5px; /* Fixed font size */
          }
          .centralized-content .content {
            font-size: 20px; /* Fixed font size */
          }
        }
      `}</style>
    </>
  );
};

export default VideoArea
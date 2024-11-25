import { useEffect, useRef } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Try to play the video
      videoRef.current.play().catch(error => {
        if (error.name === "NotAllowedError") {
          videoRef.current.muted = true; // Mute if autoplay isn't allowed
          videoRef.current.play().catch(e => console.error(e));
        }
      });

      // Add event listener to replay video after it ends
      const handleVideoEnd = () => {
        videoRef.current.play().catch(e => console.error(e));
      };

      videoRef.current.addEventListener('ended', handleVideoEnd);

      // Cleanup listener when component unmounts
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('ended', handleVideoEnd);
        }
      };
    }
  }, []);

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        className="responsive-video"
        autoPlay
        muted // Ensures autoplay compatibility
        playsInline
        loop
      >
        <source
          src="/assets/7021937_Connection_Cyberspace_1920x1080.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Styles */}
      <style jsx>{`
        .video-container {
          width: 90%; /* Default width */
          max-width: 1290px; /* Limits the maximum width */
          aspect-ratio: 21 / 10; /* Ensures the correct aspect ratio */
          border-radius: 30px;
          overflow: hidden; /* Ensures rounded corners apply */
          margin: 20px auto; /* Centers the container */
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .responsive-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .video-container {
            border-radius: 20px; /* Smaller radius for smaller screens */
          }
        }

        @media (max-width: 480px) {
          .video-container {
            width: 100%; /* Utilize full width on very small screens */
            border-radius: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default VideoPlayer;

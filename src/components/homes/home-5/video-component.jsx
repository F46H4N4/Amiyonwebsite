import { useEffect, useRef } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Initial play
      videoRef.current.play().catch(error => {
        if (error.name === "NotAllowedError") {
          videoRef.current.muted = true;
          videoRef.current.play().catch(e => console.log(e));
        }
      });

      // Add ended event listener to replay
      const handleVideoEnd = () => {
        videoRef.current.play().catch(e => console.log(e));
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
    <div style={{
      height: '587px',
      width: '100%',

    }}>
      <video 
        ref={videoRef}
        style={{
          width: '100%',
          height: '587px',
          objectFit: 'cover',
          paddingTop: '74px',
          paddingBottom: '74px'

        }}
        // controls
        autoPlay
        // muted
        playsInline
        loop // Added loop attribute
      >
        <source 
          src="/assets/5405013_Coll_wavebreak_Icon_1280x720.mp4" 
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
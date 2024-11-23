import React from 'react';
// import ReactPlayer from 'react-player';

const VideoComponent = () => {
  return (
    <div style={{ maxWidth: "100%", textAlign: "center" }}>
      <ReactPlayer 
        url="https://videocdn.cdnpk.net/videos/73b2d669-e98b-5002-ac5d-b56887129776/horizontal/previews/clear/large.mp4?token=exp=1732354351~hmac=b55c956c200853c193c149c25c0a92f8cd097bd85bd6aecd0f0eee6f9a33c941" // URL of the video (can be YouTube, Vimeo, or a file)
        playing={false}  // Set to true to auto-play
        controls={true}  // Shows default controls
        width="80%"      // Adjust the width as needed
        height="auto"    // Maintain aspect ratio
        style={{ borderRadius: "8px" }} // Optional styling
      />
    </div>
  );
};

export default VideoComponent;

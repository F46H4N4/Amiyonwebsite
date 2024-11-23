import React from 'react';
import VideoComponent from './components/VideoComponent';

const App = () => {
  return (
    <div>
      <h1>My Video Player</h1>
      <VideoComponent
        src="https://www.w3schools.com/html/mov_bbb.mp4" // Replace with your video source
        controls={true}  // Show controls (Play/Pause, Volume)
        autoplay={false} // Video will not autoplay
        loop={true}      // Video will loop after finishing
        muted={false}    // Video will not be muted
        poster="https://www.w3schools.com/html/img_girl.jpg" // Optional poster image before the video starts
      />
    </div>
  );
};

export default App;

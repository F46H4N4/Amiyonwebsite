import { AppContext } from "@/src/context/ContextProvider";
import VideoPopup from "@/src/modals/video-popup";
import React, { useState, useRef, useContext } from "react";

const VideoArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoEl = useRef(null);

  const { handleMouseEnter = () => {}, handleMouseLeave = () => {} } = useContext(AppContext) || {};

  return (
    <>
      <div className="tp-vedio-area p-relative pt-120">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="tp-vedio-sction-box pb-70">
                <h4 className="tp-vedio-title">
                  The best customer relationship <br />
                  management platform for just <br />
                  about everything
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="tp-vedio-wrap">
                <a
                  className="popup-video tp-cursor-point-area"
                  onClick={() => setIsVideoOpen(true)}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <video
                    className="play-video"
                    id="myVideo"
                    autoPlay
                    loop
                    playsInline
                    muted
                    alt="All the devices"
                    src="https://videocdn.cdnpk.net/videos/8e9b0e80-9c40-570a-9ecd-bdddac0f1508/horizontal/previews/clear/large.mp4?token=exp=1732353129~hmac=be6dc24d6db6b839c529e0496673019b33cf48035c74e2ed9a89665fd93ec544"
                    ref={videoEl}
                  ></video>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"_RpLvsA1SNM"}
      />
      {/* video modal end */}
    </>
  );
};

export default VideoArea;

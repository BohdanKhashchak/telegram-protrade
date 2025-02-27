import React from "react";
import {
  VideoPlayer as GraphlandVideoPlayer,
  VideoPlayerProps,
} from "@graphland/react-video-player";

const CustomVideoPlayer = () => {
  const videoSources = [
    {
      src: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      type: "video/mp4",
    },
  ];

  const videoProps = {
    theme: "city", // 'city', 'fantasy', 'forest', 'sea'
    autoPlay: false,
    loop: false,
    sources: videoSources,
    controlBar: {
      skipButtons: {
        forward: 5,
        backward: 5,
      },
    },
    playbackRates: [0.5, 1, 1.5, 2],
    disablePictureInPicture: false,
    onReady: () => {
      console.log("Video player is ready!");
    },
  };

  return (
    <div
      style={{
        width: "100%",
        margin: 0,
        overflow: "hidden",
        borderRadius: "24px",
      }}
    >
      <GraphlandVideoPlayer
        {...videoProps}
        style={{ width: "100%", height: "100%", borderRadius: "24px" }}
      />
    </div>
  );
};

export default CustomVideoPlayer;

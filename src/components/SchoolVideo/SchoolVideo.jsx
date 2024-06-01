import React from "react";
import videofile from "/public/images/video.mp4";

const SchoolVideo = () => {
  return (
    <div>
      <video
        src={videofile}
        className="w-[1300px] h-[450px] mx-auto mt-20 mb-20"
        controls
      ></video>
    </div>
  );
};

export default SchoolVideo;

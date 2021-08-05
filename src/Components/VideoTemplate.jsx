import React from "react";
import { Link } from "react-router-dom";

import FakeVideos from "./FakeVideos";

function VideoTemplate({ navigation }) {
  const changeclass = () => {
    if (!navigation) {
      return "VideosWrapper";
    } else {
      return "VideosWrapper videosslide";
    }
  };

  return (
    <>
      <div className={changeclass()}>
        {FakeVideos.map((e) => {
          return (
            <Link to="/video" className="single_video_item" key={e.key}>
              <div className="videoItem">
                <div className="thumbnail">
                  <img src={e.image} alt="" />
                </div>
                <div className="logo-and-details">
                  <div className="channel-logo">
                    <img src={e.image} alt="" />
                  </div>
                  <div className="title-details">
                    <div className="video-title">{e.title}</div>
                    <div className="channel-Name">{e.channelName}</div>
                    <div className="views-time">
                      <div className="views">{e.views}</div>
                      <div className="upload-time">{e.time}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default VideoTemplate;

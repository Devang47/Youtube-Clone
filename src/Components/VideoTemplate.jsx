import React from "react";
import { Link } from "react-router-dom";

import videoInfo from "./VideoInfo";

function VideoTemplate({ navigation }) {
  const [{ Thumbnail, ChannelLogo, Title, channelName, views, uploadTime }] =
    videoInfo;

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
        {videoInfo.map(() => {
          return (
            <Link to="/video" className='single_video_item'>
              <div className="videoItem">
                <div className="thumbnail">
                  <img src={Thumbnail} alt="" />
                </div>
                <div className="logo-and-details">
                  <div className="channel-logo">
                    <img src={ChannelLogo} alt="" />
                  </div>
                  <div className="title-details">
                    <div className="video-title">{Title}</div>
                    <div className="channel-Name">{channelName}</div>
                    <div className="views-time">
                      <div className="views">{views} views</div>
                      <div className="upload-time">{uploadTime}</div>
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

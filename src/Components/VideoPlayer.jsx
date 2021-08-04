import React, { useState } from "react";

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SubtitlesIcon from "@material-ui/icons/Subtitles";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import FlagIcon from "@material-ui/icons/Flag";

function VideoPlayer() {
  const [combined, setCombined] = useState({
    hiddenMenu: false,
  });

  return (
    <section className="video_player">
      <section className="left">
        <div className="video"></div>
        <div className="video_details">
          {/* <div className="tags">#webdev #js #100SecondsOfCode</div> */}
          <div className="title_date">
            <h1>Avengers Infinity War with Ashish Chanchlani</h1>
            <div className="date">157,076 views Mar 15, 2021</div>
          </div>
          <div className="details_right">
            <button className="likes">
              <ThumbUpAltIcon /> 123
            </button>
            <button className="dislikes">
              <ThumbDownIcon /> 123
            </button>
            <button className="share">
              <svg
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <g>
                  <path
                    d="M14 9V3L22 12L14 21V15C8.44 15 4.78 17.03 2 21C3.11 15.33 6.22 10.13 14 9Z"
                    class="style-scope yt-icon"
                  ></path>
                </g>
              </svg>
              SHARE
            </button>
            <button className="save_playlist">
              <PlaylistAddIcon />
              SAVE
            </button>
            <button className="more">
              <MoreHorizIcon />
            </button>
            <div className="Menu">
              <button className="item">
                <FlagIcon />
                Report
              </button>
              <button className="item">
                <SubtitlesIcon />
                Open Transcript
              </button>
            </div>
          </div>
        </div>
        <div className="channel_details">
          <div className="channel_thumb">
            <img src="" alt="" />
          </div>
          <div className="channel_name">
            <h2>Lorem ipsum</h2>
            <span className="subscribers">123K</span>
          </div>
          <div className="subscribe_btn">Subscribe</div>
          <div className="notifications">
            <NotificationsNoneIcon />
          </div>
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quam in
          perspiciatis amet dolorum dolore officiis asperiores cumque debitis
          quasi quod, voluptatem, dignissimos, magnam quae. Praesentium quia
          doloribus ea ex. Want to build your own peer-to-peer video chat app?
          WebRTC is a technology that creates a realtime connection between
          browsers where users can exchange audio/video streams
          https://fireship.io/lessons/webrtc-fi... 00:00 WebRTC Explained 02:01
          Build your own Video Chat 3:37 Code setup 04:34 Peer Connection &
          Webcam 06:49 Offer Signaling 09:45 Answer Signaling Source Code
          https://github.com/fireship-io/webrtc... Useful Resources WebRTC Docs
          https://webrtc.org/ Codelab https://webrtc.org/getting-started/fi...
          Signaling https://developer.mozilla.org/en-US/d... #webdev #js
          #100SecondsOfCode Install the quiz app 🤓 iOS
          https://itunes.apple.com/us/app/fires... Android
          https://play.google.com/store/apps/de... Upgrade to Fireship PRO at
          https://fireship.io/pro Use code lORhwXd2 for 25% off your first
          payment. My VS Code Theme - Atom One Dark - vscode-icons - Fira Code
          Font
        </div>
      </section>

      <section className="right"></section>
    </section>
  );
}

export default VideoPlayer;

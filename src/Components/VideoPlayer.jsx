import React, { useState } from "react";

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SubtitlesIcon from "@material-ui/icons/Subtitles";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import FlagIcon from "@material-ui/icons/Flag";
import Button from "@material-ui/core/Button";

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
            <div className="date">
              157,076 views <span className="dot"></span> Mar 15, 2021
            </div>
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
                    className="style-scope yt-icon"
                  ></path>
                </g>
              </svg>
              SHARE
            </button>
            <button className="save_playlist">
              <PlaylistAddIcon />
              SAVE
            </button>
            <button
              className="more"
              onClick={(e) =>
                setCombined({ ...combined, hiddenMenu: !combined.hiddenMenu })
              }
            >
              <MoreHorizIcon />
            </button>
            {combined.hiddenMenu && (
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
            )}
          </div>
        </div>
        <div className="channel_details">
          <div className="channel_thumb">
            <img src="" alt="" />
          </div>
          <div className="channel_name">
            <h2>
              ashish chanchlani vines <CheckCircleIcon />
            </h2>
            <span className="subscribers">25.7M subscribers</span>
          </div>
          <div className="subscribe_btn_container">
            {/* <Button variant="contained" color="red"  className='subscribe_btn'>
              Subscribe
            </Button> */}
            <Button variant="contained" className="subscribed_btn">
              Subscribed
            </Button>
          </div>
          <div className="notifications">
            <NotificationsNoneIcon />
          </div>
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          <a href="http://localhost:3000/video">
            {" "}
            https://www.youtube.com/watch?v=xh1ROLEDyP4&t=242s
          </a>
          <br />
          <br />
          alias quidem aliquam esse ea, temporibus ipsam inventore itaque error
          <br />
          <br />
          provident autem libero amet? Non, reprehenderit. Aperiam voluptatibus
          <br />
          perspiciatis reiciendis deserunt!
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit non
          <br />
          <br />
          perferendis ad provident dolorem laboriosam odio amet et dicta, facere
          <br />
          repellat nobis similique assumenda, iusto quidem corporis a molestiae
          iste!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repellat
          <br />
          iste sequi sed minus adipisci totam fuga officia soluta laborum sint
          <br />
          repudiandae, ullam officiis aliquid eveniet, quisquam sapiente debitis
          <br />
          cum.
          <br />
        </div>
      </section>

      <section className="right"></section>
    </section>
  );
}

export default VideoPlayer;

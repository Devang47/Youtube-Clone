import React, { useState } from "react";
import { Link } from "react-router-dom";
import FakeVideos from "./FakeVideos";


import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SubtitlesIcon from "@material-ui/icons/Subtitles";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import FlagIcon from "@material-ui/icons/Flag";
import Button from "@material-ui/core/Button";
import SortIcon from "@material-ui/icons/Sort";

import TestVideo from "./testing.mp4";
import Poster from "./poster.png";

import Image1 from "../Images/placeholder-image-1.jpg";
import Image2 from "../Images/placeholder-image-2.jpg";
import Image3 from "../Images/placeholder-image-3.jpg";
import Image4 from "../Images/placeholder-image-4.jpg";

const comments = [
  {
    avatar: Image1,
    name: "Golda Streich",
    time: "2",
    likes: "1",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,",
  },
  {
    avatar: Image2,
    name: "Gaston Murphy DDS",
    time: "12",
    likes: "21",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis convallis tellus id interdum velit laoreet. Diam in arcu cursus euismod quis viverra nibh cras pulvinar. Pellentesque sit amet porttitor eget dolor morbi non arcu. ",
  },
  {
    avatar: Image4,
    name: "Rakesh Yadav",
    time: "10",
    likes: "13",
    message:
      "Mollis aliquam ut porttitor leo a diam. Ut tristique et egestas quis ipsum. Aliquet bibendum enim facilisis gravida. Sed risus pretium quam vulputate dignissim suspendisse in.",
  },
  {
    avatar: Image3,
    name: "Golda Streich",
    time: "5",
    likes: "12",
    message:
      "Duis at consectetur lorem donec massa sapien faucibus et. Faucibus a pellentesque sit amet porttitor eget dolor morbi.",
  },
  {
    avatar: Image1,
    name: "Hariom Vlogs",
    time: "2",
    likes: "0",
    message:
      "Et odio pellentesque diam volutpat commodo sed egestas. Ac turpis egestas integer eget. ",
  },
  {
    avatar: Image2,
    name: "Saadhna Singh",
    time: "7",
    likes: "1",
    message:
      "Nibh mauris cursus mattis molestie. Vulputate eu scelerisque felis imperdiet proin. Sagittis nisl rhoncus mattis rhoncus urna neque.",
  },
  {
    avatar: Image4,
    name: "Stephan Bijzitte",
    time: "17",
    likes: "10",
    message:
      "Habitant morbi tristique senectus et netus et malesuada. Libero volutpat sed cras ornare arcu dui vivamus arcu. Sit amet justo donec enim diam. ",
  },
];

function VideoPlayer() {
  const [commentData, setCommentData] = useState(comments);

  const [combined, setCombined] = useState({
    hiddenMenu: false,
    addCommentData: "",
    subscribed: false,
    liked: false,
  });

  const addComment = (e) => {
    e.preventDefault();
    setCommentData(
      [
        ...commentData,
        {
          avatar: Image1,
          name: "Destin Roberts",
          time: "0",
          likes: "0",
          message: combined.addCommentData,
        },
      ].reverse()
    );
    clearCommentInput();
  };

  const clearCommentInput = () => {
    setCombined({ ...combined, addCommentData: "" });
  };

  const toggleSubscribe = () => {
    setCombined({ ...combined, subscribed: !combined.subscribed });
  };

  const likeVideo = () => {
    setCombined({ ...combined, liked: !combined.liked });
  };

  return (
    <section className="video_player">
      <section className="left">
        <div className="video">
          <video
            id="my-video"
            class="video-js"
            controls
            preload="auto"
            poster={Poster}
            data-setup="{}"
          >
            <source src={TestVideo} type="video/mp4" />
            <p class="vjs-no-js">
              To view this video please enable JavaScript, and consider
              upgrading to a web browser that
              <a
                href="https://videojs.com/html5-video-support/"
                target="_blank"
                without
                rel="noreferrer"
              >
                supports HTML5 video
              </a>
            </p>
          </video>
        </div>
        <div className="video_details">
          <div className="tags">#OfficialMusicVideo #SubUrban #Cradles</div>
          <div className="title_date">
            <h1>Sub Urban - Cradles [Official Music Video]</h1>
            <div className="date">
              37,643 views <span className="dot"></span> Aug 4, 2021
            </div>
          </div>
          <div
            className={
              combined.liked ? "blue  details_right " : "details_right"
            }
          >
            <button className="likes">
              <ThumbUpAltIcon
                onClick={likeVideo}
                className={combined.liked && "blue"}
              />
              123
            </button>
            <button className="dislikes">
              <ThumbDownIcon /> 0
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
        <section className="channel_details">
          <div className="channel_thumb">
            <img src="" alt="" />
          </div>
          <div className="channel_name">
            <h2>
              Sub Urban
              <CheckCircleIcon />
            </h2>
            <span className="subscribers">25.7M subscribers</span>
          </div>
          <div className="subscribe_btn_container">
            {combined.subscribed ? (
              <Button
                variant="contained"
                className="subscribed_btn"
                onClick={toggleSubscribe}
              >
                Subscribed
              </Button>
            ) : (
              <Button
                variant="contained"
                color="red"
                className="subscribe_btn"
                onClick={toggleSubscribe}
              >
                Subscribe
              </Button>
            )}
          </div>
          <div className="notifications">
            <NotificationsNoneIcon />
          </div>
        </section>
        <section className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          <a href="http://localhost:3000/video">
            https://www.youtube.com/watch?v=xh1ROLEDyP4&t=242s
          </a>
          <br />
          <br />
          alias quidem aliquam esse ea, temporibus ipsam inventore itaque error
          provident autem libero amet? Non, reprehenderit. Aperiam voluptatibus
          perspiciatis reiciendis deserunt! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Sit non
          <br />
          <br />
          perferendis ad provident dolorem laboriosam odio amet et dicta, facere
          <br />
          repellat nobis similique assumenda, iusto quidem corporis a molestiae
          iste! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          repellat
          <br />
          <br />
          iste sequi sed minus adipisci totam fuga officia soluta laborum sint
          repudiandae, ullam officiis aliquid eveniet, quisquam sapiente debitis
          <br />
          cum.
          <br />
        </section>
        <section className="comments">
          <div className="count_wrapper">
            <div className="comments_count">{commentData.length} Comments </div>
            <Button className="sort" variant="contained">
              <SortIcon />
              SORT BY
            </Button>
          </div>
          <div className="add_comment">
            <form onSubmit={(e) => addComment(e)}>
              <div className="avatar">
                <img src="" alt="" />
              </div>
              <input
                id="standard-basic"
                placeholder="Type something..."
                className="comment_input"
                value={combined.addCommentData}
                onChange={(e) =>
                  setCombined({ ...combined, addCommentData: e.target.value })
                }
              />
              <div className="action_btns">
                <Button
                  className="cancel"
                  variant="contained"
                  onClick={clearCommentInput}
                >
                  Cancel
                </Button>
                {combined.addCommentData ? (
                  <Button
                    variant="contained"
                    className="push_comment"
                    color="primary"
                    onClick={(e) => addComment(e)}
                  >
                    Comment
                  </Button>
                ) : (
                  <Button variant="contained" disabled className="disabled">
                    Comment
                  </Button>
                )}
              </div>
            </form>
          </div>

          <div className="all_comments">
            {commentData.map((e) => (
              <div className="comment">
                <div className="flex">
                  <div className="avatar">
                    <img src={e.avatar} alt="" />
                  </div>
                  <div className="right">
                    <div className="name_time">
                      <span className="username">{e.name}</span>
                      <span className="time">{e.time} hours ago</span>
                    </div>
                    <div className="comment_body">{e.message}</div>
                  </div>
                </div>
                <div className="action_btns">
                  <button className="likes">
                    <ThumbUpAltIcon onClick={() => (e.likes += 1)} />
                  </button>
                  <span className="likes_count">{e.likes}</span>
                  <button className="dislikes">
                    <ThumbDownIcon />
                  </button>
                  <span className="reply">
                    <Button className="cancel" variant="contained">
                      REPLY
                    </Button>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>

      <section className="right_section">
        <div className="suggestions">
          {FakeVideos.map((e) => {
            return (
              <Link key={e.key}>
                <div className="item" variant="contained">
                  <div className="thumbnail">
                    <img src={e.image} alt="" />z
                  </div>
                  <div className="details">
                    <div className="title">{e.title}</div>
                    <div className="channel">{e.channelName}</div>
                    <div className="views_date">
                      {e.views} <span className="dot"></span>
                      {e.time}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </section>
  );
}

export default VideoPlayer;

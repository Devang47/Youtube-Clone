import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Brightness1Icon from "@material-ui/icons/Brightness1";

import { Link } from "react-router-dom";

function Fullsidenav({ userloggedin, changelogin }) {
  return (
    <>
      <div className="sidenav-wrapper">
        <div className="item" id="item1">
          <Link to="#">
            <HomeIcon className="svg" />
            Home
          </Link>
        </div>
        <div className="item" id="item2">
          <Link to="#">
            <ExploreIcon className="svg" />
            Explore
          </Link>
        </div>
        <div className="item" id="item3">
          <Link to="#">
            <SubscriptionsIcon className="svg" /> Subscriptions
          </Link>
        </div>
        <hr />
        <div className="item" id="item4">
          <Link to="#">
            <VideoLibraryIcon className="svg" />
            Library
          </Link>
        </div>
        <div className="item" id="item5">
          <Link to="#">
            <HistoryIcon className="svg" /> History
          </Link>
        </div>
        <div className="item" id="item5">
          <Link to="#">
            <Brightness1Icon className="svg" /> Your videos
          </Link>
        </div>
        <div className="item" id="item5">
          <Link to="#">
            <Brightness1Icon className="svg" /> Watch later
          </Link>
        </div>
        <div className="item" id="item5">
          <Link to="#">
            <Brightness1Icon className="svg" /> Liked videos
          </Link>
        </div>
        <div className="item" id="item5">
          <Link to="#">
            <Brightness1Icon className="svg" /> Gaming
          </Link>
        </div>
        <hr />
        {!userloggedin ? (
          <>
            <div className="sign-in-segment">
              Sign in to like videos, comment, and subscribe.
              <div className="sign-in">
                <Link
                  href="#"
                  onClick={() => {
                    changelogin(!userloggedin);
                  }}
                >
                  <button>
                    <AccountCircleIcon className="nav-item nav-item4" />
                    Sign in
                  </button>
                </Link>
              </div>
            </div>
            <hr />
          </>
        ) : (
          <div></div>
        )}
        <div className="best-of-yt">
          <div className="yt-best-section-head">Best of YouTube</div>
          <div className="items">
            <div className="item" id="item1">
              <Link to="#">
                <div className="circle"></div> Placeholder
              </Link>
            </div>
            <div className="item" id="item2">
              <Link to="#">
                <div className="circle"></div> Placeholder
              </Link>
            </div>
            <div className="item" id="item3">
              <Link to="#">
                <div className="circle"></div> Placeholder
              </Link>
            </div>
            <div className="item" id="item4">
              <Link to="#">
                <div className="circle"></div> Placeholder
              </Link>
            </div>
            <div className="item" id="item5">
              <Link to="#">
                <div className="circle"></div> Placeholder
              </Link>
            </div>
            <div className="item" id="item6">
              <Link to="#">
                <div className="circle"></div> Placeholder
              </Link>
            </div>
            <div className="item" id="item7">
              <Link to="#">
                <div className="circle"></div> Placeholder
              </Link>
            </div>
            <div className="item" id="item8">
              <Link to="#">
                <div className="circle"></div> Placeholder
              </Link>
            </div>
            <div className="item" id="item9">
              <Link to="#">
                <div className="circle"></div> Placeholder
              </Link>
            </div>
            <div className="item" id="item10">
              <Link to="#">
                <div className="circle"></div> Placeholder
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <div className="about">
          <div className="made-by">
            Created by-
            <div className="name">Devang Saklani</div>
            <span> A freelancer from INDIA</span>
          </div>
          <Link className="Contact-Me" href="https://devang-saklani.web.app/">
            Contact me
          </Link>
          <hr />
        </div>
        <div className="copyright">
          &#169; Devang Saklani | {new Date().getFullYear()}
        </div>
      </div>
    </>
  );
}

export default Fullsidenav;

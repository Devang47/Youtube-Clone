import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../Images/yt_logo_rgb_dark.png";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import { useHistory } from "react-router";

function Navbar({
  userloggedin,
  changelogin,
  changeSideNavbar,
  SideNavbarStatus,
}) {
  const history = useHistory();

  const [query, Setquery] = useState("");

  const search = (e) => {
    e.preventDefault();
    // Simulate a mouse click:
    window.location.href = `https://www.youtube.com/results?search_query=${query}`;

    console.log("helllpwoeor");
  };
  return (
    <>
      <div className="className='nav-item'">
        <div className="navbar">
          <div className="left-items">
            <div
              className="menu-icon"
              onClick={() => changeSideNavbar(!SideNavbarStatus)}
            >
              <Link to="#">
                <MenuIcon />
              </Link>
            </div>
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </div>
          </div>
          <div className="middle-items">
            <form onSubmit={search}>
              <input
                type="text"
                className="search-box"
                placeholder="Search"
                value={query}
                onChange={(e) => Setquery(e.target.value)}
              />
              <button className="search-btn" type="submit" label="search">
                <SearchIcon className="searchsvg" />
              </button>
            </form>
            <div className="voice-icon">
              <Link to="#">
                <MicIcon className="voice-icon-inner" />
              </Link>
            </div>
          </div>
          <div className="right-items">
            {userloggedin ? (
              <>
                <div className="add-video">
                  <Link to="#">
                    <VideoCallIcon className="nav-item" />
                  </Link>
                </div>
                <div className="yt-apps">
                  <Link to="#">
                    <AppsIcon className="nav-item" />
                  </Link>
                </div>
                <div className="notifications">
                  <Link to="#">
                    <NotificationsIcon className="nav-item" />
                  </Link>
                </div>
                <div className="user-image">
                  <Link
                    href="#"
                    onClick={() => {
                      changelogin(!userloggedin);
                    }}
                  >
                    <AccountCircleIcon className="nav-item nav-item4" />
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="yt-apps">
                  <Link to="#">
                    <AppsIcon className="nav-item" />
                  </Link>
                </div>
                <div className="three-dots">
                  <MoreVertIcon className="nav-item more-icon" />
                </div>
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
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

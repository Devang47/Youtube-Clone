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

function Navbar({
  userloggedin,
  changelogin,
  changeSideNavbar,
  SideNavbarStatus,
}) {
  const [query, Setquery] = useState("");

  const search = () => {};
  return (
    <>
      <div className="className='nav-item'">
        <div className="navbar">
          <div className="left-items">
            <div
              className="menu-icon"
              onClick={() => changeSideNavbar(!SideNavbarStatus)}
            >
              <Link href="#">
                <MenuIcon />
              </Link>
            </div>
            <div className="logo">
              <Link href="#">
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
                autoComplete="off"
                value={query}
                onChange={(e) => Setquery(e.target.value)}
              />
              <Link href="#" label="search">
                <button className="search-btn" label="search">
                  <SearchIcon className="searchsvg" />
                </button>
              </Link>
            </form>
            <div className="voice-icon">
              <Link href="#">
                <MicIcon className="voice-icon-inner" />
              </Link>
            </div>
          </div>
          <div className="right-items">
            {userloggedin ? (
              <>
                <div className="add-video">
                  <Link href="#">
                    <VideoCallIcon className="nav-item" />
                  </Link>
                </div>
                <div className="yt-apps">
                  <Link href="#">
                    <AppsIcon className="nav-item" />
                  </Link>
                </div>
                <div className="notifications">
                  <Link href="#">
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
                  <Link href="#">
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

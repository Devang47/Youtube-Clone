import React from "react";
import { Link } from "react-router-dom";

import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

function Sidenavbar() {
  return (
    <>
      <div className="sidebar">
        <div className="menu-items" id="item1">
          <Link to="/">
            <HomeIcon className="sidenavbar-icons" />
            Home
          </Link>
        </div>
        <div className="menu-items" id="item2">
          <Link to="/">
            <ExploreIcon className="sidenavbar-icons" />
            Explore
          </Link>
        </div>
        <div className="menu-items" id="item3">
          <Link to="/">
            <SubscriptionsIcon className="sidenavbar-icons" />
            Subscriptions
          </Link>
        </div>
        <div className="menu-items" id="item4">
          <Link to="/">
            <VideoLibraryIcon className="sidenavbar-icons" />
            Library
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidenavbar;

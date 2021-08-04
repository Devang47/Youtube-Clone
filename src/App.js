import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Fullsidenav from "./Components/fullsidenav";
import Littlenav from "./Components/littlenav";
import Navbar from "./Components/Navbar";
import Sidenavbar from "./Components/sidenavbar";
import VideoTemplate from "./Components/VideoTemplate";
import VideoPlayer from "./Components/VideoPlayer";

import "./CSS/Main-styles.css";

function App() {
  const [navStatus, setNavStatus] = useState(false);
  const [login, setLogin] = useState(true);
  const [navigation, setNavigation] = useState("Home");

  return (
    <Router>
      <Navbar
        userloggedin={login}
        changelogin={setLogin}
        changeSideNavbar={setNavStatus}
        SideNavbarStatus={navStatus}
      />

      {navStatus ? (
        <Fullsidenav
          userloggedin={login}
          changelogin={setLogin}
          location={navigation}
          setLocation={setNavigation}
          />
          ) : (
        <Sidenavbar
        userloggedin={login}
        location={navigation}
        setLocation={setNavigation}
        />
        )}
      <Switch>
        <Route path="/" exact>
        <Littlenav navigation={navStatus} />
          <VideoTemplate userloggedin={login} navigation={navStatus} />
        </Route>
        <Route path="/video" exact>
          <VideoPlayer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

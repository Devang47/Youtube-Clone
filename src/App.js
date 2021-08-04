import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Fullsidenav from "./Components/fullsidenav";
import Littlenav from "./Components/littlenav";
import Navbar from "./Components/Navbar";
import Sidenavbar from "./Components/sidenavbar";
import VideoTemplate from "./Components/VideoTemplate";

import "./CSS/Main-styles.scss";

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

      <Littlenav navigation={navStatus} />
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
      <Router>
        <Route></Route>
      </Router>
      <VideoTemplate userloggedin={login} navigation={navStatus} />
    </Router>
  );
}

export default App;

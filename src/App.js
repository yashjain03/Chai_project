import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import HomeScreenBeforeLogin from "./components/HomeScreenBeforeLogin";
import Art from "./pages/Art";
import { useState } from 'react';
import Fashion from "./pages/Fashion";
import Medical from "./pages/Medical";
import Ellipse3 from "./pages/Ellipse3";
import Ellipse4 from "./pages/Ellipse4";
import Ellipse5 from "./pages/Ellipse5";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|home-screen-before-login)">
          <HomeScreenBeforeLogin {...homeScreenBeforeLoginData} />
        </Route>
        <Route path="/art" component={Art}/>
        <Route path="/fashion" component={Fashion} />
        <Route path="/medical" component={Medical} />
        <Route path="/jazz" component={Ellipse3} />
        <Route path="/opera" component={Ellipse4} />
        <Route path="/classical_music" component={Ellipse5} />

      </Switch>
    </Router>
  );
}

export default App;
const logInData = {
    children: "Log In",
};



const homeScreenBeforeLoginData = {
    whatsHappeningIn: "What’s happening in :",
    searchLocation: "Search location..",
    anytime: "Anytime",
    title: "Exhibitions",
    concerts: "Concerts",
    fashion: "Fashion",
    medical: "Medical",
    art: "Art",
    classicalMusic: "Classical Music",
    place: "Opera",
    jazz: "Jazz",
    logInProps: logInData,
};
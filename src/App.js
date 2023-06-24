import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import HomeScreenBeforeLogin from "./components/HomeScreenBeforeLogin";
import { useState } from 'react';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|home-screen-before-login)">
          <HomeScreenBeforeLogin {...homeScreenBeforeLoginData} />
        </Route>
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
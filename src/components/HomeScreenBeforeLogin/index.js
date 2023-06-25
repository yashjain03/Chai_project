import React, { useState } from "react";
import LogIn from "../LogIn";
import Rectangle4 from "../Rectangle4";
import Fashion from "../Fashion";
import Medical from "../Medical";
import Art from "../Art";
import Ellipse3 from "../Ellipse3";
import Ellipse4 from "../Ellipse4";
import Ellipse5 from "../Ellipse5";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-min.module.css';
import 'react-datepicker/dist/react-datepicker.module.css';
import "./HomeScreenBeforeLogin.css";

function HomeScreenBeforeLogin(props) {
  const {
    whatsHappeningIn,
    searchLocation,
    anytime,
    title,
    concerts,
    fashion,
    medical,
    art,
    classicalMusic,
    place,
    jazz,
    logInProps
  } = props;
  const [SelectedDate, SetSelectedDate] = useState(null);

  return React.createElement(
    "div",
    { className: "container-center-horizontal" },
    React.createElement(
      "div",
      { className: "home-screen-before-login screen" },
      React.createElement(
        "div",
        { className: "overlap-group1" },
        React.createElement("div", { className: "nav_bar" }),
        React.createElement(
          "div",
          { className: "whats-happening-in inter-normal-comet-48px" },
          whatsHappeningIn
        ),
        React.createElement(
          LogIn,
          null,
          logInProps.children
        )
      ),
      React.createElement(
        "div",
        { className: "overlap-group2" },
        React.createElement(Rectangle4, null),
        React.createElement(
          "div",
          { className: "search-location inter-normal-martini-48px" },
          searchLocation
        )
      ),
      React.createElement(
        "div",
        { className: "overlap-group3" },
        React.createElement(Rectangle4, null),
        React.createElement(
          "div",
          { className: "anytime inter-normal-martini-48px" },
          anytime,
          React.createElement(DatePicker, {
            selected: SelectedDate,
            onChange: date => SetSelectedDate(date) //only when value has changed
            , minDate: new Date()
          })
        )
      ),
      React.createElement(
        "div",
        { className: "overlap-group" },
        React.createElement("div", { className: "rectangle-3" }),
        React.createElement(Fashion, null),
        React.createElement(Medical, null),
        React.createElement(Art, null),
        React.createElement(Ellipse3, null),
        React.createElement(Ellipse4, null),
        React.createElement(Ellipse5, null),
        React.createElement(
          "h1",
          { className: "title jimnightshade-normal-comet-64px" },
          title
        ),
        React.createElement(
          "div",
          { className: "concerts jimnightshade-normal-comet-64px" },
          concerts
        ),
        React.createElement(
          "div",
          { className: "fashion inter-normal-comet-32px" },
          fashion
        ),
        React.createElement(
          "div",
          { className: "medical inter-normal-comet-32px" },
          medical
        ),
        React.createElement(
          "div",
          { className: "art inter-normal-comet-32px" },
          art
        ),
        React.createElement(
          "div",
          { className: "classical-music inter-normal-comet-32px" },
          classicalMusic
        ),
        React.createElement(
          "div",
          { className: "place inter-normal-comet-32px" },
          place
        ),
        React.createElement(
          "div",
          { className: "jazz inter-normal-comet-32px" },
          jazz
        )
      )
    )
  );
}

export default HomeScreenBeforeLogin;


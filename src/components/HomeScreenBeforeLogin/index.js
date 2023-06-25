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
import { Link } from "react-router-dom"; 

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

  return (
    <div className="container-center-horizontal">
      <div className="home-screen-before-login screen">
        <div className="overlap-group1">
          <div className="nav_bar" />
          <div className="whats-happening-in inter-normal-comet-48px">
            {whatsHappeningIn}
          </div>
          <LogIn>{logInProps.children}</LogIn>
        </div>
        <div className="overlap-group2">
          <Rectangle4 />
          <div className="search-location inter-normal-martini-48px">
            {searchLocation}
          </div>
        </div>
        <div className="overlap-group3">
          <Rectangle4 />
          <div className="anytime inter-normal-martini-48px">
            {anytime}
            <DatePicker
              selected={SelectedDate}
              onChange={(date) => SetSelectedDate(date)}
              minDate={new Date()}
            />
          </div>
        </div>
        <div className="overlap-group">
          <div className="rectangle-3" />
          <Fashion />
          <Medical />
          <Link to="/art">
          <Art />
          </Link>
          <Ellipse3 />
          <Ellipse4 />
          <Ellipse5 />
          <h1 className="title jimnightshade-normal-comet-64px">{title}</h1>
          <div className="concerts jimnightshade-normal-comet-64px">
            {concerts}
          </div>
          <Link to="/fashion">
            <div className="fashion inter-normal-comet-32px">{fashion}</div>
          </Link>
          <Link to="/art">
            <div className="art inter-normal-comet-32px">{art}</div>
          </Link>
          <Link to="/medical">
            <div className="medical inter-normal-comet-32px">{medical}</div>
          </Link>
          <div className="place inter-normal-comet-32px">{place}</div>
          <Link to="/classical-music">
            <div className="classical-music inter-normal-comet-32px">
              {classicalMusic}
            </div>
          </Link>
          <Link to="/jazz">
            <div className="jazz inter-normal-comet-32px">{jazz}</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeScreenBeforeLogin;

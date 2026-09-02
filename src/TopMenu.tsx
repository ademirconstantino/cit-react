import JsonReader from './JSonReader';
import { useLang } from "./LangContext";

import { Link } from "react-router-dom";

function TopMenu() {
  const { langSelected } = useLang();

  function myFunction() {
    const x = document.getElementById("myTopnav");
    if (x) {
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
  }

  return (
    <div className="main">
      <div className="topnav" id="myTopnav">
        <a href="javascript:void(0);" className="icon" onClick={myFunction}>
          <i className="fa fa-bars"></i>
        </a>
      <Link to="/cit-react/">
        <i className="fa fa-home"></i>&nbsp;&nbsp;
        {JsonReader(langSelected, "menu.home")}
      </Link>

      <Link to="/cit-react/about">
        {JsonReader(langSelected, "menu.about_us")}
      </Link>

      <Link to="/cit-react/services">
        {JsonReader(langSelected, "menu.services")}
      </Link>

      <Link to="/cit-react/our-team">
        {JsonReader(langSelected, "menu.our_team")}
      </Link>

      <Link to="/cit-react/contact">
        {JsonReader(langSelected, "menu.contact")}
      </Link>
      </div>
    </div>
  );
}

export default TopMenu;
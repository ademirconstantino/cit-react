import JsonReader from './JSonReader';
import { useLang } from "./LangContext";

import "../public/css/menu.css"; 
import "../public/css/bootstrap.min.css";
import "../public/css/theme-style.min.css";
import "../public/css/custom-style.css";
import "../public/css/font-awesome.min.css";

import './App.css';

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

        <a href="/"><i className="fa fa-home"></i>&nbsp;&nbsp;{JsonReader(langSelected, "menu.home")}</a>
        <a href="/about">{JsonReader(langSelected, "menu.about_us")}</a>
        <a href="/services">{JsonReader(langSelected, "menu.services")}</a>
        <a href="/our-team">{JsonReader(langSelected, "menu.our_team")}</a>
        <a href="/contact">{JsonReader(langSelected, "menu.contact")}</a>
      </div>
    </div>
  );
}

export default TopMenu;
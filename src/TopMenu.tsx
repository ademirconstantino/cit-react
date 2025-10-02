import { useState } from 'react'
import JsonReader from './JSonReader';
import { useLang } from "./LangContext";

import "../public/css/menu.css"; 
import "../public/css/bootstrap.min.css";
import "../public/css/theme-style.min.css";
import "../public/css/custom-style.css";
import "../public/css/font-awesome.min.css";

import './App.css';

function TopMenu() {

  const { langSelected, setLangSelected } = useLang();

  const title = JsonReader(langSelected, "header.website_title");
  console.log(title);

  function myFunction() {
    	let x = document.getElementById("myTopnav");
      if(x) {
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
			  <a><i className="fa fa-home"></i></a>
			  <a>ABOUT US</a> 
			  <a>SERVICES</a> 
			  <a>CONTACT US</a> 
        <a href="javascript:void(0);" className="icon" onClick={myFunction}>
				<i className="fa fa-bars"></i>
			  </a>
			</div>
    </div>
  )
}

export default TopMenu;
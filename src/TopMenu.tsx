import { useState } from 'react'
import "../public/css/menu.css"; 
import "../public/css/bootstrap.min.css";
import "../public/css/theme-style.min.css";
import "../public/css/custom-style.css";
import "../public/css/font-awesome.min.css";

import './App.css'

function TopMenu() {
  const [count, setCount] = useState(0)

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
			  <a href="index.php?lang=en"><i className="fa fa-home"></i></a>
			  <a href="about.php?lang=en">ABOUT US</a> 
			  <a href="services.php?lang=en">SERVICES</a> 
			  <a href="contact.php?lang=en">CONTACT US</a> 
        <a href="javascript:void(0);" className="icon" onClick={myFunction}>
				<i className="fa fa-bars"></i>
			  </a>
			</div>
    </div>
  )
}

export default TopMenu;
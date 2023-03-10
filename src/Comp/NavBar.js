import React from "react";
import logo from "../logo.png"; 
//REACT FONTAWSOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
<div className="container">
  <a className="navbar-brand" href=""><img src={logo} alt="logo..."/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <FontAwesomeIcon icon={faBars} style= {{color : "#fff"}} />
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav .pull-left">
      <li className="nav-item active">
        <a className="nav-link" href="">home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="">about me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="">project</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="">achivement</a>
      </li><li className="nav-item">
        <a className="nav-link" href="">contacts</a>
      </li>
      
    </ul>
   
  </div>
  </div>
</nav>

    </div>
  )
}

export default NavBar
import React from "react";
import "./LandingPage.css"

const LandingPage = () => (
    <div className="LandingPage">
	      <div className="LandingPage__TextBox">
	      <h1 className="PrimaryHeading">
		      <span className="PrimaryHeading--main">Tempo</span>
		      <span className="PrimaryHeading--sub">by InRhythm</span>
		    </h1>
	      
	      <button className="LoginButton LoginButton--chocolate">
	        <a href="#" className="LoginButton--text">
	        	Login With Google
	        </a>
	      </button>
	    </div>
    </div>
);

export default LandingPage;
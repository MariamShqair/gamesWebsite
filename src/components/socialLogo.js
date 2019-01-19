import React, { Component } from "react";
import Circle from "./parts/circle";


const SocialLogo = () => {
  
  return (
    <div className="d-flex justify-content-between align-items-center bd-highlight mb-3 social-logo">
      <img src="images/logo.png" />
      <div className="groupCircle">
        <Circle classN="fa fa-facebook" link="#"/>
        <Circle classN="fa fa-twitter" link="#"/>
        <Circle classN="fa fa-pinterest-p" link="#"/>
        <Circle classN="fa fa-google-plus" link="#"/>
        </div>
    </div>
  );
};

export default SocialLogo;

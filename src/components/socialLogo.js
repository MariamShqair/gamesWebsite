import React, { Component } from "react";
const SocialLogo = () => {
  return (
    <div className="d-flex justify-content-between align-items-center bd-highlight mb-3 social-logo">
      <img src="images/logo.png" />
      <p className=" ">
        <a href="#" className="icn p-2 ml-4 ">
          t
        </a>
        <a href="#" className="icn p-2 ml-4">
          f
        </a>
        <a href="#" className="icn p-2 ml-4">
          y
        </a>
        <a href="#" className="icn p-2 ml-4">
          p
        </a>
      </p>
    </div>
  );
};

export default SocialLogo;

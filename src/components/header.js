import React, { Component } from "react";
import HeaderSlider from "./headerSlider";
import SocialLogo from "./socialLogo";
import Menu from "./menu";
import Slider from "./slider";

const Header = ({ menu }) => {
  return (
    <div className="background-header ">
      <div className="container ">
        <div className="pl-3 pr-3 d-flex flex-column ">
          <SocialLogo />
          <Menu menu={menu} />
        </div>
      </div>
    </div>
  );
};

export default Header;

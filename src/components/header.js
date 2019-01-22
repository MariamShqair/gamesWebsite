import React, { Component } from "react";
import SocialLogo from "./socialLogo";
import Menu from "./menu";
import {getMenu} from "./data/games"


const Header = () => {
  
  return (
    <div className="background-header ">
      <div className="container ">
        <div className="d-flex flex-column ">
          <SocialLogo />
          <Menu menu={getMenu()} />
        </div>
      </div>
    </div>
  );
};

export default Header;

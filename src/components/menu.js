import React, { Component } from "react";
import { Link } from "react-router-dom";

const Menu = ({menu}) => {
  return (
    <div className="menu">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/gamesWebsite">
          IndiGamer
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          {menu.map((m,key) =>
            <li className="nav-item active" key={key} >
            <Link
              to={`/gamesWebsite/${m}`}
              className="nav-link"
              href="#"
            >
              {m} <span className="sr-only">(current)</span>
            </Link>
          </li>

          )}
         
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Menu;

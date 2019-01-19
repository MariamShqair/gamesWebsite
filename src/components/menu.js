import React, { Component } from "react";
import { Link } from "react-router-dom";

const Menu = ({menu}) => {
  return (
    <div className="menu">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
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
          <li className="nav-item active">
                <Link
                  to={`/contact`}
                  className="nav-link"
                  href="#"
                >
                  contact Us <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li className="nav-item active">
                <Link
                  to={`/about`}
                  className="nav-link"
                  href="#"
                >
                  about Us <span className="sr-only">(current)</span>
                </Link>
              </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Menu;

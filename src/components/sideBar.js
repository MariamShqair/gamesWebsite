import React, { Component } from 'react';
import { Link } from "react-router-dom";

const SideBar = ({gameCategory}) => {
    return ( <div className=" ">
    <div className="sideBar pt-3">
    <h3>Category</h3>
    <ul>
        {gameCategory.map((item ,key)=> (<li key={key} className="nav-item active">
                <Link
                  to={item}
                  className="nav-link"
                  href="#"
                >
                  {item} <span className="sr-only">(current)</span>
                </Link>
              </li>))}
    </ul>
     </div>
     </div>);
}
 
export default SideBar;
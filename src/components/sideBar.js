import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const SideBar = ({gameCategory}) => {
    return ( <div>
    <div className="category">
    <h3>Category</h3>
    <ul>
   
        {gameCategory.map((item ,key)=> (<li key={key} className="nav-item ">
                <Link
                  to={item}
                  className="nav-link"
                  href="#"
                >
                  {item} <span className="sr-only"></span>
                </Link>
              </li>))}
       
       
    </ul>
     </div>
     </div>);
}
 
export default SideBar;
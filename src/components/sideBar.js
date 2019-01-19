import React from 'react';
import {  Link } from "react-router-dom";
import { categories } from './data/games';

const SideBar = () => {
    console.log(categories)
    return ( <div>
    <div className="category">
    <h3>Category</h3>
    <ul>
      {categories.map((item,key) => <li key={key} className="nav-item ">
                  <Link
                    to={`/${item.name}/`}
                    className="nav-link"
                    href="#"
                   
                  >
                    {item.lable} <span className="sr-only"></span>
                  </Link>
            </li>)}
            
   
    </ul>
     </div>
     </div>);
}
 
export default SideBar;
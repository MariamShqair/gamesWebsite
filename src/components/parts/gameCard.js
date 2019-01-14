import React, { Component } from "react";
import { Link ,Route} from 'react-router-dom'


const GameCard = (props) => {
  return (  <div className="card">
  <div className="card-header">
    <div>likes: {props.likes}</div> <div>comments: {props.comments}</div> </div>
  <div className="card-main">
    <div className="image">
    <img src={props.image}/></div>
    
    <div className="main-description">
    <a onClick={()=>props.handlClick(props)}>{props.name}</a>
    
     </div>
  </div>
</div> );
}
 
export default GameCard;


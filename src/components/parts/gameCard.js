import React from "react";
import { Link } from 'react-router-dom'
import { getCategoryById, games } from "../data/games";


const GameCard = ({game}) => {
  const category = getCategoryById(game.category)
  console.log(category)
  return (  <div className="card">
  <div className="card-header">
    <div><i class="fa fa-heart-o" aria-hidden="true"></i> {game.likes}</div> <div><i class="fa fa-comments" aria-hidden="true"></i> {game.comments.length}</div> </div>
  <div className="card-main">
    <div className="image">
    <img src={`/images/games/${game.image}`}/></div>
    
    <div className="main-description">
    <Link  to={`/${game.id}`}>{game.name}</Link>
    
     </div>
  </div>
</div> );
}
 
export default GameCard;


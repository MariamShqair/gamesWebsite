import React, { Component } from 'react';
import { getGamesByCategoryName } from '../data/games';
import { Link } from 'react-router-dom'

const CategoryPage = ({match}) => {
  const  urll = match.path.replace("/",'')
    console.log(match)
    const games = getGamesByCategoryName(urll);
    console.log(games)
    return ( <div className="main-body mr-3 pl-3 ">
     <div className="cards">
     {games.map((game, key) => (
            <div key={key} className="card">
            <div className="card-header">
              <div><i className="fa fa-heart-o" aria-hidden="true"></i> {game.likes}</div> <div><i class="fa fa-comments" aria-hidden="true"></i> {game.comments.length}</div> </div>
            <div className="card-main">
              <div className="image">
              <img src={`/images/games/${game.image}`}/></div>
              
              <div className="main-description">
              <Link  to={`/${game.id}`}>{game.name}</Link>
              
               </div>
            </div>
          </div> 
          ))} 
    </div>
    
    </div> );
}
 
export default CategoryPage;
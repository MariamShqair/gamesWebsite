import React, { Component } from "react";
const Body = ({ games }) => {
  return (
    <div className="main-body mr-3 pl-3 ">
      <h3>Top Games</h3>
      <div className="cards">
        {games.map((game, key) => (
          <div class="card">
            <div class="card-header">likes:{game.likes} comments:{game.comments.length}</div>
            <div class="card-main">
              <div className="image">
              <img src={game.image}/></div>
              
              <div class="main-description"><a href={game.link}>{game.name}</a> </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Body;

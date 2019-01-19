import React, { Component } from 'react';
import { getGameById } from '../data/games';
const Play = ({match}) => {
    const id =match.params.id
    const game = getGameById(id);
    console.log(game)
    return ( <div className="play">
    <h3>{game.name}</h3>
    <div className="game">
        <embed 
        src={game.link} type="application/x-shockwave-flash">
        </embed>
    </div> 
    <div className="comments">
        <h3>Comments</h3>
        {game.comments.map(comment=>{
            
        })}
    </div>
    </div>);
}

export default Play;
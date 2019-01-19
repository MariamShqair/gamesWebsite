import React, { Component } from 'react';
import { getGameById } from '../data/games';
const Play = ({match}) => {
    const id =match.params.id
    const game = getGameById(id);
    
   
    return ( <div className="play">
    <h3>{game.name}</h3>
    <div className="game">
        <embed 
        src={game.link} type="application/x-shockwave-flash">
        </embed>
    </div> 
    <div className="comments">
        <h3>Comments</h3>
        {game.comments.map(comment=>
        <div className="comment">
            <div class="alert  alert-info" role="alert">
                {comment.comment}
            </div>
        </div>
            )}
            <form>
  
                <div className="form-group">
                    <label for="comment">Add Comment:</label>
                    <input type="text" className="form-control" id="comment" placeholder="comment"/>
                </div>
                
                <input type="submit" value="Submit" />
            </form>
    </div>
    </div>);
}

export default Play;
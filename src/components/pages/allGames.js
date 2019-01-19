import React from 'react';
import GameCard from "../parts/gameCard"
const AllGames = (props) => {
    
   const card = () =>{
       
        return props.games.map((game, key) => (
            <GameCard key={key} game ={game}/>
          )) 
      }
    return ( 
        <div className="cards">
       {card()}
    </div> );
}
 
export default AllGames;
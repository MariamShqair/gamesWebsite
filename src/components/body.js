import React, { Component } from "react";
import GameCard from './parts/gameCard';
import Play from './pages/play';
class Body extends Component {
  state = {
    items:{},
     flag:false }
   handleClick = (props)=>{
     
     this.setState({flag:true,items:props})
  }
  card = () =>{
    return this.props.games.map((game, key) => (
      <GameCard handlClick={this.handleClick} likes={game.likes} comments={game.comments.length}  image={game.image} link={game.link} name={game.name}/>
      )) 
  }

  cards=()=>{ 
   
    return <div>
    <h3>Top Games</h3>
    <div className="cards">
      {this.card()}
    </div>
    </div>
    
  }
    
  
  render() { 
    return (
    <div className="main-body mr-3 pl-3 ">
   {(this.state.flag) ? <Play items={this.state.items} /> : this.cards() }
  
  </div>  );
  }
}
export default Body;

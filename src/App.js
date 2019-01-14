import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link , Switch  } from "react-router-dom";

import "./App.css";
import SideBar from "./components/sideBar";
import Header from "./components/header";
import LearningGames from "./components/pages/learning-games"
import CarsGames from "./components/pages/cars-games"
import GirlsGames from "./components/pages/girls-games"
import Home from "./components/pages/home"



class App extends Component {
  state = {
    menu: ["All Games", "Puzzle", "Card", "Word"],
    games: [
      {
        id: 1,
        name: "Geometry forms",
        image: "http://educa.land/wp-content/uploads/2016/11/geometry-forms.jpg",
        link: "https://educa.land/games/quiz-geom/0_0_4/",
        category:"learning-games",
        likes:0,
        comments: [
          {
            id: "1",
            name: "ahmad",
            comment: "awsome game"
          }
        ]
      },
      {
        id: 2,
        name: "European Capitals",
        image: "http://educa.land/wp-content/uploads/2016/11/european-capitals.jpg",
        link: "https://educa.land/games/hangmaneuropeancapitals/0_0_2/",
        category:"learning-games",
        likes:0,
        comments: [
          {
            id: "1",
            name: "ahmad",
            comment: "awsome game"
          }
        ]
      },
      {
        id: 3,
        name: "Types of landscape",
        image: "http://educa.land/wp-content/uploads/2016/05/cover-tipos-de-paisaje.jpg",
        link: "https://educa.land/games/matchtypesoflandscape/0_0_9/",
        category:"girls-games",
        likes:0,
        comments: [
          {
            id: "1",
            name: "ahmad",
            comment: "awsome game"
          },
          {
            id: "2",
            name: "ahmad",
            comment: "awsome game"
          },
          {
            id: "3",
            name: "ahmad",
            comment: "awsome game"
          }
        ]
      },
      {
        id: 4,
        name: "Recipients",
        image: "http://educa.land/wp-content/uploads/2016/07/cover-sopa-recipientes.jpg",
        link: "https://educa.land/games/wordsearchrecipients/0_0_14/",
        category:"learning-games",
        likes:0,
        comments: [
          {
            id: "1",
            name: "ahmad",
            comment: "awsome game"
          }
        ]
      },
      {
        id: 5,
        name: "Numbers 1 to 10",
        image: "http://educa.land/wp-content/uploads/2016/07/covers-memory-numeros.jpg",
        link: "https://educa.land/games/pairsnumbers1to10/0_0_16/",
        category:"cars-games",
        likes:0,
        comments: [
          {
            id: "1",
            name: "ahmad",
            comment: "awsome game"
          }
        ]
      },
      {
        id: 6,
        name: "Animals",
        image: "http://educa.land/wp-content/uploads/2016/09/cover-animals.jpg",
        link: "https://educa.land/games/animals_letters/0_0_2/",
        category:"cars-games",
        likes:0,
        comments: [
          {
            id: "1",
            name: "ahmad",
            comment: "awsome game"
          }
        ]
      }
    ],
    gameCategory:["learning-games","cars-games","girls-games"],
    value:[]
  };
  learninGames=()=>{
    const learningGames = this.state.games.filter(el => el.category === "learning-games" )
    
    return learningGames;
  }
  
  render() {
    
    return (
      <div className="container-fluid stars ">
        <div className="twinkling">
          {console.log("aaaaaaaaaaaaa")}
          
          <Header menu={this.state.menu} />
           
          <div className="container main pt-5">
            
            <SideBar gameCategory={this.state.gameCategory} />
            <Switch>
              <Route exact path="/" render={(props) => <Home games={this.state.games} isAuthed={true} />}  />
              <Route path="/learning-games" render={(props) => <LearningGames games={this.learninGames()} isAuthed={true} />} />
              <Route path="/cars-games" component={CarsGames} />
              <Route path="/girls-games" component={GirlsGames} />
          </Switch>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;

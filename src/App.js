import React, { Component } from "react";
import "./App.css";
import SideBar from "./components/sideBar";
import Header from "./components/header";
import Body from "./components/body";
class App extends Component {
  state = {
    menu: ["Learning Games", "Cars Games", "Girls Games", "Most Visited Games"],
    games: [
      {
        id: 1,
        name: "Geometry forms",
        image: "http://educa.land/wp-content/uploads/2016/11/geometry-forms.jpg",
        link: "https://educa.land/games/quiz-geom/0_0_4/",
        category:1,
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
        category:1,
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
        category:1,
        likes:0,
        comments: [
          {
            id: "1",
            name: "ahmad",
            comment: "awsome game"
          },
          {
            id: "1",
            name: "ahmad",
            comment: "awsome game"
          },
          {
            id: "1",
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
        category:1,
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
        category:1,
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
        category:1,
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
    gameCategory:["learning-games","cars-games","girls-games"]
  };
  render() {
    return (
      <div className="container-fluid stars ">
        <div className="twinkling">
          
          <Header menu={this.state.menu} />
           
          <div className="container main pt-5">
            <SideBar gameCategory={this.state.gameCategory} />
            <Body games={this.state.games}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

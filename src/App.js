import React, { Component } from "react";
import { Redirect , Route, Switch } from "react-router-dom";

import "./App.css";
import SideBar from "./components/sideBar";
import Header from "./components/header";
import LearningGames from "./components/pages/learning-games";
import CarsGames from "./components/pages/cars-games";
import GirlsGames from "./components/pages/girls-games";
import Home from "./components/pages/home";
import Play from "./components/pages/play"
import NotFound from "./components/pages/notFound"
import CategoryPage from "./components/pages/categoryPage"
import Contact from "./components/pages/contact"
import About from "./components/pages/about"
class App extends Component {
  state = {
    menu: ["All Games", "Puzzle", "Card", "Word"],
    games: [
      {
        id: 1,
        name: "Geometry forms",
        image:
          "http://educa.land/wp-content/uploads/2016/11/geometry-forms.jpg",
        link: "https://educa.land/games/quiz-geom/0_0_4/",
        category: "learning-games",
        likes: 0,
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
        image:
          "http://educa.land/wp-content/uploads/2016/11/european-capitals.jpg",
        link: "https://educa.land/games/hangmaneuropeancapitals/0_0_2/",
        category: "learning-games",
        likes: 0,
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
        image:
          "http://educa.land/wp-content/uploads/2016/05/cover-tipos-de-paisaje.jpg",
        link: "https://educa.land/games/matchtypesoflandscape/0_0_9/",
        category: "girls-games",
        likes: 0,
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
        image:
          "http://educa.land/wp-content/uploads/2016/07/cover-sopa-recipientes.jpg",
        link: "https://educa.land/games/wordsearchrecipients/0_0_14/",
        category: "learning-games",
        likes: 0,
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
        image:
          "http://educa.land/wp-content/uploads/2016/07/covers-memory-numeros.jpg",
        link: "https://educa.land/games/pairsnumbers1to10/0_0_16/",
        category: "cars-games",
        likes: 0,
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
        category: "cars-games",
        likes: 0,
        comments: [
          {
            id: "1",
            name: "ahmad",
            comment: "awsome game"
          }
        ]
      }
    ],
    gameCategory: ["learning-games", "cars-games", "girls-games"],
    data: []
  };
 

  learninGames = () => {
    const learningGames = this.state.games.filter(
      el => el.category === "learning-games"
    );

    return learningGames;
  };

  render() {
    return (
      <React.Fragment>
      <div className="container-fluid stars ">
        <div className="twinkling">
          

          <main >
          <Header menu={this.state.menu} />
            <div className="container main pt-5">
            <SideBar/>
            
            <Switch>
              <Route
                exact
                path="/"
                component={Home}
              /> 
              <Route

                path="/learning-games"
                component={LearningGames}
              />
              <Route

                path="/girls-games"
                component={GirlsGames}
                />
                <Route

                path="/cars-games"
                component={CarsGames}
                />
                <Route

path="/about"
component={About}
/>
<Route

                path="/contact"
                component={Contact}
              />
              <Route
                path="/:id"
                component={Play}
              />
              <Route path="/not-found" component={NotFound} />
              <Redirect
                from="/"
                exact
                //exact url in this case /
                to="/"
              />
              <Redirect to="/not-found" />
              
            </Switch>
            
         </div>
         
          </main>
          

        </div>
       
      </div>
      
      </React.Fragment>
    );
  }
}

export default App;

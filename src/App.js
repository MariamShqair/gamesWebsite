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


  render() {
    return (
      <React.Fragment>
      <div className="container-fluid stars ">
        <div className="twinkling">
          

          <main >
          <Header />
            <div className="container main pt-5">
            <SideBar/>
            
            <Switch>
              <Route
                exact
                path="/gamesWebsite/"
                component={Home}
              /> 
              <Route

                path="/gamesWebsite/learning-games"
                component={LearningGames}
              />
              <Route

                path="/gamesWebsite/girls-games"
                component={GirlsGames}
                />
                <Route

                path="/gamesWebsite/cars-games"
                component={CarsGames}
                />
                <Route

path="/gamesWebsite/about"
component={About}
/>
<Route

                path="/gamesWebsite/contact"
                component={Contact}
              />
              <Route exact
                path="/gamesWebsite/:id"
                component={Play}
              />
              {/* <Route exact path="/gamesWebsite/not-found" component={NotFound} />
              <Redirect
                from="/gamesWebsite/"
                exact
                //exact url in this case /
                to="/gamesWebsite/"
              />
              <Redirect to="/gamesWebsite/not-found" />
               */}
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

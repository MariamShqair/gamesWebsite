import React, { Component } from 'react';
import Body from "../body";
import {getGames} from "../data/games"

import AllGames from "../pages/allGames"
class Home extends Component {
    state = { 
        data:[]
     }
    componentDidMount() {
        this.setState({data:getGames()})
      }
    render() { 
        
        return (
        <div className="main-body mr-3 pl-3 ">
            <AllGames games={this.state.data}/> 
        </div> );
    }
}
 
export default Home;
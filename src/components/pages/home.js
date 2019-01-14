import React, { Component } from 'react';
import Body from "../body";

const Home = (props) => {
    return ( <Body games={props.games}/> );
}
 
export default Home;
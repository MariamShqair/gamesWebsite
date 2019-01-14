import React, { Component } from 'react';
const Play = (props) => {
    console.log(props.items)
    return ( <div>
        <iframe src={props.items.link} height="500" width="700"></iframe>
    </div> );
}
 
export default Play;
import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Circle = ({}) => {
    library.add(faEnvelope )
    return (
         <div className="circle">
            <a href="#" >
            <FontAwesomeIcon icon={faEnvelope} />
            </a>
        </div> );
}
 
export default Circle;
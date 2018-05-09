import React, { Component } from 'react';
//import PropTypes from 'prop-types';

export default class DogHeader extends Component {

    render() {
        if (String(this.props.renderingState) !== "Fetched") {
            return(<h1>Woof ?</h1>);
        }

       switch(String(this.props.dogType)) {
            case "Good":
                return(<h1>Good Boy</h1>); 
            case "Bad": 
                return(<h1>Bad Dog</h1>);
            default: 
                return(<h1>Woof ?</h1>);  
       }
    }; 
}

// DogHeader.prototype = {
//     dogType: PropTypes.string
// };
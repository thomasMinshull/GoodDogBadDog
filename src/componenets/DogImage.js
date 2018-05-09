import React, { Component, View } from 'react';

export default class DogImage extends Component {

    render() {
        switch(String(this.props.pageState)) {
            case "Fetch":
                break; 
            case "Fetching":
                break; 
            default: 
                break; 
        } 
        return(<div/>); 
    }; 
}
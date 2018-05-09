import React, { Component } from 'react';

export default class DogImage extends Component {

    render(props) {
        if (String(this.props.renderingState) === "Fetched") {
            return (<img src={this.props.image} alt={"Dog"}/>);
        } else {
            return (<p>fetching...</p>);
        }
    }; 
}
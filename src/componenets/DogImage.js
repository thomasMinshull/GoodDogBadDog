import React, { Component, Image } from 'react';

export default class DogImage extends Component {

    render(props) {
        if (String(this.props.renderingState) === "Fetched") {
            return (<img src={this.props.image} alt={"Dog"} style={ styles.image }/>);
        } else {
            return (
                <div style={ styles.userMessage }><p>fetching...</p></div>
);
        }
    }; 
}

const styles = {
    userMessage: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        height: '60vh',

    }, 
    image: {
        height: '60vh'
    }
}
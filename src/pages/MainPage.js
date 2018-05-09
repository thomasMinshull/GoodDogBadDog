import React, { Component, View } from 'react';
import Button from '../componenets/Button'; 
import DogHeader from '../componenets/DogHeader'; 
import DogImage from '../componenets/DogImage';

export default class Mainpage extends Component {
    state = {
        renderingState: "Fetch", // Fetch | Fetching | Fetched 
        dogType: "No vote cast" // No vote cast | Good | Bad
    }

    render() {
        return(
            <div>
                <div> 
                <DogHeader dogType={this.state.dogType}/>
                <DogImage />
                </div> 
                <div> 
                    <Button name="Good Dog" clickHandler= { () => { this.setState( { dogType: "Good" })}} />
                    <Button name="Next" clickHandler= { () => { this.setState( { renderingState: "Render" })}} />
                    <Button name="Bad Dog" clickHandler= { () => { this.setState( { dogType: "Bad" })}} /> 
                </div> 
            </div>
        ); 
    }; 
}
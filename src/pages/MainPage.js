import React, { Component } from 'react';
import axios from 'axios';
import Button from '../componenets/Button'; 
import DogHeader from '../componenets/DogHeader'; 
import DogImage from '../componenets/DogImage';

export default class Mainpage extends Component {
    state = {
        renderingState: "Fetching", // Fetching | Fetched 
        dogType: "No vote", // No vote cast | Good | Bad
        dogImage: "https://images.dog.ceo/breeds/leonberg/n02111129_1.jpg"
    }

    componentWillMount = () => {
        this.fetchNextImage();
    }

    fetchNextImage = () => {
        this.setState({renderingState: "Fetching"})

        axios.get('https://dog.ceo/api/breeds/image/random').then(response => { 
                     
                if (String(response.data.status) === "success") {
                        this.setState( { 
                            dogImage: response.data.message, 
                            renderingState: "Fetched", 
                            dogType: "No vote"
                        }); 
                    } else {
                        this.fetchNextImage();
                    } 
                });
    }

    isVotingDisabled = () => {
        return String(this.state.renderingState) === "Fetching" || String(this.state.dogType) !== "No vote";
    }

    render() {
        return(
            <div style= { { display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', justifyContent: 'center', alignItems: 'center', alignContent: 'center'} }>
                <DogHeader dogType={this.state.dogType} renderingState={this.state.renderingState}/>
                <DogImage 
                    image= { this.state.dogImage }
                    renderingState= { this.state.renderingState }
                /> 
                <div style= { { display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'spaceBetween', alignItems: 'stretch'} }> 
                    <Button 
                        style={ {flex: .2} }
                        name="Good Dog" 
                        disabled={ this.isVotingDisabled() } 
                        clickHandler= { () => { this.setState( { dogType: "Good" })}} 
                    />
                    <Button 
                        style={ {flex: .2} }
                        name="Next" 
                        disabled={ this.state.renderingState === "Fetching" } 
                        clickHandler= { this.fetchNextImage } 
                    />
                    <Button 
                        style={ {flex: .2} }
                        name="Bad Dog" 
                        disabled={ this.isVotingDisabled() } 
                        clickHandler= { () => { this.setState( { dogType: "Bad" })}} 
                    /> 
                </div> 
            </div>
        ); 
    }; 
}


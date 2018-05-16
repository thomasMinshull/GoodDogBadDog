import React, { Component } from 'react';
import axios from 'axios';
import Button from '../componenets/Button'; 
import DogHeader from '../componenets/DogHeader'; 
import DogImage from '../componenets/DogImage';
import P from '../componenets/P';

export default class Mainpage extends Component {
    state = {
        renderingState: "Fetching", 
        dogType: "No vote", 
        dogImage: "",
        currentScore: ""
    }

    componentWillMount = () => {
        this.fetchNextImage();
    }

    fetchNextImage = () => {
        this.setState({renderingState: "Fetching"})

        axios.get('https://dog.ceo/api/breeds/image/random').then(response => { 
                     
            if (String(response.data.status) === "success") {
                axios.get('/dog', {
                    params: {
                        id: this.idFrom(response.data.message)
                    }
                }).then( (voteResponse) => {
                    if (voteResponse.request.status !== 200) this.fetchNextImage();  

                    const score = voteResponse.data[0].Vote;

                    this.setState( { 
                        dogImage: response.data.message, 
                        renderingState: "Fetched", 
                        dogType: "No vote",
                        currentScore: score
                    });
                });
 
            } else {
                 this.fetchNextImage();
            } 
            });
    }

    upVote(id) { 
        const upvotePath = '/upvote?id=' + id;
        axios.put(upvotePath)

        this.setState( (prevState, props) => ({ 
            dogType: "Good", 
            currentScore: prevState.currentScore + 1 
        }));
    }

    downVote(id) {
        axios.put('/downvote',{
            params: {
                id: id
            }
        })

        this.setState( (prevState, props) => ({ 
            dogType: "Bad", 
            currentScore: prevState.currentScore - 1 
        }));
    }

    isVotingDisabled = () => {
        return String(this.state.renderingState) === "Fetching" || String(this.state.dogType) !== "No vote";
    }

    render() {
        return(
            <div style= { styles.column }>
                <DogHeader 
                    dogType={this.state.dogType} 
                    renderingState={this.state.renderingState}
                />
                <DogImage 
                    image= { this.state.dogImage }
                    renderingState= { this.state.renderingState }
                /> 
                <div style= { styles.buttonRow }> 
                    <Button 
                        identifier= { this.idFrom(this.state.dogImage) }
                        name="Good Dog" 
                        disabled={ this.isVotingDisabled() } 
                        clickHandler= { this.upVote.bind(this) } 
                    />
                    <Button 
                        identifier= { this.idFrom(this.state.dogImage) }
                        name="Next" 
                        disabled={ this.state.renderingState === "Fetching" } 
                        clickHandler= { this.fetchNextImage } 
                    />
                    <Button 
                        name="Bad Dog" 
                        disabled={ this.isVotingDisabled() } 
                        clickHandler= { this.downVote.bind(this) } 
                    /> 
                </div>
                <P 
                    style={ styles.p } 
                    text={ `Current Score ${ this.state.currentScore } `}
                /> 
            </div>
        ); 
    }; 

    // helper 
    idFrom = (url) => {
        let components = url.split("/");
        return components[components.length-1].slice(0, -4);
    }
}

const styles = {
    column: { 
        display: 'flex', 
        flexDirection: 'column', 
        flexWrap: 'nowrap', 
        justifyContent: 'center', 
        alignItems: 'center', 
        alignContent: 'center'
    },
    buttonRow: { 
        display: 'flex', 
        flexDirection: 'row', 
        flexWrap: 'nowrap', 
        justifyContent: 'spaceBetween', 
        alignItems: 'stretch'
    },
    p: {
        fontSize: 'xx-large', 
        color: '#99C24D',
        fontFamily: "Georgia, serif"
    },
};
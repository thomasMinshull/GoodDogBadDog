import React from 'react';
import PropTypes from 'prop-types';

const DogImage = (props) => {
        if (String(props.renderingState) === "Fetched") {
            return (<img src={props.image} alt={"Dog"} style={ styles.image }/>);
        } else {
            return (
                <div style={ styles.div }><p style={ styles.p }>fetching...</p></div>
            );
        }
    }; 

const styles = {
    div: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        height: '60vh',
    }, 
    p: {
        fontSize: 'xx-large', 
        color: '#99C24D',
        fontFamily: "Georgia, serif"

    },
    image: {
        maxWidth: '100vh', 
        height: '60vh',
        width: 'auto'
    }
}

DogImage.propTypes = {
    renderingState: PropTypes.oneOf(['Fetched','Fetching']),
    image: PropTypes.string
};

export default DogImage;
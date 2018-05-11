import React from 'react';
import PropTypes from 'prop-types';

const DogHeader = (props) => {
        if (String(props.renderingState) !== "Fetched") {
            return(<h1 style={ styles.h1 }>Woof ?</h1>);
        }

        switch(String(props.dogType)) {
            case "Good":
                return(<h1 style={ styles.h1 }>Good Boy</h1>); 
            case "Bad": 
                return(<h1 style={ styles.h1 }>Bad Dog</h1>);
            default: 
                return(<h1 style={ styles.h1 }>Woof ?</h1>);  
        } 
}

const styles = {
    h1: {
        color: '#F18F01',
        fontFamily: "Georgia, serif"
    }
}

DogHeader.propTypes = {
    renderingState: PropTypes.oneOf(['Fetched','Fetching']),
    dogType: PropTypes.oneOf(["No vote","Good","Bad"]),
};

export default DogHeader; 
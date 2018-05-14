import React from 'react'; 
import PropTypes from 'prop-types';

const P = (props) => {
    return (<p style = { props.style }>{ props.text }</p>);
}

P.propTypes = {
    text: PropTypes.string
}

export default P; 
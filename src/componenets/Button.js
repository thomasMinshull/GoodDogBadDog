// https://github.com/ahfarmer/calculator/blob/master/src/component/Button.js
import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  }

  render() {

    return (
        <button
          style={ this.props.disabled ? styles.disabled : styles.enabled }
          onClick={this.handleClick}
          disabled={this.props.disabled} 

        >
          {this.props.name}
        </button>
    );
  }
}

const styles = {
  enabled: {
    backgroundColor: '#048BA8', 
    color: '#2F2D2E', 
    fontSize: '16px', 
    border: 'none', 
    borderRadius: '5px', 
    padding: 10, 
    margin: 20
  }, 
  disabled: {
    opacity: '0.6', 
    backgroundColor: '#048BA8', 
    color: '#2F2D2E', 
    fontSize: '16px', 
    border: 'none', 
    borderRadius: '5px', 
    padding: 10, 
    margin: 20 
  }
}

Button.propTypes = {
  name: PropTypes.string,
  disabled: PropTypes.bool, 
  clickHandler: PropTypes.func
};

export default Button;
// https://github.com/ahfarmer/calculator/blob/master/src/component/Button.js
import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  }

  render() {

    return (
      <div >
        <button
          onClick={this.handleClick}
         disabled={this.props.disabled} >
          {this.props.name}
        </button>
      </div>
    );
  }
}
Button.propTypes = {
  name: PropTypes.string,
  disabled: PropTypes.bool, 
  clickHandler: PropTypes.func
};
export default Button;
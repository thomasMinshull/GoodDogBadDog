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
        >
          {this.props.name}
        </button>
      </div>
    );
  }
}
Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func
};
export default Button;
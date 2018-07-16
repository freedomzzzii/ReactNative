import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import button from './ButtonStyle';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { color, text, handleClick } = this.props;

    return(
      <TouchableOpacity style={button[color]} onPress={handleClick}>
        <Text style={button[`t${color}`]}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

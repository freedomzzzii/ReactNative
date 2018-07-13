import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

import theme from '../../../_theme';
import inputIcon from './InputIconStyle';

export default class InputIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      settings: {
        iconName,
        iconSize,
        placeholder,
      },
    } = this.props;

    return(
      <View style={theme.inputIcon}>
        <Icon name={iconName} size={iconSize} style={inputIcon.icon} />
        <TextInput style={inputIcon.input} placeholder={placeholder} />
      </View>
    );
  }
}

InputIcon.propTypes = {
  settings: PropTypes.shape({
    iconName: PropTypes.string.isRequired,
    iconSize: PropTypes.number.isRequired,
    placeholder: PropTypes.string.isRequired,
  }).isRequired,
};

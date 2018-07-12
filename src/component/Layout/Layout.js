import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import theme from '../../../_theme';
import layout from './LayoutStyle';

const logo = '../../assets/logo.png'

export class Layout1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <View style={theme.style1}>
        <View style={layout.flex1}>
          <Image style={layout.logo} source={require('../../assets/logo.png')} />
        </View>
        {this.props.children}
      </View>
    );
  }
}

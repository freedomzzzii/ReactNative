import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper';

import styles from './TutorialStyle';
import theme from '../../../_theme';

import { Layout1 } from '../../component/Layout/Layout';

class Tutorial1 extends Component {
  render() {
    return(
      <View style={styles.flex1}>
        <View>
          <Text style={theme.text1}>1111</Text>
        </View>
        <View style={theme.style1}>
          <Text style={theme.text1}>H2222</Text>
        </View>
      </View>
    );
  }
}

class Tutorial2 extends Component {
  render() {
    return(
      <Layout1>
        <View style={theme.style1}>
          <Text style={theme.text1}>H2222</Text>
        </View>
      </Layout1>
    );
  }
}

class Tutorial3 extends Component {
  render() {
    return(
      <View>
        <Text style={theme.text1}>Hello Swiper</Text>
      </View>
    );
  }
}

class Tutorial4 extends Component {
  render() {
    return(
      <View>
        <Text style={theme.text1}>Hello Swiper</Text>
      </View>
    );
  }
}

export default class Tutorial extends Component {
  render() {
    return(
      <Swiper showsButtons={false} loop={false}>
        <View style={theme.style1}>
          <Tutorial1 />
        </View>
        <Tutorial2 />
        <View style={theme.style1}>
          <Tutorial3 />
        </View>
        <View style={theme.style1}>
          <Tutorial4 />
        </View>
      </Swiper>
    );
  }
}

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper';

import styles from './TutorialStyle';

class Tutorial1 extends Component {
  render() {
    return(
      <View>
        <Text style={styles.text}>Hello Swiper</Text>
      </View>
    );
  }
}

class Tutorial2 extends Component {
  render() {
    return(
      <View>
        <Text style={styles.text}>Hello Swiper</Text>
      </View>
    );
  }
}

class Tutorial3 extends Component {
  render() {
    return(
      <View>
        <Text style={styles.text}>Hello Swiper</Text>
      </View>
    );
  }
}

class Tutorial4 extends Component {
  render() {
    return(
      <View>
        <Text style={styles.text}>Hello Swiper</Text>
      </View>
    );
  }
}

export default class Tutorial extends Component {
  render() {
    return(
      <Swiper style={styles.wrapper} showsButtons={false} loop={false}>
        <View style={styles.slide1}>
          <Tutorial1 />
        </View>
        <View style={styles.slide2}>
          <Tutorial2 />
        </View>
        <View style={styles.slide3}>
          <Tutorial3 />
        </View>
        <View style={styles.slide3}>
          <Tutorial4 />
        </View>
      </Swiper>
    );
  }
}

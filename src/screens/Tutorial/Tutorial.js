import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper';

import tutorial from './TutorialStyle';
import theme from '../../../_theme';

import { Layout1 } from '../../component/Layout/Layout';

const Tutorial1 = () => (
  <Layout1>
    <View style={tutorial.style1}>
      <Text style={theme.text1}>
        ขอสินเชื่อง่ายๆ
      </Text>
      <Text style={theme.text1}>
        ใน 3 ขั้นตอน
      </Text>
    </View>
  </Layout1>
);

const Tutorial2 = () => (
  <Layout1>
    <View style={tutorial.style1}>
      <Text style={theme.text1}>
        1
      </Text>
      <Text style={theme.text1}>
        กรอกข้อมูลและส่ง
      </Text>
      <Text style={theme.text1}>
        เอกสารออนไลน์
      </Text>
    </View>
  </Layout1>
);

const Tutorial3 = () => (
  <Layout1>
    <View style={tutorial.style1}>
      <Text style={theme.text1}>
        2
      </Text>
      <Text style={theme.text1}>
        พิมพ์เอกสาร
      </Text>
      <Text style={theme.text1}>
        ที่หน้าสาขา
      </Text>
    </View>
  </Layout1>
);

class Tutorial4 extends Component {
  render() {
    return(
      <Layout1>
        <View style={tutorial.style1}>
          <Text style={theme.text1}>
            3
          </Text>
          <Text style={theme.text1}>
            รับเงิน
          </Text>
          <Text style={theme.text1}>
            รวดเร็วทันใจ
          </Text>
        </View>
      </Layout1>
    );
  }
}

export default class Tutorial extends Component {
  render() {
    return(
      <Swiper showsButtons={false} loop={false}>
        <Tutorial1 />
        <Tutorial2 />
        <Tutorial3 />
        <Tutorial4 />
      </Swiper>
    );
  }
}

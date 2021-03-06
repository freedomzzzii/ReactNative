import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import Swiper from 'react-native-swiper';

import tutorial from './TutorialStyle';
import theme from '../../../_theme';

import { Layout1 } from '../../component/Layout/Layout';
import { InputIcon } from '../../helpers/Input/Input';
import Button from '../../helpers/Button/Button';
import { getItem, setItem } from '../../helpers/Storage/Storage';

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

const Tutorial4 = () => (
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

export class Login extends Component {
  handleLogin = async () => {
    try {
      const firstTime = await getItem('firstTime');
      if (!firstTime) {
        await setItem('firstTime', 'firstTime');
      }
      await setItem('isLogin', 'isLogin');
    } catch(error) {
      await setItem('firstTime', 'firstTime');
      await setItem('isLogin', 'isLogin');
    }
  }

  render() {
    const settingsIDCard = {
      iconName: 'ios-person',
      iconSize: 25,
      placeholder: 'เลขบัตรประชาชน',
    };

    const settingsPhone = {
      iconName: 'ios-call',
      iconSize: 25,
      placeholder: 'หมายเลขโทรศัพท์',
    };

    return(
      <Layout1>
        <View style={tutorial.style2}>
          <Text style={theme.text2}>
            เข้าสู่ระบบ
          </Text>
          <View style={tutorial.input}>
            <InputIcon settings={settingsIDCard} />
          </View>
          <View style={tutorial.input}>
            <InputIcon settings={settingsPhone} />
          </View>
          <View style={tutorial.button}>
            <Button color="green" text="ยืนยัน" handleClick={this.handleLogin} />
          </View>
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
        <Login />
      </Swiper>
    );
  }
}

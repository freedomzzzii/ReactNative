import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper';

import tutorial from './TutorialStyle';
import theme from '../../../_theme';

import { Layout1 } from '../../component/Layout/Layout';

// class Tutorial1 extends Component {
//   render() {
//     return(
//       <Layout1>
//         <View style={theme.style1}>
//           <Text style={theme.text1}>H2222</Text>
//         </View>
//       </Layout1>
//     );
//   }
// }

const Tutorial1 = () => (
  <Layout1>
    <View style={tutorial.text1}>
      <Text style={theme.text1}>
        ขอสินเชื่อง่ายๆใน 3 ขั้นตอน
      </Text>
    </View>
  </Layout1>
);

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
      <Layout1>
        <View style={theme.style1}>
          <Text style={theme.text1}>H2222</Text>
        </View>
      </Layout1>
    );
  }
}

class Tutorial4 extends Component {
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

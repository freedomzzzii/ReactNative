import React, { Component } from 'react';
import { Button, Text, View, AsyncStorage, AppState } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigator, createBottomTabNavigator } from 'react-navigation';

import Tutorial, { Login } from './src/screens/Tutorial/Tutorial';
import { getItem } from './src/helpers/Storage/Storage';

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

const HomeStack = StackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen },
});

const SettingsStack = StackNavigator({
  Settings: { screen: SettingsScreen },
  Details: { screen: DetailsScreen },
});

const RootNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Settings: { screen: SettingsStack },
    Tutorial,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }
        
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstTime: false,
      appState: AppState.currentState,
      isLogin: false,
    };
  }

  async componentWillMount() {
    try {
      const firstTime = await getItem('firstTime');
      const isLogin = await getItem('isLogin');
      
      this.setState({ firstTime, isLogin });
    } catch (error) {
      this.setState({ firstTime: true });
    }
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState) => {
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!')
    }
    this.setState({ appState: nextAppState });
  }

  render() {
    const { firstTime, isLogin } = this.state;
    console.log('appState>>>', this.state.appState);
    if (!firstTime) {
      return(<Tutorial />);
    } else if (!isLogin) {
      return(<Login />);
    }

    return(<RootNavigator />);
  }
}

export default App;

import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';
import { white } from '../assets/colors/index.js';


var config = require('./Config.js');

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  async UNSAFE_componentWillMount() {
    let fcmToken = await AsyncStorage.getItem('@Zadak:fcmToken');
    console.log('fcm splash', fcmToken)
    if (fcmToken == null) {
      RNRestart.Restart();
    }
    this.loginInterval = setInterval(() => {
      this.renderLoading();
    }, 1000);
  }

  async renderLoading() {
    const userId = await AsyncStorage.getItem('@Zadak:userId');
    if (userId == null) {
      redirectID = 'Login';
    } else {
      redirectID = 'Home';
    }
    clearInterval(this.loginInterval);
    this.props.navigation.navigate(redirectID);

  }

  render() {
    return (
      <View>
        <StatusBar backgroundColor={white} barStyle='dark-content' />

      </View>
    );
  }
}

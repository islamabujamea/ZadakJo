import React, { Component } from 'react';
import { StatusBar, View, Image, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';
import { blue } from '../assets/colors/index.js';
export const { width, height } = Dimensions.get('window');


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
        <StatusBar hidden />
        <Image source={require('../images/splash.png')} style={{ height: height, width: width }} />
        <Image source={require('../images/splash-logo.png')} style={{ position: 'absolute', alignSelf: 'center', marginVertical: width * 0.4 }} />
      </View>
    );
  }
}

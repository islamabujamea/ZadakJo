import React, { Component } from 'react';
import { Dimensions, I18nManager } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const { width, height } = Dimensions.get('window');
import firebase from 'react-native-firebase';
import AnimatedSplash from "react-native-animated-splash-screen";


var config = require('./Config.js');

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    I18nManager.allowRTL(true);
    I18nManager.forceRTL(true);
    this.state = {
      isLoaded: false
    }
  }
  async UNSAFE_componentWillMount() {
    let fcmToken = await AsyncStorage.getItem('@Zadak:fcmToken');
    if (fcmToken == null) {
      fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        await AsyncStorage.setItem('@Zadak:fcmToken', fcmToken);
      }
    }
    this.loginInterval = setInterval(() => {
      this.renderLoading();
      this.setState({ isLoaded: !this.state.isLoaded })
    }, 1000);
  }

  async renderLoading() {
    const userId = await AsyncStorage.getItem('@Zadak:userId');
    if (userId == null) {
      redirectID = 'Slider';
    } else {
      redirectID = 'Home';
    }
    clearInterval(this.loginInterval);
    this.props.navigation.navigate(redirectID);

  }

  render() {
    return (

      <AnimatedSplash
        translucent={false}
        isLoaded={this.state.isLoaded}
        logoImage={require("../images/logo.png")}
        imageBackgroundSource={require('../images/splash.png')}
        logoHeight={150}
        logoWidth={150} />
    );
  }
}

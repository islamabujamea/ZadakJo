import 'react-native-gesture-handler';
import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppNavigation from './pages/AppNavigation';
import { I18nManager } from 'react-native';


export default class App extends Component {
  constructor(props) {
    super(props);
    I18nManager.forceRTL(true);
    this.state = {
      isLoaded: false
    }
  }
  getToken = async () => {
    let fcmToken = await AsyncStorage.getItem('@Zadak:fcmToken');
    console.log('fcm', fcmToken)
    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        await AsyncStorage.setItem('@Zadak:fcmToken', fcmToken);
      }
    }
  };

  checkPermission = async () => {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      this.getToken();
    } else {
      this.requestPermission();
    }
  };

  requestPermission = async () => {
    try {
      await firebase.messaging().requestPermission();
      this.getToken();
    } catch (error) {
      console.log('permission rejected');
    }
  };

  createNotificationListeners = () => {
    this.onUnsubscribeNotificaitonListener = firebase
      .notifications()
      .onNotification(notification => {
        console.log('notification', notification)
        notification.android.setChannelId("test-channel");
        firebase.notifications().displayNotification(notification);
      });
  };

  removeNotificationListeners = () => {
    this.onUnsubscribeNotificaitonListener();
  };

  componentDidMount() {
    // Build a channel
    const channel = new firebase.notifications.Android.Channel('test-channel', 'Test Channel', firebase.notifications.Android.Importance.Max)
      .setDescription('My apps test channel');

    // Create the channel
    firebase.notifications().android.createChannel(channel);
    this.checkPermission();
    this.createNotificationListeners();

  }

  componentWillUnmount() {
    this.removeNotificationListeners();
  }

  render() {
    return <AppNavigation />;
  }
}

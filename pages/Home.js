import React, { Component } from 'react';
import { StatusBar, View, Image, ScrollView, Text, TouchableOpacity, TextInput, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { blue, orangeDark, orangeLight } from '../assets/colors/index'
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoaderBox from './components/LoaderBox';


var config = require('./Config.js');

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: () => <Text style={styles.headerTitle}>{strings.homeTitle}</Text>,
      headerStyle: styles.headerStyle,
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image source={require('./images/menu.png')} style={styles.headerIcons} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity>
          <Image source={require('./images/menu.png')} style={[styles.headerIcons, { tintColor: blue, backgroundColor: blue }]} />
        </TouchableOpacity>
      ),
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      showProgress: true,
    }
  };

  renderLoading() {
    if (this.state.showProgress) {
      return <LoaderBox />
    }
  }

  async UNSAFE_componentWillMount() { }

  render() {
    return (
      <View>
        <StatusBar backgroundColor={blue} barStyle='light-content' />
        {this.renderLoading()}
        <LinearGradient
          colors={[orangeLight, orangeDark]}
          style={styles.linearGradient}
        >
          <ScrollView>

          </ScrollView>
        </LinearGradient>
      </View>
    );
  }
}


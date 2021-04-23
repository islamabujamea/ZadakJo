import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Dimensions } from 'react-native';
import LoaderBox from './components/LoaderBox';
export const { width: width, height: height } = Dimensions.get('window');


var config = require('./Config.js');

export default class AboutUs extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: () =>
        <View style={{ width: width * 0.35 }}>
          <Image source={require('../images/header-logo.png')} style={{ alignSelf: 'flex-end' }} />
        </View>,
      headerStyle: styles.headerStyle,
      headerLeft: () =>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View>
            <Image source={require('../images/menu.png')} style={{ marginHorizontal: 20 }} />
          </View>
        </TouchableOpacity>,
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      showProgress: false,
    }
  };
  async UNSAFE_componentWillMount() { }

  renderLoading() {
    if (this.state.showProgress) {
      return <LoaderBox />
    }
  }

  render() {
    return (
      <View>

      </View>
    );
  }
}


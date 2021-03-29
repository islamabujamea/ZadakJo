import React, { Component } from 'react';
import { StatusBar, View, Image, Linking, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { blue, orange, } from '../assets/colors/index'
import { Icon } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoaderBox from './components/LoaderBox';
export const { width: width, height: height } = Dimensions.get('window');


var config = require('./Config.js');

export default class AboutUs extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: () => <Text style={styles.headerTitle}>{strings.AboutUs}</Text>,
      headerStyle: styles.headerStyle,
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          {/* <Image source={require('./images/menu.png')} style={styles.headerIcons} /> */}
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity>
          {/* <Image source={require('./images/menu.png')} style={[styles.headerIcons, { tintColor: blue, backgroundColor: blue }]} /> */}
        </TouchableOpacity>
      ),
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      showProgress: false,
      info: []
    }
  };
  async UNSAFE_componentWillMount() {
    this.getInfo()
  }

  async getInfo() {
    this.setState({ showProgress: true })
    var lang = await AsyncStorage.getItem('@Rabaana:lang');
    try {
      let response = await fetch(config.DOMAIN + lang + '/about-us');
      let res = await response.json();
      console.log('res', response.url)
      this.setState({ showProgress: false, info: res.response });
    } catch (error) {
      this.setState({ error: error });
    }
  }
  renderLoading() {
    if (this.state.showProgress) {
      return <LoaderBox />
    }
  }
  handleClick = (url) => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };
  render() {
    return (
      <View>
        <StatusBar backgroundColor={blue} barStyle='light-content' />
        {this.renderLoading()}
        <LinearGradient
          colors={[blue, orange]}
          style={{ height: '100%' }}
        >
          {!this.state.showProgress && <ScrollView>
            <View style={styles.AboutUsIconView}>
              <Icon type='MaterialCommunityIcons' name='home-outline' style={styles.AboutUsIcon} />
              <Text style={styles.drawerTxt}>{'RABAANA'}</Text>
            </View>

            <View style={styles.AboutUs}>
              <Text style={styles.headerTxt}>{this.state.info.description}</Text>
            </View>
            {/* <Image
              source={(require('./images/output-onlinepngtools.png'))}
              style={{ width: width * 0.5, height: height * 0.2, alignSelf: 'center' }}
              resizeMode='contain'
            /> */}
            <View style={styles.iconView}>
              {this.state.info.fb != null && <TouchableOpacity onPress={() => this.handleClick(this.state.info.fb)}>
                <Icon type='Entypo' name="facebook" style={styles.socialIcon} />
              </TouchableOpacity>}
              {this.state.info.instagram != null && <TouchableOpacity onPress={() => this.handleClick(this.state.info.instagram)} >
                <Icon type='Entypo' name="instagram" style={styles.socialIcon} />
              </TouchableOpacity>}
              {this.state.info.twitter != null && <TouchableOpacity onPress={() => this.handleClick(this.state.info.twitter)}>
                <Icon type='Entypo' name="twitter" style={styles.socialIcon} />
              </TouchableOpacity>}
              {this.state.info.snapchat != null && <TouchableOpacity onPress={() => this.handleClick(this.state.info.snapchat)}>
                <Icon type='Foundation' name="social-snapchat" style={styles.socialIcon} />
              </TouchableOpacity>}
              {this.state.info.youtube != null && <TouchableOpacity onPress={() => this.handleClick(this.state.info.youtube)}>
                <Icon type='Entypo' name="youtube" style={styles.socialIcon} />
              </TouchableOpacity>}
            </View>
          </ScrollView>}
        </LinearGradient>
      </View>
    );
  }
}


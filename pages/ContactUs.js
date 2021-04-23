import React, { Component } from 'react';
import { StatusBar, View, Image, Linking, Text, TouchableOpacity, TextInput, ScrollView, Alert, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { blue, orange, white } from '../assets/colors/index'
import { Icon } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoaderBox from './components/LoaderBox';
export const { width: width, height: height } = Dimensions.get('window');
var config = require('./Config.js');

export default class ContactUs extends Component {
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
      info: [],
      name: '',
      email: '',
      mobile: '',
      msg: ''
    }
  };
  async UNSAFE_componentWillMount() { }


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
  async send() { }

  render() {
    return (
      <View>
        <StatusBar backgroundColor={blue} barStyle='light-content' />
        {this.renderLoading()}
        <LinearGradient
          colors={[white, white]}
          style={{ height: '100%' }}
        >
          <ScrollView>
            <View style={styles.AboutUs}>

              <Text style={styles.headerTxt}>{strings.contactTxt}</Text>
              <TextInput
                style={styles.input}
                placeholder={strings.fullName}
                placeholderTextColor='rgba(0, 0, 0, 0.5)'
                onChangeText={text => this.setState({ name: text })}
                defaultValue={this.state.name}
                returnKeyType='next'
                autoCompleteType='name'
              />

              <TextInput
                style={styles.input}
                placeholder={strings.mobileNumber}
                placeholderTextColor='rgba(0, 0, 0, 0.5)'
                onChangeText={text => this.setState({ mobile: text })}
                defaultValue={this.state.mobile}
                returnKeyType='next'
                keyboardType='numeric'
                autoCompleteType='tel'
              />

              <TextInput
                style={styles.input}
                placeholder={strings.email}
                placeholderTextColor='rgba(0, 0, 0, 0.5)'
                onChangeText={text => this.setState({ email: text })}
                defaultValue={this.state.email}
                returnKeyType='next'
                keyboardType='email-address'
                autoCompleteType='email'
              />

              <TextInput
                style={[styles.input, { height: 100 }]}
                placeholder={strings.msg}
                placeholderTextColor='rgba(0, 0, 0, 0.5)'
                onChangeText={text => this.setState({ msg: text })}
                defaultValue={this.state.msg}
                returnKeyType='go'
                multiline={true}
                numberOfLines={10}
              />

              <TouchableOpacity onPress={() => this.send()}>
                <View style={styles.button}>
                  <Text style={styles.headerTxt}>{strings.send }</Text>
                </View>
              </TouchableOpacity>


            

              {/* {!this.state.showProgress && <View style={styles.info2}>
                <TouchableOpacity onPress={() => Linking.openURL(`tel:0776652127`)}>
                  <Text style={styles.headerTxt2}>{'0776652127'}</Text>
                </TouchableOpacity>
              </View>}
              {!this.state.showProgress && <View style={styles.info2}>
                <TouchableOpacity onPress={() => Linking.openURL('mailto:test@test.com')}>
                  <Text style={styles.headerTxt2}>{'test@test.com'}</Text>
                </TouchableOpacity>
              </View>} */}


              <View style={styles.iconView}>
                <TouchableOpacity >
                  <Icon type='Entypo' name="facebook" style={styles.socialIcon} />
                </TouchableOpacity>
                 <TouchableOpacity  >
                  <Icon type='Entypo' name="instagram" style={styles.socialIcon} />
                </TouchableOpacity>
                <TouchableOpacity >
                  <Icon type='Entypo' name="twitter" style={styles.socialIcon} />
                </TouchableOpacity>
               <TouchableOpacity >
                  <Icon type='Foundation' name="social-snapchat" style={styles.socialIcon} />
                </TouchableOpacity>
                <TouchableOpacity >
                  <Icon type='Entypo' name="youtube" style={styles.socialIcon} />
                </TouchableOpacity>
              </View>

            </View>
          </ScrollView>
        </LinearGradient>
      </View>
    );
  }
}


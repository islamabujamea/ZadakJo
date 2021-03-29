import React, { Component } from 'react';
import { StatusBar, View, Image, Linking, Text, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { blue, orange, white } from '../assets/colors/index'
import { Icon } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoaderBox from './components/LoaderBox';

var config = require('./Config.js');

export default class ContactUs extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: () => <Text style={styles.headerTitle}>{strings.ContactUs}</Text>,
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
      info: [],
      name: '',
      email: '',
      mobile: '',
      msg: ''
    }
  };
  async UNSAFE_componentWillMount() {
    this.getInfo()
  }
  async getInfo() {
    this.setState({ showProgress: true })
    var lang = await AsyncStorage.getItem('@Rabaana:lang');
    try {
      let response = await fetch(config.DOMAIN + lang + '/contact-us');
      let res = await response.json();
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
  async send() {

    var lang = await AsyncStorage.getItem('@Rabaana:lang');
    if (this.state.name != '' && this.state.msg != '' && this.state.mobile != '') {
      this.setState({ showProgress: true })
      try {
        let response = await fetch(config.DOMAIN + lang + '/contact-us', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            sender_name: this.state.name,
            mobile: this.state.mobile,
            email: this.state.email,
            message: this.state.msg
          })
        });
        let res = await response.json();
        console.log(res)
        Alert.alert(
          '',
          res.statusCode === 200 ? strings.doneTxt : strings.errorTxt,
          [
            {
              text: strings.cancel,
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel'
            },
            { text: strings.ok, onPress: () => this.setState({ name: '', mobile: '', email: '', msg: '' }) }
          ],

        );
        this.setState({ showProgress: false, });
      } catch (error) {
        this.setState({ error: error });
      }
    } else {
      Alert.alert(
        '',
        strings.fill,
        [
          {
            text: strings.cancel,
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
          },
          { text: strings.ok }
        ],

      );
    }
  }
  render() {
    return (
      <View>
        <StatusBar backgroundColor={blue} barStyle='light-content' />
        {this.renderLoading()}
        <LinearGradient
          colors={[blue, orange]}
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
                  <Text style={styles.headerTxt}>{strings.send + "  |"}</Text>
                  {/* <Image source={require('./images/send.png')} style={styles.send} /> */}
                </View>
              </TouchableOpacity>


              {!this.state.showProgress && <View style={styles.info2}>
                {/* <Image source={require('./images/call.png')} style={[styles.send, { backgroundColor: white, borderRadius: 25 }]} /> */}
                <TouchableOpacity onPress={() => Linking.openURL(`tel:` + this.state.info.phone)}>
                  <Text style={styles.headerTxt2}>{this.state.info.phone}</Text>
                </TouchableOpacity>
              </View>}
              {!this.state.showProgress && <View style={styles.info2}>
                {/* <Image source={require('./images/mobile.png')} style={[styles.send, { backgroundColor: white, borderRadius: 25 }]} /> */}
                <TouchableOpacity onPress={() => Linking.openURL(`tel:` + this.state.info.mobile)}>
                  <Text style={styles.headerTxt2}>{this.state.info.mobile}</Text>
                </TouchableOpacity>
              </View>}
              {!this.state.showProgress && <View style={styles.info2}>
                {/* <Image source={require('./images/msg.png')} style={[styles.send, { backgroundColor: white, borderRadius: 25 }]} /> */}
                <TouchableOpacity onPress={() => Linking.openURL('mailto:' + this.state.info.email)}>
                  <Text style={styles.headerTxt2}>{this.state.info.email}</Text>
                </TouchableOpacity>
              </View>}


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

            </View>
          </ScrollView>
        </LinearGradient>
      </View>
    );
  }
}


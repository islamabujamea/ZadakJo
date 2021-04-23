import React, { Component } from 'react';
import { StatusBar, View, Image, Text, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { orangeLight, gray, orangeDark, blue, white } from '../assets/colors/index'
import AsyncStorage from '@react-native-async-storage/async-storage';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import LoaderBox from './components/LoaderBox';
import { width } from './AboutUs';
import firebase from 'react-native-firebase';

import LinearGradient from 'react-native-linear-gradient';

var config = require('./Config.js');

export default class Forget extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: () => <Text style={styles.headerTxt}>{strings.forget}</Text>,
            headerStyle: styles.headerStyle,
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../images/ic_arrow_back.png')} style={styles.headerIcons} />
                </TouchableOpacity>
            ),
        };
    };
    constructor(props) {
        super(props);
        this.state = {
            showProgress: false,
            value: 0,
            errorTxt: '',
            email: '',
            phone: ''
        }
    };

    renderLoading() {
        if (this.state.showProgress) {
            return <LoaderBox />
        }
    }
    confirm() {
        if (this.state.email != '' || this.state.phone != '') {
            this.setState({ errorTxt: '', showProgress: true })
            firebase
                .auth()
                .signInWithPhoneNumber(this.state.phone)
                .then(confirmResult => {
                    this.setState({ confirmResult })
                    this.props.navigation.push('Confirm', {
                        confirmResult: confirmResult
                    })
                })
                .catch(error => {
                    this.setState({ errorTxt: error.message, showProgress: false });
                    console.log(error)
                })

        } else {
            this.setState({
                errorTxt: strings.fill,
                showProgress: false
            })
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={blue} barStyle='light-content' />
                {this.renderLoading()}
                <Image source={require('../images/forget.png')} style={styles.logoImg} />
                <Text style={[styles.loginInput, { textAlign: 'center', alignSelf: 'center' }]}>{strings.forget}</Text>
                <Text style={[styles.loginInput, { color: gray, textAlign: 'center', alignSelf: 'center' }]}>{strings.forgetTxt}</Text>
                <Text style={styles.errorTxt}>{this.state.errorTxt}</Text>

                <LinearGradient
                    colors={[orangeLight, orangeDark]}
                    style={{ marginVertical: 20, borderRadius: 15, alignSelf: 'center', flexDirection: 'row', padding: 5 }}
                >
                    <TouchableOpacity onPress={() => this.setState({ value: 0 })} style={{ borderBottomColor: white, borderBottomWidth: this.state.value == 0 ? 1 : 0 }}>
                        <Text style={styles.whiteTxt}>{strings.email}</Text>
                    </TouchableOpacity>

                    <Text style={styles.whiteTxt}>{"|"}</Text>

                    <TouchableOpacity onPress={() => this.setState({ value: 1 })} style={{ borderBottomColor: white, borderBottomWidth: this.state.value == 1 ? 1 : 0 }}>
                        <Text style={styles.whiteTxt}> {strings.mobileNumber}</Text>
                    </TouchableOpacity>
                </LinearGradient>
                {this.state.value == 0 &&
                    <View style={styles.loginView}>
                        <Image source={require('../images/EMAIL.png')} style={{ marginHorizontal: 10 }} />
                        <TextInput
                            placeholder={strings.email}
                            style={styles.loginInput}
                            placeholderTextColor={gray}
                            onChangeText={text => this.setState({ email: text })}
                            defaultValue={this.state.email}
                            returnKeyType='next'
                            autoCompleteType='email'
                            keyboardType='email-address'
                        />
                    </View>}
                {this.state.value == 1 &&
                    <View style={styles.loginView}>
                        <Image source={require('../images/phone.png')} style={{ marginHorizontal: 10 }} />
                        <TextInput
                            placeholder={strings.mobileNumber}
                            style={styles.loginInput}
                            placeholderTextColor={gray}
                            onChangeText={text => this.setState({ phone: text })}
                            defaultValue={this.state.phone}
                            returnKeyType='next'
                            autoCompleteType='tel'
                            keyboardType='phone-pad'
                        />
                    </View>}

                <TouchableOpacity onPress={() => this.confirm()}>
                    <LinearGradient
                        colors={[orangeLight, orangeDark]}
                        style={{ marginVertical: 40, width: width * 0.8, borderRadius: 5, alignSelf: 'center' }}
                    >
                        <Text style={styles.sliderTxt}>
                            {strings.done}
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>

        );
    }
}

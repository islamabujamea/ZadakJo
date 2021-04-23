import React, { Component } from 'react';
import { StatusBar, View, Image, Text, TouchableOpacity, TextInput, ScrollView, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { orangeLight, gray, orangeDark } from '../assets/colors/index'
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoaderBox from './components/LoaderBox';
import { width } from './AboutUs';


var config = require('./Config.js');

export default class Register extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: () => <Text style={styles.headerTxt}>{strings.Register}</Text>,
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
            username: '',
            password: '',
            password2: '',
            email: '',
            phone: '',
            errorTxt: ''
        }
    };

    renderLoading() {
        if (this.state.showProgress) {
            return <LoaderBox />
        }
    }
    async Register() {
        if (this.state.username != '' && (this.state.phone != '' || this.state.email != '')) {
            if (this.state.password == this.state.password2 && this.state.password != '' && this.state.password2 != '') {

                this.setState({
                    errorTxt: '', showProgress: true
                })
                this.props.navigation.navigate('Home')
            } else {
                this.setState({
                    errorTxt: strings.passErr

                })
            }
        } else {
            this.setState({
                errorTxt: strings.fill
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden />
                <ImageBackground source={require('../images/login.png')} style={styles.image}>
                    <View style={{ flex: 1, backgroundColor: "#000000a0" }}>
                        <ScrollView>
                            <Image source={require('../images/logo.png')} style={{ alignSelf: 'center', marginVertical: 10, width: 100, height: 100, resizeMode: 'contain' }} />
                            <Text style={styles.loginTxt2} > {strings.Register}</Text>
                            <Text style={styles.errorTxt}>{this.state.errorTxt}</Text>
                            <View style={styles.loginView}>
                                <Image source={require('../images/user.png')} style={{ marginHorizontal: 10 }} />
                                <TextInput
                                    placeholder={strings.username}
                                    style={styles.loginInput}
                                    placeholderTextColor={gray}
                                    onChangeText={text => this.setState({ username: text })}
                                    defaultValue={this.state.username}
                                    returnKeyType='next'
                                    autoCompleteType='username'
                                    keyboardType='name-phone-pad'
                                />
                            </View>
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
                            </View>
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
                            </View>

                            <View style={styles.loginView}>
                                <Image source={require('../images/pass.png')} style={{ marginHorizontal: 10 }} />
                                <TextInput
                                    placeholder={strings.Password}
                                    style={styles.loginInput}
                                    placeholderTextColor={gray}
                                    onChangeText={text => this.setState({ password: text })}
                                    defaultValue={this.state.password}
                                    returnKeyType='go'
                                    autoCompleteType='password'
                                    secureTextEntry={true}
                                />
                            </View>

                            <View style={styles.loginView}>
                                <Image source={require('../images/pass.png')} style={{ marginHorizontal: 10 }} />
                                <TextInput
                                    placeholder={strings.Password2}
                                    style={styles.loginInput}
                                    placeholderTextColor={gray}
                                    onChangeText={text => this.setState({ password2: text })}
                                    defaultValue={this.state.password2}
                                    returnKeyType='go'
                                    autoCompleteType='password'
                                    secureTextEntry={true}
                                />
                            </View>
                            <TouchableOpacity onPress={() => this.Register()}>
                                <LinearGradient
                                    colors={[orangeLight, orangeDark]}
                                    style={{ width: width * 0.8, borderRadius: 5, alignSelf: 'center', marginVertical: 7 }}
                                >
                                    <Text style={styles.sliderTxt}>
                                        {strings.Register}
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                                <Text style={styles.sliderTxt}>{strings.logTxt}</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}


import React, { Component } from 'react';
import { StatusBar, View, Image, Text, TouchableOpacity, TextInput, ImageBackground, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { orangeLight, gray, orangeDark } from '../assets/colors/index'
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoaderBox from './components/LoaderBox';
import { height, width } from './AboutUs';


var config = require('./Config.js');

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showProgress: false,
            username: '',
            password: '',
            errorTxt: ''
        }
    };

    renderLoading() {
        if (this.state.showProgress) {
            return <LoaderBox />
        }
    }
    async Login() {
        if (this.state.username != '' && this.state.password != '') {
            this.setState({
                errorTxt: '', showProgress: true
            })
            this.props.navigation.navigate('Home2')
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
                    <ScrollView>
                        <View style={{ flex: 1, backgroundColor: "#000000a0", height: height }}>
                            <Image source={require('../images/logo.png')} style={styles.logoImg} />
                            <Text style={styles.loginTxt2} > {strings.loginTxt}</Text>
                            <Text style={styles.sliderTxt} > {strings.login}</Text>
                            <Text style={styles.errorTxt}>{this.state.errorTxt}</Text>
                            <View style={styles.loginView}>
                                <Image source={require('../images/user.png')} style={{ marginHorizontal: 10 }} />
                                <TextInput
                                    placeholder={strings.email + '/' + strings.mobileNumber}
                                    style={styles.loginInput}
                                    placeholderTextColor={gray}
                                    onChangeText={text => this.setState({ username: text })}
                                    defaultValue={this.state.username}
                                    returnKeyType='next'
                                    autoCompleteType='username'
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
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Forget')}>
                                <View style={styles.forgetView}>
                                    <Text style={styles.forget}> {strings.forget}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.Login()}>
                                <LinearGradient
                                    colors={[orangeLight, orangeDark]}
                                    style={{ width: width * 0.8, borderRadius: 5, alignSelf: 'center' }}
                                >
                                    <Text style={styles.sliderTxt}>
                                        {strings.loginTxt}
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                                <Text style={[styles.sliderTxt, { marginVertical: 20 }]}>{strings.regTxt}</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>

        );
    }
}

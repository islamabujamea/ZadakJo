import React, { Component } from 'react';
import { StatusBar, View, Image, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { orangeLight, gray, white, orangeDark } from '../assets/colors/index'
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoaderBox from './components/LoaderBox';


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
        } else {
            this.setState({
                errorTxt: strings.fill
            })
        }
    }

    render() {
        return (
            <View style={{ justifyContent: "center", }}>
                <StatusBar backgroundColor={orangeDark} />
                {this.renderLoading()}
                <LinearGradient
                    colors={[orangeDark, orangeLight]}
                    style={styles.linearGradient}
                >
                    <ScrollView>
                        {/* <Image source={require('../images/login.png')} style={styles.loginImg} /> */}
                        <Text style={styles.loginTxt}>{strings.login}</Text>
                        <Text style={styles.errorTxt}>{this.state.errorTxt}</Text>
                        <View style={styles.loginView}>
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
                        <TouchableOpacity onPress={() => this.Login()}>
                            <View style={styles.loginView2}>
                                <Text style={styles.loginInput}>
                                    {strings.loginTxt}
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                            <Text style={styles.loginTxt2}>{strings.regTxt}</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </LinearGradient>


            </View>






        );
    }
}


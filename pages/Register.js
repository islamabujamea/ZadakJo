import React, { Component } from 'react';
import { StatusBar, View, Image, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { orangeLight, gray, white } from '../assets/colors/index'
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoaderBox from './components/LoaderBox';
import RadioButtonRN from 'radio-buttons-react-native';


var config = require('./Config.js');

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showProgress: false,
            username: '',
            password: '',
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
        if (this.state.username != '' && this.state.password != '' && (this.state.phone != '' || this.state.email != '')) {
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
        const data = [
            {
                label: strings.email
            },
            {
                label: strings.mobileNumber
            }
        ];
        return (
            <View style={{ justifyContent: "center", }}>
                <StatusBar backgroundColor={white} />
                {this.renderLoading()}
                <LinearGradient
                    colors={[white, orangeLight]}
                    style={styles.linearGradient}
                >
                    <ScrollView>
                        <Image source={require('../images/reg.png')} style={styles.loginImg} />
                        <Text style={styles.errorTxt}>{this.state.errorTxt}</Text>
                        <View style={styles.loginView}>
                            <TextInput
                                placeholder={strings.fullName}
                                style={styles.loginInput}
                                placeholderTextColor={gray}
                                onChangeText={text => this.setState({ username: text })}
                                defaultValue={this.state.username}
                                returnKeyType='next'
                                autoCompleteType='username'
                            />
                        </View>

                        <RadioButtonRN
                            data={data}
                            initial={1}
                            selectedBtn={(e) => console.log(e)}
                            animationTypes={['pulse', 'rotate']}
                            box={false}
                            style={{ paddingHorizontal: 50, padding: 5 }}
                            textStyle={styles.loginInput}
                        />

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
                        <TouchableOpacity onPress={() => this.Register()}>
                            <View style={styles.loginView2}>
                                <Text style={styles.loginInput}>
                                    {strings.Register}
                                </Text>
                            </View>
                        </TouchableOpacity>

                    </ScrollView>
                </LinearGradient>


            </View>






        );
    }
}


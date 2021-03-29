import React, { Component } from 'react';
import { StatusBar, View, Image, Text, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { orangeLight, gray, orangeDark, blue } from '../assets/colors/index'
import AsyncStorage from '@react-native-async-storage/async-storage';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import LoaderBox from './components/LoaderBox';
import { width } from './AboutUs';

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
        var radio_props = [
            { label: strings.email, value: 0 },
            { label: strings.mobileNumber, value: 1 }
        ];

        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={blue} barStyle='light-content' />
                <Image source={require('../images/forget.png')} style={styles.logoImg} />
                <Text style={styles.loginInput}>{strings.forget}</Text>
                <Text style={[styles.loginInput, { color: gray }]}>{strings.forgetTxt}</Text>
                <View style={{ padding: 10 }}>
                    <RadioForm
                        radio_props={radio_props}
                        initial={0}
                        formHorizontal={true}
                        buttonColor={orangeLight}
                        selectedButtonColor={orangeDark}
                        style={{ alignSelf: 'center' }}
                        labelStyle={[styles.loginInput, {
                            paddingHorizontal: 20,
                            paddingVertical: 5
                        }]}
                        onPress={(value) => { this.setState({ value: value }) }}
                        buttonSize={15}
                    />
                </View>
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

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Confirm')}>
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

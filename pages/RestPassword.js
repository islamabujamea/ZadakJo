import React, { Component } from 'react';
import { StatusBar, View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import { orangeLight, gray, orangeDark, blue } from '../assets/colors/index'
import LoaderBox from './components/LoaderBox';
import { width } from './AboutUs';

import LinearGradient from 'react-native-linear-gradient';

var config = require('./Config.js');

export default class Confirm extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: () => <Text style={styles.headerTxt}>{strings.code}</Text>,
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
    async ResetPass() {
        if (this.state.password == this.state.password2) {
            this.props.navigation.navigate('Home')
        } else {
            this.setState({
                errorTxt: 'كلمة المرور غير متطابقة'
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={blue} barStyle='light-content' />
                <Image source={require('../images/forget.png')} style={styles.logoImg} />
                <Text style={[styles.loginInput, { textAlign: 'center', alignSelf: 'center' }]}>{strings.newPass}</Text>
                <Text style={styles.errorTxt}>{this.state.errorTxt}</Text>

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
                <TouchableOpacity onPress={() => this.ResetPass()}>
                    <LinearGradient
                        colors={[orangeLight, orangeDark]}
                        style={{ marginVertical: 60, width: width * 0.8, borderRadius: 5, alignSelf: 'center' }}
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

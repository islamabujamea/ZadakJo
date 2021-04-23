import React, { Component } from 'react';
import { StatusBar, View, Image, Text, TouchableOpacity, } from 'react-native';
import { orangeLight, gray, orangeDark, blue } from '../assets/colors/index'
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoaderBox from './components/LoaderBox';
import { width } from './AboutUs';
import CodeInput from 'react-native-confirmation-code-input';

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
    async onFulfill(code) {
        console.log('cood ..', code)
        console.log('entered code ..', this.props.navigation.getParam('confirmResult'))
        this.props.navigation.getParam('confirmResult')
            .confirm(code)
            .then(async () => {
                this.props.navigation.navigate('RestPassword')
            }).catch(error => {
                this.setState({
                    errorTxt: 'يرجى كتابة كود صحيح'
                })
                alert(error.message)
                console.log(error)
            })

    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={blue} barStyle='light-content' />
                <Image source={require('../images/code.png')} style={styles.logoImg} />
                <Text style={[styles.loginInput, { textAlign: 'center', alignSelf: 'center' }]}>{strings.code}</Text>
                <Text style={[styles.loginInput, { color: gray, textAlign: 'center', alignSelf: 'center' }]}>{strings.codeTxt}</Text>
                <Text style={styles.errorTxt}>{this.state.errorTxt}</Text>

                <View>
                    <CodeInput
                        ref="codeInputRef1"
                        className={'border-b'}
                        inputPosition='center'
                        onFulfill={(code) => this.onFulfill(code)}
                        inactiveColor={gray}
                        activeColor={orangeDark}
                        codeLength={6}
                        // codeInputStyle={styles.loginInput}
                        containerStyle={{ padding: 20 }}
                    />
                </View>


                <TouchableOpacity onPress={() => this.props.navigation.navigate('Confirm')}>
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

import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Dimensions, Text, I18nManager, Image } from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
export const { width: width, height: height } = Dimensions.get('window');
import { white } from '../assets/colors/index';

import Strings from './Translation.js';
import MainStyle from './style/mainStyle';
import Home from './Home.js';
import AboutUs from './AboutUs.js';
import SplashScreen from './SplashScreen';
import ContactUs from './ContactUs';
import Login from './Login.js';
import Register from './Register.js';
import Forget from './Forget.js';
import Confirm from './Confirm.js';
import RestPassword from './RestPassword.js'
import Slider from './Slider.js';
import { View } from 'react-native';

var IS_RTL = I18nManager.isRTL;

export default class MainNavigator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRTL: IS_RTL,
        }

    }


    render() {

        strings = IS_RTL ? Strings.ar : Strings.enUS
        lang = IS_RTL ? 'ar' : 'en'
        styles = MainStyle.returnStyles(IS_RTL);

        const MainNavigatorNav = createStackNavigator({
            Login: {
                screen: Login,
                navigationOptions: {
                    headerShown: false,
                },
            },
            Register: {
                screen: Register,
                navigationOptions: {
                    headerShown: false,
                },
            },
            Slider: {
                screen: Slider,
                navigationOptions: {
                    headerShown: false
                }
            },
            Forget: {
                screen: Forget,
                navigationOptions: {
                    headerShown: true
                }
            },
            Confirm: {
                screen: Confirm,
                navigationOptions: {
                    headerShown: true
                }
            },
            RestPassword: {
                screen: RestPassword,
                navigationOptions: {
                    headerShown: true
                }
            },

        })

        const DrawerStack = createDrawerNavigator({
            Home: {
                screen: createStackNavigator({
                    Home: {
                        screen: Home,
                    },
                }),
                navigationOptions: {
                    headerShown: false,
                    headerMode: 'noun',
                    drawerLabel: <View style={styles.drawerItems}>
                        <Text style={styles.drawerTxt}>{strings.homeTitle}</Text>
                    </View>,
                },
            },
            AboutUs: {
                screen: createStackNavigator({
                    AboutUs: {
                        screen: AboutUs,
                    },
                }),
                navigationOptions: {
                    drawerLabel: <View style={styles.drawerItems}>
                        <Text style={styles.drawerTxt}>{strings.AboutUs}</Text>
                    </View>,
                },
            },
            ContactUs: {
                screen: createStackNavigator({
                    ContactUs: {
                        screen: ContactUs,

                    },
                }),
                navigationOptions: {
                    headerShown: false,
                    drawerLabel: <View style={styles.drawerItems}>
                        <Text style={styles.drawerTxt}>
                            {strings.ContactUs}
                        </Text>
                    </View>,
                },
            },
        },
            {
                drawerPosition: I18nManager.isRTL ? 'right' : 'left',
                drawerWidth: width * 0.65,
                drawerType: 'front',
                drawerBackgroundColor: 'rgba(255, 255, 255, 0',
                contentOptions: {
                    activeTintColor: white,
                    activeBackgroundColor: white,
                    itemsContainerStyle: {
                        backgroundColor: '#fff',
                        marginTop: 50,
                        paddingTop: 100,
                        borderRadius: 25,
                        overflow: 'hidden',
                        height: height * 0.88
                    },

                },

            }
        );

        const RootNavigator = createAppContainer(
            createSwitchNavigator(
                {
                    AuthLoading: SplashScreen,
                    App: DrawerStack,
                    Auth: MainNavigatorNav,
                }
            ));

        return (<RootNavigator />);

    }
}


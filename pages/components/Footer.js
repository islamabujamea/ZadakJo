import React, { Component } from 'react';
import {
    TouchableOpacity,
    Image,
    Platform
} from 'react-native';
import { Footer, FooterTab, } from 'native-base';
import { white } from '../../assets/colors';

export default class FooterBox extends Component {
    render() {
        return (
            <Footer>
                <FooterTab style={{
                    backgroundColor: white, overflow: 'hidden', flexDirection: 'row', padding: 10, alignItems: 'center', ...Platform.select({
                        ios: {
                            shadowColor: '#707070',
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                        },
                        android: {
                            shadowColor: '#707070',
                            shadowOpacity: 0.26,
                            shadowOffset: { width: 0, height: 5 },
                            elevation: 15,
                        },
                    }),
                }}>
                    <TouchableOpacity onPress={() => this.props.nav.navigate('Home2')}>
                        <Image source={this.props.page == 'home' ? require('../../images/home2.png') : require('../../images/home.png')} style={{ marginHorizontal: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.nav.navigate('Fav')}>
                        <Image source={this.props.page == 'fav' ? require('../../images/fav2.png') : require('../../images/fav.png')} style={{ marginHorizontal: 10 }} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.nav.navigate('MyAccount')}>
                        <Image source={this.props.page == 'account' ? require('../../images/account2.png') : require('../../images/account.png')} style={{ marginHorizontal: 10 }} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.nav.navigate('Sort')}>
                        <Image source={this.props.page == 'sort' ? require('../../images/sort2.png') : require('../../images/sort.png')} style={{ marginHorizontal: 10 }} />
                    </TouchableOpacity>
                </FooterTab>
            </Footer>
        );
    }
}

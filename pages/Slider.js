import React, { Component } from 'react';
import { StatusBar, ScrollView, TouchableOpacity, View, Platform, Image, Dimensions, Text } from 'react-native';
import { IndicatorViewPager, PagerDotIndicator, } from 'react-native-best-viewpager';
import { gray, white, blue } from '../assets/colors';

export const { width, height } = Dimensions.get('window');

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showProgress: false,
            pagenum: Platform.OS == 'ios' ? 1 : 0,
            data: [
                {
                    image: require('../images/slider1.png'),
                    id: 1
                },
                {
                    image: require('../images/slider2.png'),
                    id: 2
                },
            ]
        }
    };


    _renderDotIndicator() {
        return <PagerDotIndicator
            pageCount={this.state.data.length}
            dotStyle={styles.dotStyle}
            selectedDotStyle={styles.selectedDotStyle}
        />;
    }
    onPageSelected(e) {
        this.setState({ pagenum: this.state.pagenum < this.state.data.length ? this.state.pagenum + 1 : this.state.pagenum });
        console.log('state is: ' + this.state.pagenum)
    }

    render() {
        var list = []
        if (this.state.data.length > 0) {
            list = this.state.data.map((val, key) => {
                return <View key={key}>
                    <Image
                        style={styles.sliderImg}
                        source={val.image}

                    />
                </View>
            });
        }
        return (
            <ScrollView style={{ backgroundColor: white }}>
                <StatusBar hidden />
                <IndicatorViewPager
                    style={styles.indicator}
                    indicator={this._renderDotIndicator()}
                    onPageSelected={this.onPageSelected.bind(this)}
                    ref={viewPager => { this.viewPager = viewPager; }}
                >
                    {list}

                </IndicatorViewPager>
                <Text style={[styles.loginInput, { textAlign: 'center', width: width * 0.9, alignSelf: 'center', padding: 10 }]}>{"تطبيق زادك "}</Text>
                <Text style={[styles.loginInput, { color: gray, textAlign: 'center', width: width * 0.9, alignSelf: 'center', padding: 5 }]}>{"تطبيق زادك لجميع انواع المأكولات ، رفيقك الدائم في المطبخ "}</Text>
                <View style={styles.sliderTxt2}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={[styles.loginInput, { color: blue, textAlign: 'right', width: width * 0.9, padding: 20, alignSelf: 'center' }]}>{strings.skip}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}


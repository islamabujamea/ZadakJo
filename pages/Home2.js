import React, { Component } from 'react';
import { StatusBar, View, Text, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import { blue, orangeDark, orangeLight, white, } from '../assets/colors/index'
import LoaderBox from './components/LoaderBox';
import Footer from './components/Footer';
export const { width, height } = Dimensions.get('window');

var config = require('./Config.js');

export default class Home extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: () =>
                <View style={{ width: width * 0.35 }}>
                    <Image source={require('../images/header-logo.png')} style={{ alignSelf: 'flex-end' }} />
                </View>,
            headerStyle: styles.headerStyle,
            headerLeft: () =>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <View>
                        <Image source={require('../images/menu.png')} style={{ marginHorizontal: 20 }} />
                    </View>
                </TouchableOpacity>,
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            showProgress: false,
            data: [
                {
                    id: 1,
                    name: 'ثوم',
                    image: require('../images/Garlic.png')
                },
                {
                    id: 2,
                    name: 'بصل',
                    image: require('../images/Onions.png')
                },
                {
                    id: 3,
                    name: 'ارز',
                    image: require('../images/Rice.png')
                },
                {
                    id: 4,
                    name: 'جزر',
                    image: require('../images/Carrots.png')
                },
            ],
            data2: [
                {
                    id: 1,
                    image: require('../images/cook1.png'),
                    name: 'مقلوبة',
                    rate: 4.9,
                    prep: '١٠ د',
                    cook: '٣٠ د',
                    cal: '٥٠٠ سعرة حرارية'
                },
                {
                    id: 2,
                    image: require('../images/cook1.png'),
                    name: 'بيتزا',
                    rate: 4.9,
                    prep: '١٠ د',
                    cook: '٣٠ د',
                    cal: '٥٠٠ سعرة حرارية'
                },
                {
                    id: 1,
                    image: require('../images/cook1.png'),
                    name: 'مقلوبة',
                    rate: 4.9,
                    prep: '١٠ د',
                    cook: '٣٠ د',
                    cal: '٥٠٠ سعرة حرارية'
                },
                {
                    id: 2,
                    image: require('../images/cook1.png'),
                    name: 'بيتزا',
                    rate: 4.9,
                    prep: '١٠ د',
                    cook: '٣٠ د',
                    cal: '٥٠٠ سعرة حرارية'
                },
            ]
        }

    };

    renderLoading() {
        if (this.state.showProgress) {
            return <LoaderBox />
        }
    }

    async UNSAFE_componentWillMount() { }



    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ backgroundColor: white, width: width }}>
                        <TouchableOpacity>
                            <View style={{ marginVertical: 20, width: width * 0.9, alignSelf: 'center', backgroundColor: "#000000a0", borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                                <Image source={require('../images/pizza.png')} style={{ width: '100%', height: height * 0.2, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                                <View style={{ backgroundColor: '#E86102' }}>
                                    <Text style={styles.whiteTxt}>{"قائمة الوصفات"}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ marginVertical: 20, width: width * 0.9, alignSelf: 'center', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                                <Image source={require('../images/pizza2.png')} style={{ width: '100%', height: height * 0.2, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                                <View style={{ backgroundColor: '#E86102' }}>
                                    <Text style={styles.whiteTxt}>{"وصفات للقيام به"}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginVertical: 10, width: width, padding: 10, backgroundColor: white }}>
                        <View style={{ width: width * 0.9, alignSelf: 'center' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.grayxt}>
                                    {"إدارة المكوّنات الخاصة بي"}
                                </Text>
                                <TouchableOpacity>
                                    <Text style={styles.orangeTxt}>
                                        {"مشاهدة الكل"}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ paddingVertical: 10 }}>
                                <ScrollView horizontal={true} >
                                    {this.state.data.map((val, key) => {
                                        return <View style={{ justifyContent: 'center', alignSelf: 'center', alignContent: 'center' }}>
                                            <Image source={val.image} style={{ marginHorizontal: 5, height: 100, width: 100, borderRadius: 15 }} resizeMode='cover' />
                                            <Image source={require('../images/add.png')} style={{ position: 'absolute', bottom: 25, alignSelf: 'center' }} />
                                            <Text style={[styles.grayxt, { textAlign: 'center', marginTop: 10 }]}>{val.name}</Text>
                                        </View>
                                    })}
                                </ScrollView>
                            </View>
                        </View>

                    </View>
                    <View style={{ marginVertical: 5, width: width, padding: 10, backgroundColor: white }}>
                        <View style={{ width: width * 0.9, alignSelf: 'center', }}>
                            <View style={{}}>
                                <Text style={styles.grayxt}>
                                    {"وصفات"}
                                </Text>
                            </View>
                            <View style={{ paddingVertical: 10 }}>
                                <ScrollView horizontal={true} >
                                    {this.state.data2.map((val, key) => {
                                        return <View style={{ justifyContent: 'center', alignSelf: 'center', alignContent: 'center', borderColor: '#F0F0F0', borderWidth: 0.5, borderRadius: 15, marginHorizontal: 5, padding: 10 }}>
                                            <Image source={val.image} style={{ marginHorizontal: 5, height: 100, width: 150, borderRadius: 15 }} resizeMode='cover' />
                                            <Text style={[styles.grayxt, { textAlign: 'center', marginTop: 10 }]}>{val.name}</Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Image source={require('../images/rate.png')} />
                                                <Text style={[styles.grayxt, { fontSize: 12, paddingHorizontal: 5 }]}>{val.rate}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Image source={require('../images/time.png')} />
                                                <Text style={[styles.grayxt, { fontSize: 12, paddingHorizontal: 5 }]}>{"تجهيز :" + val.prep}</Text>
                                                <Text style={[styles.grayxt, { fontSize: 12, paddingHorizontal: 5 }]}>{"طبخ  :" + val.cook}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Image source={require('../images/fire.png')} />
                                                <Text style={[styles.grayxt, { fontSize: 12, paddingHorizontal: 5 }]}>{val.cal}</Text>
                                            </View>
                                        </View>
                                    })}
                                </ScrollView>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={{ backgroundColor: white, }}>
                    <Footer page='home' nav={this.props.navigation} />
                </View>
            </View>
        );
    }
}


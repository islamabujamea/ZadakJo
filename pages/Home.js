import React, { Component } from 'react';
import { StatusBar, View, Text, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import { blue, white, } from '../assets/colors/index'
import LoaderBox from './components/LoaderBox';
import ModalDropdown from 'react-native-modal-dropdown';
export const { width, height } = Dimensions.get('window');
import { Icon } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';

var config = require('./Config.js');
const DEMO_OPTIONS_2 = [
  {
    id: 1,
    name: "خضراوات",
    total: 10,
    image: require('../images/veg.jpg'),
    list: [
      {
        id: 1,
        name: 'خيار',
        image: require('../images/Unknown.jpg'),
      },
      {
        id: 2,
        name: 'بطاطا',
        image: require('../images/potatoes.jpg'),
      },
    ]
  },
  {
    id: 2,
    name: "فواكة",
    total: 30,
    image: require('../images/tbl.jpg'),
    list: [
      {
        id: 3,
        name: 'تفاح',
        image: require('../images/apple.jpg'),
      },
      {
        id: 4,
        name: 'اناناس',
        image: require('../images/ananas.jpg'),
      },
      {
        id: 5,
        name: 'بطيخ',
        image: require('../images/apple.jpg'),
      },
      {
        id: 6,
        name: 'شمام',
        image: require('../images/ananas.jpg'),
      },
    ]
  },
];
export default class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: () => <Text style={styles.headerTxt}>{"تعريف المكونات"}</Text>,
      headerStyle: styles.headerStyle,
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      showProgress: false,
      selected: -1,
      showDiv: false,
      selectedList: []
    }

  };

  renderLoading() {
    if (this.state.showProgress) {
      return <LoaderBox />
    }
  }

  async UNSAFE_componentWillMount() {
  }


  _dropdown_2_renderRow(rowData, rowID, highlighted) {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 5, width: width * 0.7, }}>
        <Image style={{ width: 100, height: 100, margin: 10, borderRadius: 5 }}
          source={rowData.image}
        />
        <Text style={styles.homeTxt}>
          {rowData.name}
        </Text>
        <Text style={styles.homeTxt}>
          {"(" + rowData.total + ")"}
        </Text>
      </View>
    );
  }
  _dropdown_4_onSelect(idx, value) {
    console.log(`idx=${idx}, value='${value.id}'`);
    this.setState({ selected: idx, showDiv: !this.state.showDiv })
  }
  render() {
    return (
      <View style={{ backgroundColor: white, flex: 1 }}>
        <ScrollView style={{ backgroundColor: white }}>
          <StatusBar backgroundColor={blue} barStyle='light-content' />
          {this.renderLoading()}
          <Text style={styles.homeTxt} > {"الرجاء اختيار المكونات التي لديك ؟ "}</Text>
          <View style={{ alignItems: 'center', flexDirection: 'row', width: width * 0.9, justifyContent: 'space-between' }}>
            <View style={{ width: width * 0.25 }}>
              <Text style={[styles.homeTxt, { textAlign: 'center' }]} > {"الصنف"}</Text>
            </View>
            <View style={{ width: width * 0.7 }}>
              <ModalDropdown
                style={{ padding: 5, borderColor: blue, borderWidth: 1, borderRadius: 5 }}
                defaultValue={'الرجاء اختيار المكون المتوفر ..'}
                textStyle={styles.homeTxt}
                options={DEMO_OPTIONS_2}
                renderRow={this._dropdown_2_renderRow.bind(this)}
                dropdownStyle={{ marginLeft: 75, marginTop: 10, borderRadius: 5 }}
                onSelect={
                  (idx, value) => {
                    this._dropdown_4_onSelect(idx, value)
                  }}
                renderButtonText={(rowData) =>
                  <Text style={styles.homeTxt}>
                    {rowData.name}
                  </Text>
                } />
            </View>
          </View>
          <ScrollView>
            <View style={{ marginVertical: 20, padding: 10, width: width * 0.9, alignSelf: 'center' }}>
              {this.state.selected != -1 && DEMO_OPTIONS_2[this.state.selected].list.map((val, key) => {
                return (
                  <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomColor: blue, borderBottomWidth: 1 }}>
                    <View style={{ width: width * 0.2 }}>
                      <Image source={val.image} style={{ width: 100, height: 100, margin: 10, borderRadius: 5 }} />

                    </View>
                    <View style={{ width: width * 0.55 }}>
                      <Text style={styles.homeTxt}>
                        {val.name}
                      </Text>
                    </View>
                    <TouchableOpacity onPress={() => {
                      this.state.selectedList.push(val.id)
                      this.setState({
                        x: 1
                      })
                    }}>

                      {this.state.selectedList.find(item => item == val.id) != val.id && <View style={{ width: width * 0.15 }}>
                        <Image source={require('../images/add.png')} />
                      </View>}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                      this.state.selectedList.splice(this.state.selectedList.indexOf(val.id))
                      this.setState({
                        x: 1
                      })
                    }}>
                      {this.state.selectedList.find(item => item == val.id) == val.id && <View style={{ width: width * 0.15, justifyContent: 'center' }}>
                        <Icon name='remove-circle' type='Ionicons' style={{ color: '#FF6076', fontSize: 35, alignSelf: 'flex-start' }} />
                      </View>}
                    </TouchableOpacity>

                  </View>
                )
              })}
            </View>
          </ScrollView>

        </ScrollView>
        <View style={{ backgroundColor: white, marginVertical: 20 }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home2')}>
            <LinearGradient
              colors={[blue, blue]}
              start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
              style={{ width: width * 0.8, borderRadius: 5, alignSelf: 'center', borderWidth: 1, borderColor: blue }}
            >
              <Text style={styles.sliderTxt}>
                {"تخطى"}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


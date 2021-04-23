import { Component } from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native';
import { BoldFont } from '../../assets/fonts/index';
import { orangeDark, white, blue, black, gray, orangeLight } from '../../assets/colors/index'
export const { width, height } = Dimensions.get('window');


export default class MainStyle extends Component {
  static returnStyles(IS_RTL) {
    styles = StyleSheet.create({
      linearGradient: {
        width: width,
        height: height
      },
      loader: {
        ...StyleSheet.absoluteFillObject,
        width: 70,
        height: 70,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        left: '50%',
        marginLeft: -35,
        top: '50%',
        bottom: 0,
        marginTop: -35,
        zIndex: 10,
      },
      loginTxt: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: BoldFont,
        marginTop: width * 0.3,
        color: white,
      },
      errorTxt: {
        textAlign: 'center',
        fontSize: 14,
        fontFamily: BoldFont,
        color: 'red'
      },
      loginTxt2: {
        textAlign: 'center',
        fontSize: 22,
        marginTop: width * 0.01,
        fontFamily: BoldFont,
        color: white
      },
      loginInput: {
        fontSize: 14,
        fontFamily: BoldFont,
        textAlign: 'right',
        width: width * 0.7
      },
      input: {
        height: 50,
        backgroundColor: white,
        color: orangeLight,
        borderRadius: 25,
        fontFamily: BoldFont,
        fontSize: 14,
        paddingHorizontal: 20,
        marginVertical: 10,
        borderColor: blue,
        borderWidth: 1,
        width: width * 0.9, alignSelf: 'center'
      },
      socialIcon: {
        fontSize: 25,
        color: blue
      },
      iconView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignSelf: 'center',
        width: width * 0.5,
        marginVertical: 20
      },
      homeTxt: {
        fontSize: 16,
        fontFamily: BoldFont,
        textAlign: 'center',
        padding: 10
      },
      loginView: {
        marginTop: 10,

        alignItems: 'center',
        ...Platform.select({
          ios: {
            shadowColor: black,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          },
          android: {
            shadowColor: black,
            shadowOpacity: 0.26,
            shadowOffset: { width: 0, height: 5 },
            shadowRadius: 10,
            elevation: 8,
            backgroundColor: black,
          },
        }),
        padding: 3,
        backgroundColor: '#fff',
        width: width * 0.8,
        alignSelf: 'center',
        borderRadius: 5,
        flexDirection: 'row',
      },
      loginView2: {
        marginTop: width * 0.1,
        ...Platform.select({
          ios: {
            shadowColor: black,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          },
          android: {
            shadowColor: black,
            shadowOpacity: 0.26,
            shadowOffset: { width: 0, height: 5 },
            shadowRadius: 10,
            elevation: 8,
            backgroundColor: black,
          },
        }),
        padding: 5,
        backgroundColor: '#fff',
        width: width * 0.5,
        alignSelf: 'center',
        borderRadius: 25
      },
      loginImg: {
        width: width,
        alignSelf: 'center',
        resizeMode: 'contain',
      },
      sliderImg: {
        width: width,
        alignSelf: 'center',
        flex: 1,
        resizeMode: 'cover',
      },
      indicator: {
        height: height * 0.78
      },
      dotStyle: {
        backgroundColor: gray,
        width: 10,
        height: 10,
        borderRadius: 5,
      },
      selectedDotStyle: {
        backgroundColor: orangeLight,
        width: 10,
        height: 10,
        borderRadius: 5,
      },
      sliderTxt: {
        padding: 10,
        color: white,
        textAlign: 'center',
        fontFamily: BoldFont,
        fontSize: 18
      },
      whiteTxt: {
        padding: 8,
        color: white,
        textAlign: 'center',
        fontFamily: BoldFont,
        fontSize: 15
      },
      grayxt: {
        color: gray,
        fontFamily: BoldFont,
        fontSize: 18
      },
      orangeTxt: {
        color: '#FC6011',
        fontFamily: BoldFont,
        fontSize: 15
      },
      headerTxt: {
        color: white,
        fontFamily: BoldFont,
        fontSize: 18
      },
      drawerTxt: {
        color: blue,
        fontFamily: BoldFont,
        fontSize: 18
      },
      sliderTxt2: {
        padding: 10,
        flexDirection: 'row',
        width: width * 0.9,
        justifyContent: 'space-between',
        alignSelf: 'center'
      }
      , container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: white
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
      forget: {
        fontFamily: BoldFont,
        textAlign: 'right',
        paddingVertical: 20,
        color: white
      },
      forgetView: {
        width: width * 0.8,
        alignSelf: 'center'
      },
      headerStyle: {
        backgroundColor: blue,
      },
      headerIcons: {
        marginHorizontal: 10,
      },
      logoImg: { alignSelf: 'center', marginVertical: 20 },
      drawerItems: {
        margin: 20
      },
      headerTxt2: {
        color: blue,
        fontFamily: BoldFont,
        fontSize: 16,
        padding: 5

      },
      info2: {
        flexDirection: 'row',
        width: 180,
        marginVertical: 5
      },
      button: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: 15,
        width: 90,
        height: 40,
        padding: 5,
        backgroundColor: orangeLight,
        alignItems: 'center',
        alignSelf: 'center',
      },
    });




    return styles;
  }
}

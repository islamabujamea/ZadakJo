import { Component } from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native';
import { BoldFont } from '../../assets/fonts/index';
import { orangeDark, white, black } from '../../assets/colors/index'
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
        color: white
      },
      errorTxt: {
        textAlign: 'center',
        fontSize: 14,
        fontFamily: BoldFont,
        color: 'red'
      },
      loginTxt2: {
        textAlign: 'center',
        fontSize: 16,
        marginTop: width * 0.05,
        fontFamily: BoldFont,
        color: white
      },
      loginInput: {
        textAlign: 'center',
        fontSize: 16,
        fontFamily: BoldFont,
      },
      loginView: {
        marginTop: width * 0.05,
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
        borderRadius: 25
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




    });




    return styles;
  }
}

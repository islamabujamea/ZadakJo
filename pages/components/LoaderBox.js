import React, { Component } from 'react';
import { Image } from 'react-native';


export default class LoaderBox extends Component {
    render() {
        return <Image
            source={require('../../images/Spinner.gif')}
            style={styles.loader}
        />;
    }
}

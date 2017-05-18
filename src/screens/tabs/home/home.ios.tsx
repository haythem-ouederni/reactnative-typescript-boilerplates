/**
 * @flow
 */

'use strict';

import React, {Component} from 'react';
import {Text, Button, View} from 'native-base';
import {homeStyles as styles} from './home.styles.ios';

var pressBro = () => {
    alert('tourout');
};

interface Props {}
interface State {}

export class Home extends Component < Props, State > {

    // props = { }; props = {     title : "bobo",     button : {         title :
    // 'Pressez moi'     } };

    render() {

        return (
            <View style={styles.container}>

                <Text style={styles.welcome}>
                    Welcome to React Native !
                </Text>
                <Text style={styles.instructions}>
                    To get started yes, edit index.ios.js
                </Text>

                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload, {'\n'}
                    Shake or press menu button for dev menu sos
                </Text>
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} onPress={pressBro}>
                        <Text>Press me</Text>
                    </Button>
                </View>
                <View style={styles.buttonContainer}>
                    <Button style={styles.button2} onPress={pressBro}>
                        <Text>Toto me</Text>
                    </Button>
                </View>

            </View>

        );
    }
}

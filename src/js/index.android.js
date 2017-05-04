/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {Text, Button, View} from 'native-base';

var pressBro = () => {
    alert('tourout');
}

export default class RNTestProject extends Component {

    // props = { }; props = {     title : "bobo",     button : {         title :
    // 'Pressez moi'     } };

    render() {

        return (
            <View style={styles.container}>

                <Text style={styles.welcome}>
                    Welcome to React Native !
                </Text>
                <Text style={styles.instructions}>
                    To get started yes, edit index.android.js
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

            </View>

        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
    buttonContainer: {
        alignItems: 'center'
    },
    button: {
        marginTop: 35,
        backgroundColor: '#333333',
        shadowColor: 'blue',
        shadowOffset: {
            width: 0,
            height: 3
        },
        // width: 100, height: 60,
        shadowRadius: 50,
        shadowOpacity: 0.8,
        borderRadius: 50

    }
};

AppRegistry.registerComponent('RNTestProject', () => RNTestProject);
/**
 */

'use strict';

import React from 'react';
import {Text, Button, View} from 'native-base';
import {homeStyles as styles} from './home.styles.android';
import {HomeCommun} from './home-commun';

export class Home extends HomeCommun {

    constructor(props) {
        super(props);

    }

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
                    <Button style={styles.button} onPress={this.pressBro}>
                        <Text>Press me</Text>
                    </Button>
                </View>
                <View style={styles.buttonContainer}>
                    <Button style={styles.button2} onPress={this.goToSimpleScreen}>
                        <Text>Go to simple screen</Text>
                    </Button>
                </View>

            </View>

        );
    }
}

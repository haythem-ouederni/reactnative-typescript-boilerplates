/**
 */

'use strict';

import React, {Component} from 'react';
import {Text, Button, View} from 'native-base';
import {homeStyles as styles} from './home.styles.android';
import {Navigator} from 'react-native-navigation';

var pressBro = () => {
    alert('tourout');
};

interface Props {
    navigator?: Navigator
}

interface State {}

export class Home extends Component < Props, State > {

    constructor(props) {
        super(props);

        // this.onNavigatorEvent will be our handler
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent = (event) => {
        if(event.id === 'willAppear'){
            // because of a bug on android we hide the tabs before displaying them
            this
                .props
                .navigator
                .toggleTabs({
                    to: 'hidden', // required, 'hidden' = hide tab bar, 'shown' = show tab bar
                    animated: false // does the toggle have transition animation or does it happen immediately (optional)
                });
            this
                .props
                .navigator
                .toggleTabs({
                    to: 'shown', // required, 'hidden' = hide tab bar, 'shown' = show tab bar
                    animated: false // does the toggle have transition animation or does it happen immediately (optional)
                });
        }
    };

    goToSimpleScreen = () => {
        // go to the new screen
        this
            .props
            .navigator
            .push({screen: 'screens.simpleScreen', title: 'Simple screen'});
    };

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
                <View style={styles.buttonContainer}>
                    <Button style={styles.button2} onPress={this.goToSimpleScreen}>
                        <Text>Go to simple screen</Text>
                    </Button>
                </View>

            </View>

        );
    }
}

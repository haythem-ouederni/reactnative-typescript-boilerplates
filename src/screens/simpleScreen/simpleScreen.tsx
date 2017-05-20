/**
 */

'use strict';

import React, {Component} from 'react';
import {Text, View, Button} from 'native-base';
import {Navigator} from 'react-native-navigation';

interface Props {
    navigator?: Navigator
}

interface State {}

export class SimpleScreen extends Component < Props, State > {

    constructor(props) {
        super(props);

        // this.onNavigatorEvent will be our handler
        this
            .props
            .navigator
            .setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    onNavigatorEvent = (event) => {
        if (event.id === 'willAppear') {
            // hide the tabs
            this
                .props
                .navigator
                .toggleTabs({
                    to: 'hidden', // required, 'hidden' = hide tab bar, 'shown' = show tab bar
                    animated: false // does the toggle have transition animation or does it happen immediately (optional)
                });
        }
    };

    displayTabs = () => {
        this
            .props
            .navigator
            .toggleTabs({
                to: 'shown', // required, 'hidden' = hide tab bar, 'shown' = show tab bar
                animated: false // does the toggle have transition animation or does it happen immediately (optional)
            });
    };

    hideTabs = () => {
        this
            .props
            .navigator
            .toggleTabs({
                to: 'hidden', // required, 'hidden' = hide tab bar, 'shown' = show tab bar
                animated: false // does the toggle have transition animation or does it happen immediately (optional)
            });
    };

    style = {}

    render() {
        return (
            <View>
                <Text>Welcome to first screen</Text>
                <View>
                    <Button style={this.style} onPress={this.displayTabs}><Text>Show tabs</Text></Button>
                </View>
                <View>
                    <Button style={this.style} onPress={this.hideTabs}><Text>Hide tabs</Text></Button>
                </View>
            </View>
        );
    }
}
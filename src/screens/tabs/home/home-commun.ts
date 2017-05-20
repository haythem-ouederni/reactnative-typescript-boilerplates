/**
 */

'use strict';

import {Component} from 'react';
import {Navigator} from 'react-native-navigation';
import {Alert} from 'react-native';

interface Props {
    navigator?: Navigator
}

interface State {}

export class HomeCommun extends Component < Props, State > {

    constructor(props) {
        super(props);

        // this.onNavigatorEvent will be our handler
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    // method handling the navigation events
    onNavigatorEvent = (event) => {
        if(event.id === 'willAppear'){
            // we make sure that the tabs are displayed when entering the screen

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

    pressBro = () => {
        Alert.alert('i am pressed');
    };

}

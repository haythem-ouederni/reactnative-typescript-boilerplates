/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, {Component} from 'react';
import {ViewStyle, TextStyle} from 'react-native';
import {Text, Button, View} from 'native-base';
import {Navigation} from 'react-native-navigation';

var pressBro = () => {
    alert('tourout');
};

interface Props {}
interface State {}

export default class RNTestProject extends Component < Props, State > {

    // props = { }; props = {     title : "bobo",     button : {         title :
    // 'Pressez moi'     } };

    render() {

        return (
            <View style={styles.container}>

                <Text style={styles.welcome}>
                  Welcome to React Native !
                </Text>
                <Text style={styles.instructions}>
                  IOS
                </Text>
                <Text style={styles.instructions}>
                  To get started yes, edit index.ios.tsx
                </Text>

                <Text style={styles.instructions}>
                  Press Cmd+R to reload,{'\n'}
                  Cmd+D or shake for dev menu
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

export class RNTestProject2 extends Component <Props,State> {

    // props = { }; props = {     title : "bobo",     button : {         title :
    // 'Pressez moi'     } };

    render() {

        return (
            <View style={styles.container}>

                <Text style={styles.welcome}>
                    Second tab bro
                </Text>
                <Text style={styles.instructions}>
                    android
                </Text>

                <View style={styles.buttonContainer}>
                    <Button style={styles.button} onPress={pressBro}>
                        <Text>Bip me</Text>
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
    } as ViewStyle,
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    } as TextStyle,
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    } as TextStyle,
    buttonContainer: {
        alignItems: 'center'
    } as ViewStyle,
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

Navigation.registerComponent('react-native-navigation-bootstrap', () => RNTestProject);
Navigation.registerComponent('react-native-navigation-bootstrap2', () => RNTestProject2);
// Navigation.startSingleScreenApp({   screen: {     screen:
// 'react-native-navigation-bootstrap',     title: 'Navigation Bootstrap'   }
// });
Navigation.startTabBasedApp({
    tabs: [
        {
            label: 'One',
            screen: 'react-native-navigation-bootstrap',
            icon: require('./assets/img/one.png'),
            selectedIcon: require('./assets/img/one_selected.png'),
            title: 'Screen One'
        }, {
            label: 'two',
            screen: 'react-native-navigation-bootstrap2',
            icon: require('./assets/img/two.png'),
            selectedIcon: require('./assets/img/two_selected.png'),
            title: 'Screen two',
            navigatorStyle : {
              tabBarBackgroundColor: '#4dbce9'
            }
        }
    ],
    // tabsStyle: { // optional, add this if you want to style the tab bar beyond the defaults
    //     tabBarButtonColor: '#aab8c2', // optional, change the color of the tab icons and text (also unselected)
    //     tabBarSelectedButtonColor: '#4080ff',//'#4080ff', // optional, change the color of the selected tab icon and text (only selected)
    //     tabBarBackgroundColor: 'white' // optional, change the background color of the tab bar
    // },
    tabsStyle : {
      tabBarBackgroundColor: '#0f2362',
      tabBarButtonColor: '#ffffff',
      tabBarSelectedButtonColor: '#63d7cc',
      tabFontFamily: 'BioRhyme-Bold',
      forceTitlesDisplay: true,
      orientation: 'portrait' // Sets a specific orientation to the entire app. Default: 'auto'. Supported values: 'auto', 'landscape', 'portrait'
    },
    appStyle: {
        orientation: 'portrait' // Sets a specific orientation to the entire app. Default: 'auto'. Supported values: 'auto', 'landscape', 'portrait'
    },
    passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
    animationType: 'slide-down'
});
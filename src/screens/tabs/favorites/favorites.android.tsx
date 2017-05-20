/**
 */

'use strict';

import React, {Component} from 'react';
import {Text, Button, View} from 'native-base';
import {favoriteStyles as styles} from './favorites.styles.android';


var pressBro = () => {
    alert('tourout');
};

interface Props {}
interface State {}

export class Favorites extends Component < Props, State > {

    // props = { }; props = {     title : "bobo",     button : {         title :
    // 'Pressez moi'     } };

    render() {

        return (
            <View style={styles.container}>

                <Text style={styles.welcome}>
                    Second tab bro
                </Text>
                <Text style={styles.instructions}>
                    ANDROID
                </Text>

                <View style={styles.buttonContainer}>
                    <Button style={styles.button} onPress={pressBro}>
                        <Text>Bip me</Text>
                    </Button>
                </View>

                <View style={styles.buttonContainer}>

                    <Button style={styles.button2} onPress={pressBro}>
                        <Text>Second tap</Text>
                    </Button>
                </View>

            </View>

        );
    }
}
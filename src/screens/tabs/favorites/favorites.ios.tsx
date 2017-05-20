/**
 */

'use strict';

import React from 'react';
import {Text, Button, View} from 'native-base';
import {favoriteStyles as styles} from './favorites.styles.ios';
import {FavoritesCommun} from './favorites-commun';


export class Favorites extends FavoritesCommun {

    render() {

        return (
            <View style={styles.container}>

                <Text style={styles.welcome}>
                    Second tab bro
                </Text>
                <Text style={styles.instructions}>
                    iOS
                </Text>

                <View style={styles.buttonContainer}>
                    <Button style={styles.button} onPress={this.pressBro}>
                        <Text>Bip me</Text>
                    </Button>
                </View>

                <View style={styles.buttonContainer}>

                    <Button style={styles.button2} onPress={this.pressBroSecond}>
                        <Text>Second tap</Text>
                    </Button>
                </View>

            </View>

        );
    }
}
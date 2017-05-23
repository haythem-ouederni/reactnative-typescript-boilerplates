/**
 */

'use strict';

import React from 'react';
import {Text, Button, View} from 'native-base';
import {favoriteStyles as styles} from './favorites.styles.ios';
import {FavoritesCommun} from './favorites-commun';
import I18n from '../../../i18n/tabs/favorites';


export class Favorites extends FavoritesCommun {

    render() {

        return (
            <View style={styles.container}>

                <Text style={styles.welcome}>
                    {I18n.t('favoriteTab.content.title')}
                </Text>
                <Text style={styles.instructions}>
                    iOS
                </Text>

                <View style={styles.buttonContainer}>
                    <Button style={styles.button} onPress={this.pressBro}>
                        <Text>{I18n.t('favoriteTab.content.buttons.bipMe')}</Text>
                    </Button>
                </View>

                <View style={styles.buttonContainer}>

                    <Button style={styles.button2} onPress={this.pressBroSecond}>
                        <Text>{I18n.t('favoriteTab.content.buttons.secondTap')}</Text>
                    </Button>
                </View>

            </View>

        );
    }
}
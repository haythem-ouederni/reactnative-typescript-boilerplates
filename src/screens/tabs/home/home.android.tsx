/**
 */

'use strict';

import React from 'react';
import {Text, Button, View} from 'native-base';
import {ScrollView} from 'react-native';
import {homeStyles as styles} from './home.styles.android';
import {HomeCommun, mapStateToProps, mapDispatchToProps} from './home-commun';
import {connect} from 'react-redux';
import I18n from '../../../i18n/tabs/home';

class Home extends HomeCommun {

    render() {

        return (
            <View style={styles.container}>

                <Text style={styles.welcome}>
                    {I18n.t('homeTab.content.title')}
                </Text>
                <Text style={styles.instructions}>
                    To get started yes, edit index.android.js
                </Text>

                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload, {'\n'}
                    Shake or press menu button for dev menu sos
                </Text>
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} onPress={this.retrieveMoviesList}>
                        <Text>{I18n.t('homeTab.content.buttons.fetch')}</Text>
                    </Button>
                </View>
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} onPress={this.pressBro}>
                        <Text>{I18n.t('homeTab.content.buttons.pressMe')}</Text>
                    </Button>
                </View>
                <View style={styles.buttonContainer}>
                    <Button style={styles.button2} onPress={this.goToSimpleScreen}>
                        <Text>{I18n.t('homeTab.content.buttons.goSimpleScreen')}</Text>
                    </Button>
                </View>

                <ScrollView
                    style={{
                    flex: 0.8,
                    marginTop: 20
                }}>
                    {this
                        .movies()
                        .map((movie) => {
                            return (
                                <View key={movie._id}>
                                    <Text
                                        style={{
                                        height: 20
                                    }}>{movie._title}</Text>
                                </View>
                            )
                        })}
                </ScrollView>

            </View>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

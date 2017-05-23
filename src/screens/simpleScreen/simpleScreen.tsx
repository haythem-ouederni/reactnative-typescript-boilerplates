/**
 */

'use strict';

import React, {Component} from 'react';
import {Text, View, Button} from 'native-base';
import {Navigator} from 'react-native-navigation';
import I18n from '../../i18n/simpleScreen';
import {simpleScreensStyles as styles} from './simpleScreen.styles';
import * as simpleScreen from './simpleScreen.actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as LocalStorage from '../../commun/utils/local-storage';


interface Props {
    navigator?: Navigator,
    actions?: any,
    nbClicks : number
}

interface State {
    nbScrrenViews : number
}

class SimpleScreen extends Component < Props, State > {

    constructor(props) {
        super(props);

        this.state = {
            nbScrrenViews: 0
        };

        // this.onNavigatorEvent will be our handler
        this
            .props
            .navigator
            .setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

        // we bind some methods to the context
        this.displayTabs = this
            .displayTabs
            .bind(this);
        this.hideTabs = this
            .hideTabs
            .bind(this);
        this.increment = this
            .increment
            .bind(this);
    }

    componentDidMount() {
        LocalStorage
            .get('nbScrrenViews')
            .then((res : number) => {
                console.log(res);
                if(res){
                    this.setState({nbScrrenViews : res + 1});
                    LocalStorage.set('nbScrrenViews', res + 1);
                }else {
                    this.setState({nbScrrenViews : 1});
                    LocalStorage.set('nbScrrenViews', 1);
                }
            })
            .catch((err : any) => {
                console.log(err);
                this.setState({nbScrrenViews : 1});
                LocalStorage.set('nbScrrenViews', 1);
            });
    }

    // method handling the navigation events
    onNavigatorEvent(event) {
        if (event.id === 'willAppear') {
            // hide the tabs when entering the screen
            this
                .props
                .navigator
                .toggleTabs({
                    to: 'hidden', // required, 'hidden' = hide tab bar, 'shown' = show tab bar
                    animated: false // does the toggle have transition animation or does it happen immediately (optional)
                });
        }
    }

    displayTabs() {
        this
            .props
            .navigator
            .toggleTabs({
                to: 'shown', // required, 'hidden' = hide tab bar, 'shown' = show tab bar
                animated: false // does the toggle have transition animation or does it happen immediately (optional)
            });
    }

    hideTabs() {
        this
            .props
            .navigator
            .toggleTabs({
                to: 'hidden', // required, 'hidden' = hide tab bar, 'shown' = show tab bar
                animated: false // does the toggle have transition animation or does it happen immediately (optional)
            });
    }

    increment() {
        this
            .props
            .actions
            .increment(this.props.nbClicks);
    }

    render() {
        return (
            <View>
                <Text>{I18n.t('simplesScreen.greeting')}</Text>
                <Text>{this.props.nbClicks}</Text>
                <Text>{this.state.nbScrrenViews}</Text>
                <View>
                    <Button style={styles.buttons.showTabs} onPress={this.displayTabs}><Text>{I18n.t('simplesScreen.buttons.showTabs')}</Text></Button>
                </View>
                <View>
                    <Button style={styles.buttons.hideTabs} onPress={this.hideTabs}><Text>{I18n.t('simplesScreen.buttons.hideTabs')}</Text></Button>
                </View>

                <View>
                    <Button style={styles.buttons.count} onPress={this.increment}><Text>{I18n.t('simplesScreen.buttons.increment')}</Text></Button>
                </View>
            </View>
        );
    }
}

function mapStateToProps(_state : any, _ownProps : any) {
    return {
        nbClicks: _state.incrementCount.nbClicks
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign(simpleScreen), dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(SimpleScreen);
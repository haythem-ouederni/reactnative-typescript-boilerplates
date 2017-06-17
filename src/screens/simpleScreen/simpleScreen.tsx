/**
 */

'use strict';

import React, {Component} from 'react';
import {Text, View, Button} from 'native-base';
import {ListView} from 'react-native';
import {Navigator} from 'react-native-navigation';
import I18n from '../../i18n/simpleScreen';
import {simpleScreensStyles as styles} from './simpleScreen.styles';
import * as simpleScreen from './simpleScreen.actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as LocalStorage from '../../commun/utils/local-storage';
import {database} from '../../commun/utils/firebase-config';

interface Props {
    navigator?: Navigator;
    actions?: any;
    nbClicks : number;
}

interface State {
    nbScrrenViews : number;
    dataSource : any;
}

class SimpleScreen extends Component < Props,
State > {

    constructor(props) {
        super(props);

        this.state = {
            nbScrrenViews: 0,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        };

        // this.onNavigatorEvent will be our handler
        this
            .props
            .navigator
            .setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

        // we bind some methods to the context
        this.increment = this
            .increment
            .bind(this);
    }

    componentDidMount() {
        LocalStorage
            .get('nbScrrenViews')
            .then((res : number) => {
                if (res) {
                    this.setState({
                        nbScrrenViews: res + 1
                    });
                    LocalStorage.set('nbScrrenViews', res + 1);
                } else {
                    this.setState({nbScrrenViews: 1});
                    LocalStorage.set('nbScrrenViews', 1);
                }
            })
            .catch((_err : any) => {
                this.setState({nbScrrenViews: 1});
                LocalStorage.set('nbScrrenViews', 1);
            });

        this.listenForListTodos();
    }

    listenForListTodos() {
        database
            .ref('todos')
            .on('value', (snap) => {
                // get children as an array
                var items = [];

                // we get the different todos in the list
                snap.forEach((child) => {
                    items.push({
                        label: child
                            .val()
                            .label,
                        _key: child.key,
                        state: child
                            .val()
                            .state
                    });
                    // we return false to continue the iterations
                    return false;
                });

                this.setState({
                    ...this.state,
                    dataSource: this
                        .state
                        .dataSource
                        .cloneWithRows(items)
                });

            });
    }

    // method handling the navigation events
    onNavigatorEvent(event) {
        if (event.id === 'willAppear') {}
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
                    <Button style={styles.buttons.count} onPress={this.increment}>
                        <Text>{I18n.t('simplesScreen.buttons.increment')}</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

function mapStateToProps(_state : any, _ownProps : any) {
    return {nbClicks: _state.incrementCount.nbClicks};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign(simpleScreen), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleScreen);
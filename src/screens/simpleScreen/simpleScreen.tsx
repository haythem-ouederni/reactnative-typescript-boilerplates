/**
 */

'use strict';

import React, {Component} from 'react';
import {Text, View, Button} from 'native-base';
import {ListView} from 'react-native';
import {Navigator} from 'react-native-navigation';
import I18n from '../../i18n/simpleScreen';
import {simpleScreensStyles as styles} from './simpleScreen.styles';
import * as simpleScreenActions from './simpleScreen.actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

interface Props {
    navigator?: Navigator;
    actions?: any;
    todos?: Array < any >;
}

interface State {
    dataSource : any;
    // boolean indicating whether the list of Todos is loading or not
    isLoadingTodos : boolean;
}

class SimpleScreen extends Component < Props,
State > {

    constructor(props) {
        super(props);

        this.state = {
            isLoadingTodos: true,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        };

        // this.onNavigatorEvent will be our handler
        this
            .props
            .navigator
            .setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    }

    componentDidMount() {
        this.listenForListTodos();
    }

    listenForListTodos() {
        this
            .props
            .actions
            .retrieveListTodos()
            .then(() => {
                this.setState({
                    ...this.state,
                    isLoadingTodos: false
                });
            });
    }

    todos() {
        if (this.props.todos) {
            return Object
                .keys(this.props.todos)
                .map(key => {
                    return this.props.todos[key];
                });
        } else {
            return [];
        }
    }

    // method handling the navigation events
    onNavigatorEvent(event) {
        if (event.id === 'willAppear') {}
    }

    render() {
        return (
            <View>
                <Text>{I18n.t('simplesScreen.greeting')}</Text>
                <View>
                    <Text>{this.state.isLoadingTodos
                            ? 'yes'
                            : 'no'}</Text>
                    <Button style={styles.buttons.count} onPress={() => {}}>
                        <Text>TODO</Text>
                    </Button>

                    {/*The list of TODOs*/}
                    {this
                        .todos()
                        .map((todo) => {
                            return (
                                <View key={todo._key}>
                                    <Text
                                        style={{
                                        height: 20
                                    }}>{todo.label}
                                        - {todo.state}</Text>
                                </View>
                            )
                        })}
                </View>
            </View>
        );
    }
}

function mapStateToProps(_state : any, _ownProps : any) {
    return {todos: _state.retrieveListTodos.todos};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign(simpleScreenActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleScreen);
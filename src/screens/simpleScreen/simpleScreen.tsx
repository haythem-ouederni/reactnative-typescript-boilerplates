/**
 */

'use strict';

import React, {Component} from 'react';
import {View} from 'native-base';
import {ListView, ListViewDataSource, ActivityIndicator} from 'react-native';
import {Navigator} from 'react-native-navigation';
import I18n from '../../i18n/simpleScreen';
import {simpleScreensStyles as styles} from './simpleScreen.styles';
import * as simpleScreenActions from './simpleScreen.actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {ListTodos} from '../../components/todos/listTodos/listTodos';

interface Props {
    navigator?: Navigator;
    actions?: any;
    todos?: Array < any >;
    isFetchingTodos?: boolean;
}

interface State {
    dataSource : ListViewDataSource;
    // boolean indicating whether the list of Todos is loading or not isLoadingTodos
    // : boolean;
}

class SimpleScreen extends Component < Props,
State > {

    constructor(props) {
        super(props);

        // @TODO : to delete
        I18n;

        this.state = {
            // isLoadingTodos: true,
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
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
            .retrieveListTodos();
    }

    // method handling the navigation events
    onNavigatorEvent(event) {
        if (event.id === 'willAppear') {}
    }

    render() {
        return (
            <View style={styles.simpleScreenCotnainer}>
                <View>
                    {this.props.isFetchingTodos && (
                        <ActivityIndicator animating={true} color='#FFF' size="large"></ActivityIndicator>
                    )}

                    <ListTodos todos={this.props.todos}></ListTodos>

                </View>
            </View>
        );
    }
}

function mapStateToProps(_state : any, _ownProps : any) {
    return {todos: _state.todosReducer.todos, isFetchingTodos: _state.todosReducer.isFetchingTodos};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign(simpleScreenActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleScreen);
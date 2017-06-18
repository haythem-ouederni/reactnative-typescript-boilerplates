/**
 */

'use strict';

import React, {Component} from 'react';
import {Text, View, Button} from 'native-base';
import {ListView, ListViewDataSource} from 'react-native';
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

    /**
     * Method called each time the props values change
     * @param nextProps : the new value of props
     */
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        if (nextProps.todos && nextProps.todos !== this.props.todos) {
            this.setState({
                ...this.state,
                dataSource: this
                    .state
                    .dataSource
                    .cloneWithRows(nextProps.todos)
            });
        }
    }

    // method handling the navigation events
    onNavigatorEvent(event) {
        if (event.id === 'willAppear') {}
    }

    _renderItem(item) {
        return (
            <Text>{item.label}</Text>
        );
    }

    render() {
        return (
            <View>
                <Text>{I18n.t('simplesScreen.greeting')}</Text>
                <View>
                    <Text>{this.props.isFetchingTodos
                            ? 'yes'
                            : 'no'}</Text>
                    <Button style={styles.buttons.count} onPress={() => {}}>
                        <Text>TODO</Text>
                    </Button>

                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this
                        ._renderItem
                        .bind(this)}></ListView>

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
/**
 */

'use strict';

import React, {Component} from 'react';
import {ListView, ListViewDataSource} from 'react-native';
import {View} from 'native-base';
import {TodoData} from '../../../data/todos/todo';
import {TodoElt} from '../todoElt/todoElt';

interface Props {
    todos?: Array < TodoData >;
}

interface State {
    dataSource : ListViewDataSource;
}

export class ListTodos extends Component < Props,
State > {

    constructor(props) {
        super(props);

        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            })
        };
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

    /**
     * Rendering the a list item
     * @param item : the list item object
     */
    _renderItem(item) {
        return (
            <TodoElt todo={item}></TodoElt>
        );
    }

    render() {
        return (
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this
                    ._renderItem
                    .bind(this)}></ListView>
            </View>
        )
    }

}
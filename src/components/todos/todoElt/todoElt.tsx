/**
 */

'use strict';

import React, {Component} from 'react';
import {TodoData} from '../../../data/todos/todo';
import {Text, ListItem} from 'native-base';

interface Props {
    todo : TodoData;
}

interface State {}

export class TodoElt extends Component < Props,
State > {

    constructor(props) {
        super(props);
    }

    render() {
        let todo = this.props.todo;
        return (
            <ListItem
                style={{
                marginLeft: 0,
                padding: 10
            }}>
                <Text
                    style={{
                    color: '#FFF',
                    flex: 1
                }}>{todo.label}</Text>
            </ListItem>
        )
    }

}
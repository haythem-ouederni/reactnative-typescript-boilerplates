/**
 */

'use strict';

import React, {Component} from 'react';
import {TodoData} from '../../../data/todos/todo';
import {View, Text, ListItem, Icon} from 'native-base';
import {SwipeListView, SwipeRow} from 'react-native-swipe-list-view';
import {todoEltStyles as styles} from './todoElt.styles';

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
        SwipeListView;
        let todo = this.props.todo;
        todo;
        return (
            <SwipeRow
                leftOpenValue={50}
                rightOpenValue={-100}
                stopLeftSwipe={50}
                stopRightSwipe={-100}>

                {/*The back ground action buttons bar*/}
                <View style={styles.swipeBackground.viewContainer}>

                    {/*The right buttons*/}
                    <ListItem style={styles.swipeBackground.listItemLeft}>

                        {/*The delete button*/}
                        <Text style={styles.swipeBackground.deleteButton.button}>
                            <Icon
                                ios="ios-trash-outline"
                                android="md-trash"
                                style={styles.swipeBackground.deleteButton.icon}></Icon>
                        </Text>
                    </ListItem>

                    {/*the left buttons*/}
                    <ListItem style={styles.swipeBackground.listItemRight}>

                        {/*The edit button*/}
                        <Text style={styles.swipeBackground.editButton.button}>
                            <Icon ios="ios-create-outline" android="md-create" style={styles.swipeBackground.editButton.icon}></Icon>
                        </Text>

                        {/*The done button*/}
                        <Text style={styles.swipeBackground.doneButton.button}>
                            <Icon  name="md-checkmark" style={styles.swipeBackground.doneButton.icon}></Icon>
                        </Text>
                    </ListItem>
                </View>

                {/*The TODO element content*/}
                <ListItem
                    style={styles.todoLineItem}>

                    {/*The Todo element label*/}
                    <Text
                        style={styles.todoLabel}>{todo.label}</Text>
                </ListItem>

            </SwipeRow>

        )
    }

}
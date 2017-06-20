/**
 */

'use strict';

import React, {Component} from 'react';
import {TodoData} from '../../../data/todos/todo';
import {View, Text, ListItem, Icon, Button} from 'native-base';
import {SwipeListView, SwipeRow} from 'react-native-swipe-list-view';
import {todoEltStyles as styles, listItemLeftWidth, listItemRightWidth} from './todoElt.styles';

interface Props {
    todo: TodoData;
}

interface State {
}

export class TodoElt extends Component <Props, State> {

    constructor(props) {
        super(props);
    }

    render() {
        SwipeListView;
        let todo = this.props.todo;
        todo;
        return (
            <SwipeRow
                leftOpenValue={listItemLeftWidth}
                rightOpenValue={listItemRightWidth * -1}
                stopLeftSwipe={listItemLeftWidth}
                stopRightSwipe={listItemRightWidth * -1}>

                {/*The back ground action buttons bar*/}
                <View style={styles.swipeBackground.viewContainer}>

                    {/*The right buttons*/}
                    <ListItem style={styles.swipeBackground.listItemLeft}>

                        {/*The delete button*/}
                        <Button iconLeft
                                style={{...styles.swipeBackground.deleteButton.button, ...styles.swipeBackground.buttonCommunStyle.button}}
                                onPress={() => {
                                    alert('broooo');
                                }}>
                            <Icon
                                ios="ios-trash-outline"
                                android="md-trash"
                                style={{...styles.swipeBackground.deleteButton.icon, ...styles.swipeBackground.buttonCommunStyle.icon}}/>
                        </Button>
                    </ListItem>

                    {/*the left buttons*/}
                    <ListItem style={styles.swipeBackground.listItemRight}>

                        {/*The edit button*/}
                        <Button iconLeft
                                style={{...styles.swipeBackground.editButton.button, ...styles.swipeBackground.buttonCommunStyle.button}}>
                            <Icon ios="ios-create-outline" android="md-create"
                                  style={{...styles.swipeBackground.editButton.icon, ...styles.swipeBackground.buttonCommunStyle.icon}}/>
                        </Button>

                        {/*The In Progress button*/}
                        <Button iconLeft
                                style={{...styles.swipeBackground.inProgressButton.button, ...styles.swipeBackground.buttonCommunStyle.button}}>
                            <Icon ios="ios-code-working-outline" android="md-code-working"
                                  style={{...styles.swipeBackground.inProgressButton.icon, ...styles.swipeBackground.buttonCommunStyle.icon}}/>
                        </Button>

                        {/*The done button*/}
                        <Button iconLeft
                                style={{...styles.swipeBackground.doneButton.button, ...styles.swipeBackground.buttonCommunStyle.button}}>
                            <Icon name="md-checkmark"
                                  style={{...styles.swipeBackground.doneButton.icon, ...styles.swipeBackground.buttonCommunStyle.icon}}/>
                        </Button>
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
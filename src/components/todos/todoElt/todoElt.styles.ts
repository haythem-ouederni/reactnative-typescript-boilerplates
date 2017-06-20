import {ViewStyle} from 'react-native';

const lineHeight = 50;

const actionButtonHeight = lineHeight - 1;

const actionButtonWidth = 50;

export var todoEltStyles = {
    swipeBackground: {
        viewContainer: {
            alignItems: 'center',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between'
        } as ViewStyle,
        listItemLeft: {
            marginLeft: 0,
            padding: 0,
            width: actionButtonWidth,
            height: lineHeight,
        },
        buttonCommunStyle: {
            button: {
                width: actionButtonWidth,
                height: actionButtonHeight,
                marginTop: -15,
                borderRadius: 0
            } as ViewStyle,
            icon: {
                color: '#fff',
                fontSize: 24
            }
        },
        deleteButton: {
            button: {
                backgroundColor: '#cb2431',
            } as ViewStyle,
            icon: {
                width: 16
            }
        },
        listItemRight: {
            marginLeft: 0,
            padding: 0,
            alignItems: 'center',
            bottom: 0,
            width: actionButtonWidth * 2,
            height: lineHeight,
        } as ViewStyle,
        editButton: {
            button: {
                backgroundColor: '#ff4500',
            } as ViewStyle,
            icon: {
                width: 19
            }
        },
        doneButton: {
            button: {
                backgroundColor: '#28a745',
            } as ViewStyle,
            icon: {
                width: 16
            }
        }
    },
    todoLineItem: {
        marginLeft: 0,
        padding: 10,
        height: lineHeight,
        backgroundColor: '#202020'
    },
    todoLabel: {
        color: '#FFF',
        flex: 1
    }
};

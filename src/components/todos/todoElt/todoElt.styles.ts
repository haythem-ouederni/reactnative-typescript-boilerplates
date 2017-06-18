import {ViewStyle, TextStyle} from 'react-native';

const lineHeight= 50;

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
        deleteButton: {
            button: {
                backgroundColor : '#cb2431',
                width : actionButtonWidth,
                height : actionButtonHeight,
                padding : 10,
                textAlign : 'center',
                marginBottom: 1
            } as TextStyle,
            icon: {
                color: '#fff'
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
                backgroundColor : '#ff4500',
                width : actionButtonWidth,
                height : actionButtonHeight,
                padding : 10,
                textAlign : 'center',
                marginBottom: 1
            } as TextStyle,
            icon: {
                color: '#fff'
            }
        },
        doneButton: {
            button: {
                backgroundColor : '#28a745',
                width : actionButtonWidth,
                height : actionButtonHeight,
                padding : 10,
                textAlign : 'center',
                marginBottom: 1
            } as TextStyle,
            icon: {
                color: '#fff'
            }
        }
    },
    todoLineItem: {
        marginLeft: 0,
        padding: 10,
        height : lineHeight,
        backgroundColor: '#202020'
    },
    todoLabel: {
        color: '#FFF',
        flex: 1
    }
};

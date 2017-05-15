import {ViewStyle, TextStyle} from 'react-native';

export var styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    } as ViewStyle,
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    } as TextStyle,
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    } as TextStyle,
    buttonContainer: {
        alignItems: 'center'
    } as ViewStyle,
    button: {
        marginTop: 35,
        backgroundColor: '#333333',
        shadowColor: 'blue',
        shadowOffset: {
            width: 0,
            height: 3
        },
        // width: 100, height: 60,
        shadowRadius: 50,
        shadowOpacity: 0.8,
        borderRadius: 50

    }
};
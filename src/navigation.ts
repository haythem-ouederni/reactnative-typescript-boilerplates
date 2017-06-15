import {Navigation} from 'react-native-navigation';

import {registerSimpleScreen, simpleScreenConfig} from './screens/simpleScreen/simpleScreen.config';
import {Provider} from 'react-redux';

// register screens
export function registerScreens(aStore : any, aProvider : Provider) {
    registerSimpleScreen(aStore, aProvider);
}

// the app style
const appStyle = {
    orientation: 'portrait' // Sets a specific orientation to the entire app. Default: 'auto'. Supported values: 'auto', 'landscape', 'portrait'
};

const passProps = {}; // simple serializable object that will pass as props to all top screens (optional)

const animationType = 'slide-down';

export class RNTestProjectNavigation {

    constructor(aStore : any, aProvider : Provider) {
        registerScreens(aStore, aProvider);
        Navigation.startSingleScreenApp({
            screen: simpleScreenConfig,
            appStyle: appStyle,
            passProps: passProps,
            animationType: animationType,
        });
    }
}
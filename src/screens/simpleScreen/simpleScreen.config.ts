import {Navigation} from 'react-native-navigation';

import {SimpleScreen} from './simpleScreen';

export function registerSimpleScreen() {
    Navigation.registerComponent('screens.simpleScreen', () => SimpleScreen);
}

export var simpleScreenConfig = {}
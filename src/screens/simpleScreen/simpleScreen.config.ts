import {Navigation} from 'react-native-navigation';
import SimpleScreen from './simpleScreen';
import { Provider } from 'react-redux';

export function registerSimpleScreen(aStore: any, aProvider: Provider) {
    Navigation.registerComponent('screens.simpleScreen', () => SimpleScreen, aStore, aProvider);
}

export var simpleScreenConfig = {}
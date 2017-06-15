import {Navigation} from 'react-native-navigation';
import SimpleScreen from './simpleScreen';
import {Provider} from 'react-redux';
import I18n from '../../i18n/simpleScreen';

export function registerSimpleScreen(aStore : any, aProvider : Provider) {
    Navigation.registerComponent('screens.simpleScreen', () => SimpleScreen, aStore, aProvider);
}

export var simpleScreenConfig = {
    screen: 'screens.simpleScreen',
    title: I18n.t('simplesScreen.title'),
    navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
};
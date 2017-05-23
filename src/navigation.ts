import {Navigation} from 'react-native-navigation';

import {homeTabConfig, registerHomeTab} from './screens/tabs/home/home.config';
import {favoritesTabConfig, registerFavoritesTab} from './screens/tabs/favorites/favorites.config';
import {registerSimpleScreen} from './screens/simpleScreen/simpleScreen.config';
import {Provider} from 'react-redux';


// register screens
export function registerScreens(aStore : any, aProvider : Provider) {
    registerSimpleScreen(aStore, aProvider);
    registerFavoritesTab(aStore, aProvider);
    registerHomeTab(aStore, aProvider);
}

// the tab styles
const tabsStyle = {
    tabBarBackgroundColor: '#0f2362',
    tabBarButtonColor: '#ffffff',
    tabBarSelectedButtonColor: '#63d7cc',
    tabFontFamily: 'BioRhyme-Bold',
    forceTitlesDisplay: true,
    orientation: 'portrait' // Sets a specific orientation to the entire app. Default: 'auto'. Supported values: 'auto', 'landscape', 'portrait'
};

// the app style
const appStyle = {
    orientation: 'portrait' // Sets a specific orientation to the entire app. Default: 'auto'. Supported values: 'auto', 'landscape', 'portrait'
};

const passProps = {}; // simple serializable object that will pass as props to all top screens (optional)

const animationType = 'slide-down';

export class RNTestProjectNavigation {

    constructor(aStore : any, aProvider : Provider) {
        registerScreens(aStore, aProvider);
        Navigation.startTabBasedApp({
            tabs: [
                homeTabConfig, favoritesTabConfig
            ],
            // tabsStyle: { // optional, add this if you want to style the tab bar beyond
            // the defaults     tabBarButtonColor: '#aab8c2', // optional, change the color
            // of the tab icons and text (also unselected)     tabBarSelectedButtonColor:
            // '#4080ff',//'#4080ff', // optional, change the color of the selected tab icon
            // and text (only selected)     tabBarBackgroundColor: 'white' // optional,
            // change the background color of the tab bar },
            tabsStyle: tabsStyle,
            appStyle: appStyle,
            passProps: passProps,
            animationType: animationType
        });
    }
}
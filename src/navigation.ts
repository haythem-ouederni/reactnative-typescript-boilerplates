import {Navigation} from 'react-native-navigation';

import {homeTabConfig} from './screens/tabs/home/home.config';
import {favoritesTabConfig} from './screens/tabs/favorites/favorites.config';

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

    constructor() {
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
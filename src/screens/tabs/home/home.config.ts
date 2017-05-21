import {Navigation} from 'react-native-navigation';
import Home from './home';
import {Provider} from 'react-redux';

// register screens
export function registerHomeTab(aStore : any, aProvider : Provider) {
    Navigation.registerComponent('tabs.home', () => Home, aStore, aProvider);
}

export var homeTabConfig = {
    label: 'Home',
    screen: 'tabs.home',
    icon: require('assets/img/one.png'),
    selectedIcon: require('assets/img/one_selected.png'),
    title: 'My Home',
    navigatorStyle: {
        tabBarBackgroundColor: 'white'
    }
}
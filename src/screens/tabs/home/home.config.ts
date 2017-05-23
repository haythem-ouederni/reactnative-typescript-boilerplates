import {Navigation} from 'react-native-navigation';
import Home from './home';
import {Provider} from 'react-redux';
import I18n from '../../../i18n/tabs/home';

// register screens
export function registerHomeTab(aStore : any, aProvider : Provider) {
    Navigation.registerComponent('tabs.home', () => Home, aStore, aProvider);
}

export var homeTabConfig = {
    label: I18n.t('homeTab.name'),
    screen: 'tabs.home',
    icon: require('assets/img/one.png'),
    selectedIcon: require('assets/img/one_selected.png'),
    title: I18n.t('homeTab.title'),
    navigatorStyle: {
        tabBarBackgroundColor: 'white'
    }
}
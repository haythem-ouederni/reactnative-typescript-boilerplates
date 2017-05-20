import {Navigation} from 'react-native-navigation';

import {Home} from './home';

Navigation.registerComponent('tabs.home', () => Home);

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
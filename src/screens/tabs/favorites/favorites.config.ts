import {Navigation} from 'react-native-navigation';
import {Favorites} from './favorites';
import { Provider } from 'react-redux';

// register screens
export function registerFavoritesTab(aStore : any, aProvider : Provider) {
    Navigation.registerComponent('tabs.favorite', () => Favorites, aStore, aProvider);
}

export var favoritesTabConfig = {
    label: 'Favorites',
    screen: 'tabs.favorite',
    icon: require('assets/img/two.png'),
    selectedIcon: require('assets/img/two_selected.png'),
    title: 'My favorites',
    navigatorStyle: {
        tabBarBackgroundColor: '#4dbce9'
    }
}
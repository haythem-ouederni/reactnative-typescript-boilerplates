import {Navigation} from 'react-native-navigation';
import {Favorites} from './favorites';
import { Provider } from 'react-redux';
import I18n from '../../../i18n/tabs/favorites';

// register screens
export function registerFavoritesTab(aStore : any, aProvider : Provider) {
    Navigation.registerComponent('tabs.favorite', () => Favorites, aStore, aProvider);
}

export var favoritesTabConfig = {
    label: I18n.t('favoriteTab.name'),
    screen: 'tabs.favorite',
    icon: require('assets/img/two.png'),
    selectedIcon: require('assets/img/two_selected.png'),
    title: I18n.t('favoriteTab.name'),
    navigatorStyle: {
        tabBarBackgroundColor: '#4dbce9'
    }
}
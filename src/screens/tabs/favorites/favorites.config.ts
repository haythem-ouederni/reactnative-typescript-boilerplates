import {Navigation} from 'react-native-navigation';

import {Favorites} from './favorites';

Navigation.registerComponent('screen.favorite', () => Favorites);

export var favoritesTabConfig = {
    label: 'Favorites',
    screen: 'screen.favorite',
    icon: require('../../../assets/img/two.png'),
    selectedIcon: require('../../../assets/img/two_selected.png'),
    title: 'My favorites',
    navigatorStyle : {
        tabBarBackgroundColor: '#4dbce9'
    }
}
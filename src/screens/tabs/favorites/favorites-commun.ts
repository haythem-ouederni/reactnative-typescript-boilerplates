/**
 */

'use strict';

import {Component} from 'react';
import {Alert} from 'react-native';

interface Props {}
interface State {}

export class FavoritesCommun extends Component < Props, State > {

    pressBro = () => {
        Alert.alert('tourout');
    };

    pressBroSecond= () => {
        Alert.alert('second press');
    };

}
/**
 */

'use strict';

import {RNTestProjectNavigation} from './navigation';
import configureStore from './commun/store/configure-store';
import { Provider } from 'react-redux';

const store = configureStore();

// launch the application
new RNTestProjectNavigation(store, Provider);
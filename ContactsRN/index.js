import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import storeConfig from './src/store'
import App from './App';
import { name as appName } from './app.json';

const ReduxStore = () =>
    <Provider store={storeConfig}>
        <App />
    </Provider>

AppRegistry.registerComponent(appName, () => ReduxStore);

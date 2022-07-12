/**
 * @format
 */

// eslint-disable-next-line react/react-in-jsx-scope
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import configureStore from './src/Redux/store';
import {Provider} from 'react-redux';

const store = configureStore();

const RNRedux = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => RNRedux);

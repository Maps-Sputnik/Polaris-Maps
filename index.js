/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider as StoreProvider } from 'react-redux';

import Main from './App';
import { name as appName } from './app.json';
import configureStore from './src/Store/Store';

const theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ed923e',
    accent: '#136ed6',
    background: '#ffecbd',
    background2: '#cfe5ff',
    backgroundGeneral: '#f7f7f7',
    shadow: '#dba316',
    buttonDisabled: '#c9c9c9',
  },
};
function App() {
  // if (isHeadless) {
  //   // App has been launched in the background by iOS, ignore
  //   return null;
  // }
  const { store, persistor } = configureStore;
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <Main />
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);

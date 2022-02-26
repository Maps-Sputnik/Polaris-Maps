import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider as StoreProvider } from 'react-redux';

import Main from './App';
import { name as appName } from './app.json';
import configureStore from './src/Store/Store';

function App() {
  //   // App has been launched in the background by iOS, ignore
  // if (isHeadless) {
  //   return null;
  // }
  const { store, persistor } = configureStore;
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <Main />
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);

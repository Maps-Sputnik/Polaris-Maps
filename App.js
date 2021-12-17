import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'intl';
import 'intl/locale-data/jsonp/en';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
    </NavigationContainer>
  );
};

export default App;

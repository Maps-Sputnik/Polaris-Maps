import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import ErrorBoundary from '../Components/Others/ErrorBoundary';

import DrawerNavigator from './Drawer';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <ErrorBoundary>
      <Stack.Navigator
        initialRouteName="Root"
        component={DrawerNavigator}
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <Stack.Screen name="Home" component={DrawerNavigator} />
      </Stack.Navigator>
    </ErrorBoundary>
  );
};

export default StackNavigator;

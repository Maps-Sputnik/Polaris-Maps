import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import ErrorBoundary from '../Components/Others/ErrorBoundary';
import StackScreens from '@screens/Stack';

import DrawerNavigator from './Drawer';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <ErrorBoundary>
      <Stack.Navigator
        initialRouteName="Drawer"
        component={DrawerNavigator}
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <Stack.Screen name="Drawer" component={DrawerNavigator} />
        <Stack.Screen name="Search" component={StackScreens.Search} />
      </Stack.Navigator>
    </ErrorBoundary>
  );
};

export default StackNavigator;

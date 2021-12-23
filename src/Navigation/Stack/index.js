import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import ErrorBoundary from '@components/Others/ErrorBoundary';
import StackScreens from '@screens/Stack';

import DrawerNavigator from '../Drawer';
import BottomNavigator from '@navigation/Bottom';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <ErrorBoundary>
      <Stack.Navigator
        initialRouteName="Bottom"
        // component={DrawerNavigator}
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <Stack.Screen name="Bottom" component={BottomNavigator} />
        <Stack.Screen name="Drawer" component={DrawerNavigator} />
        <Stack.Screen name="Search" component={StackScreens.Search} />
      </Stack.Navigator>
    </ErrorBoundary>
  );
};

export default StackNavigator;

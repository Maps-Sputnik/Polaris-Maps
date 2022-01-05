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
        initialRouteName="Drawer"
        // component={DrawerNavigator}
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <Stack.Screen name="Drawer" component={DrawerNavigator} />
        <Stack.Screen name="Bottom" component={BottomNavigator} />
        <Stack.Screen name="Search" component={StackScreens.Search} />
        <Stack.Screen name="Chat" component={StackScreens.Chat} />
        <Stack.Screen name="EditProfile" component={StackScreens.EditProfile} />
        <Stack.Screen name="FriendsList" component={StackScreens.FriendsList} />
        <Stack.Screen name="Notifications" component={StackScreens.Notifications} />
      </Stack.Navigator>
    </ErrorBoundary>
  );
};

export default StackNavigator;

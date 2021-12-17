import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import ErrorBoundary from '../Components/Others/ErrorBoundary';
import StackScreens from '@screens/Stack';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <ErrorBoundary>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <Stack.Screen name="Home" component={StackScreens.Home} />
        <Stack.Screen name="Settings" component={StackScreens.Settings} />
      </Stack.Navigator>
    </ErrorBoundary>
  );
};

export default StackNavigator;

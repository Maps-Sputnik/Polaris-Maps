import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import ErrorBoundary from '@components/Others/ErrorBoundary';
import StackScreens from '@screens/Stack';
import BottomNavigator from '@navigation/Bottom';
import DrawerNavigator from '../Drawer';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const language = useSelector((state) => state.language.language);
  return (
    <ErrorBoundary>
      <Stack.Navigator
        initialRouteName="Drawer"
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <>
          {language === null ? (
            <Stack.Screen name="Language" component={StackScreens.Language} />
          ) : (
            <>
              <Stack.Screen name="Drawer" component={DrawerNavigator} />
              <Stack.Screen name="Bottom" component={BottomNavigator} />
              <Stack.Screen name="Search" component={StackScreens.Search} />
              <Stack.Screen name="Chat" component={StackScreens.Chat} />
              <Stack.Screen name="EditProfile" component={StackScreens.EditProfile} />
              <Stack.Screen name="FriendsList" component={StackScreens.FriendsList} />
              <Stack.Screen name="Notifications" component={StackScreens.Notifications} />
              <Stack.Screen name="Login" component={StackScreens.Login} />
              <Stack.Screen
                name="LanguageSelect"
                component={StackScreens.Language}
                options={{ headerShown: true, headerTitle: '', headerBackTitleVisible: false }}
              />
            </>
          )}
        </>
      </Stack.Navigator>
    </ErrorBoundary>
  );
};

export default StackNavigator;

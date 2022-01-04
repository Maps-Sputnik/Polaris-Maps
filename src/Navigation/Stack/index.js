import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import I18n, { changeLanguage } from '@i18n';

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import ErrorBoundary from '@components/Others/ErrorBoundary';
import StackScreens from '@screens/Stack';

import DrawerNavigator from '../Drawer';
import BottomNavigator from '@navigation/Bottom';

const Stack = createStackNavigator();
const StackNavigator = () => {
  const dispatch = useDispatch();
  const { currLanguage, languages } = useSelector((state) => ({
    languages: state.language.allLanguages,
    currLanguage: state.language.language,
  }));

  React.useEffect(() => {
    if (currLanguage) {
      changeLanguage(currLanguage);
    }
  }, [currLanguage]);
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
      </Stack.Navigator>
    </ErrorBoundary>
  );
};

export default StackNavigator;

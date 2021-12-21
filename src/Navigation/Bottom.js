import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import TabScreens from '@screens/Bottom';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'ios-search' : 'ios-search-outline';
          } else if (route.name === 'Saved') {
            iconName = focused ? 'ios-bookmark' : 'ios-bookmark-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: '#003566',
        tabBarInactiveTintColor: '#4e5d5c',
        tabBarLabelStyle: {
          fontSize: 13,
          fontFamily: 'Ubuntu-Regular',
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={TabScreens.Dashboard} />
      <Tab.Screen name="Search" component={TabScreens.Search} />
      <Tab.Screen name="Saved" component={TabScreens.Saved} />
      <Tab.Screen name="Profile" component={TabScreens.Profile} />
    </Tab.Navigator>
  );
}

import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomTabBar from '@components/Molecules/CustomTabBar';
import TabScreens from '@screens/Bottom';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  const renderTabBar = (props) => {
    return <CustomTabBar {...props} />;
  };

  const renderIcons =
    (name) =>
    ({ focused, color, size }) => {
      switch (name) {
        case 'Dashboard':
          return (
            <Icon
              name={focused ? 'ios-home' : 'ios-home-outline'}
              width={size + 5}
              height={size + 5}
              fill={color}
            />
          );
        case 'Search':
          return (
            <Icon
              name={focused ? 'ios-search' : 'ios-search-outline'}
              width={size + 5}
              height={size + 5}
              fill={color}
            />
          );
        case 'Saved':
          return (
            <Icon
              name={focused ? 'ios-bookmark' : 'ios-bookmark-outline'}
              width={size + 5}
              height={size + 5}
              fill={color}
            />
          );
        case 'Profile':
          return (
            <Icon
              name={focused ? 'person' : 'person-outline'}
              width={size + 5}
              height={size + 5}
              fill={color}
            />
          );
      }
    };

  const screenOptions = (title, badge = false) => ({
    title,
    tabBarIcon: renderIcons(title),
    tabBarBadge: badge,
  });

  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#003566',
        tabBarInactiveTintColor: '#4e5d5c',
        tabBarLabelStyle: {
          fontSize: 13,
          fontFamily: 'Ubuntu-Regular',
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={TabScreens.Dashboard}
        options={screenOptions('Dashboard')}
      />
      <Tab.Screen name="Search" component={TabScreens.Search} options={screenOptions('Search')} />
      <Tab.Screen name="Saved" component={TabScreens.Saved} options={screenOptions('Saved')} />
      <Tab.Screen
        name="Profile"
        component={TabScreens.Profile}
        options={screenOptions('Profile')}
      />
    </Tab.Navigator>
  );
}

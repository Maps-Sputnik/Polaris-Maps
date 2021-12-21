import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-remix-icon';
import TabScreens from '@screens/Bottom';
import CustomTabBar from '@components/Organisms/CustomTabBar';
import CustomHeader from '@components/Organisms/CustomHeader';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  const renderTabBar = (props) => {
    return <CustomTabBar {...props} />;
  };

  const renderHeader = (props) => {
    return <CustomHeader {...props} />;
  };

  const renderIcons =
    (name) =>
    ({ focused, color, size }) => {
      switch (name) {
        case 'Navigation':
          return (
            <Icon
              name={focused ? 'navigation-fill' : 'navigation-line'}
              size={size}
              color={color}
            />
          );
        case 'Messages':
          return <Icon name={focused ? 'chat-1-fill' : 'chat-1-line'} size={size} color={color} />;
        case 'Saved':
          return (
            <Icon name={focused ? 'bookmark-fill' : 'bookmark-line'} size={size} color={color} />
          );
        case 'Nearby':
          return (
            <Icon name={focused ? 'map-pin-2-fill' : 'map-pin-2-line'} size={size} color={color} />
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
        headerShown: true,
        header: renderHeader,
        tabBarActiveTintColor: '#003566',
        tabBarInactiveTintColor: '#4e5d5c',
        tabBarLabelStyle: {
          fontSize: 13,
          fontFamily: 'Ubuntu-Regular',
        },
      }}
    >
      <Tab.Screen
        name="Navigation"
        component={TabScreens.Navigation}
        options={screenOptions('Navigation')}
      />
      <Tab.Screen name="Nearby" component={TabScreens.Nearby} options={screenOptions('Nearby')} />
      <Tab.Screen
        name="Messages"
        component={TabScreens.Messages}
        options={screenOptions('Messages')}
      />
      <Tab.Screen name="Saved" component={TabScreens.Saved} options={screenOptions('Saved')} />
    </Tab.Navigator>
  );
}

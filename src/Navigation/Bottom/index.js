import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-remix-icon';
import TabScreens from '@screens/Bottom';
import CustomTabBar from '@components/Organisms/CustomTabBar';
import CustomHeader from '@components/Organisms/CustomHeader';
import { COLORS as colors } from '@constants';
import I18n from '@i18n';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  const renderTabBar = (props) => {
    return <CustomTabBar {...props} />;
  };

  const renderHeader = (props) => {
    return <CustomHeader {...props} />;
  };

  const renderIcon =
    (name) =>
    ({ focused, color, size }) => {
      return <Icon name={focused ? `${name}-fill` : `${name}-line`} size={size} color={color} />;
    };

  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: true,
        header: renderHeader,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.secondary,
        tabBarHideOnKeyboard: false,
        tabBarLabelStyle: {
          fontSize: 13,
          fontFamily: 'Ubuntu-Regular',
        },
      }}
    >
      <Tab.Screen
        name="Navigation"
        component={TabScreens.Navigation}
        options={{
          title: I18n.t('bottom.Navigation'),
          tabBarIcon: renderIcon('navigation'),
          tabBarBadge: false,
        }}
      />
      <Tab.Screen
        name="Messages"
        component={TabScreens.Messages}
        options={{
          title: I18n.t('bottom.Messages'),
          tabBarIcon: renderIcon('chat-1'),
          tabBarBadge: false,
        }}
      />
      <Tab.Screen
        name="Saved"
        component={TabScreens.Saved}
        options={{
          title: I18n.t('bottom.Saved'),
          tabBarIcon: renderIcon('bookmark'),
          tabBarBadge: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={TabScreens.Profile}
        options={{
          title: I18n.t('bottom.Profile'),
          tabBarIcon: renderIcon('user-6'),
          tabBarBadge: true,
        }}
      />
    </Tab.Navigator>
  );
}

import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '@components/Organisms/CustomDrawer';
import RemixIcon from 'react-native-remix-icon';
import DrawerScreens from '@screens/Drawer';
import BottomNavigator from '@navigation/Bottom';
import I18n from '@i18n';

import { SIZES as sizes, COLORS as colors } from '@constants';
const screenOptions = {
  headerShown: false,
  drawerActiveTintColor: colors.main,
  drawerInactiveTintColor: colors.secondary,
  drawerType: 'front',
  drawerItemStyle: {
    borderRadius: 10,
    width: '95%',
    alignSelf: 'center',
    marginVertical: 5,
  },
  drawerStyle: {
    backgroundColor: 'white',
    paddingVertical: 20,
  },
  drawerLabelStyle: {
    color: 'black',
    fontSize: sizes.h6,
    fontFamily: 'Lato-Regular',
  },
  drawerActiveBackgroundColor: colors.bg,
};

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const renderDrawer = (props) => {
    return <CustomDrawer {...props} />;
  };

  const renderIcon =
    (icon) =>
    ({ focused, color, size }) => {
      return (
        <RemixIcon name={focused ? `${icon}-fill` : `${icon}-line`} size={size} color={color} />
      );
    };
  return (
    <Drawer.Navigator
      initialRouteName="Map"
      drawerContent={renderDrawer}
      screenOptions={screenOptions}
    >
      <Drawer.Screen
        name="Map"
        component={BottomNavigator}
        options={{
          drawerIcon: renderIcon('road-map'),
          title: I18n.t('drawer.Map'),
        }}
      />
      <Drawer.Screen
        name="Help"
        component={DrawerScreens.Help}
        options={{
          title: I18n.t('drawer.Help'),
          drawerIcon: renderIcon('question'),
        }}
      />
      <Drawer.Screen
        name="Privacy"
        component={DrawerScreens.Help}
        options={{
          title: I18n.t('drawer.Privacy'),
          drawerIcon: renderIcon('shield-check'),
        }}
      />
    </Drawer.Navigator>
  );
}

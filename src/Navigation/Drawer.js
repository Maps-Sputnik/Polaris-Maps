import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomNavigator from './Bottom';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
      }}
    >
      <Drawer.Screen name="Home" component={BottomNavigator} />
    </Drawer.Navigator>
  );
}

import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomNavigator from './Bottom';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="DrawerHome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="DrawerHome" component={BottomNavigator} />
    </Drawer.Navigator>
  );
}

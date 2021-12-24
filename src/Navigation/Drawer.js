import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '@components/Organisms/CustomDrawer';
import BottomNavigator from './Bottom';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DrawerScreens from '@screens/Drawer';

import { SIZES as sizes, COLORS as colors } from '@constants';

const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
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
          fontSize: sizes.h5,
          fontFamily: 'Lato-Bold',
        },
        drawerActiveBackgroundColor: colors.bg,
      }}
    >
      <Drawer.Screen name="Home" component={BottomNavigator} />
      <Drawer.Screen name="Help" component={DrawerScreens.Help} />
      <Drawer.Screen name="Privacy&Policy" component={DrawerScreens.Help} />
    </Drawer.Navigator>
  );
}

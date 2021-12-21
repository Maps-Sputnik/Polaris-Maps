import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '@components/Organisms/CustomDrawer';
import BottomNavigator from './Bottom';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DrawerScreens from '@screens/Drawer';

import { colors, sizes } from '@utils';

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
          borderBottomWidth: 1,
          borderBottomColor: colors.bg,
          alignSelf: 'center',
        },
        drawerStyle: {
          backgroundColor: 'white',
          paddingVertical: 20,
        },
        drawerLabelStyle: {
          color: 'black',
          fontSize: sizes.h4,
          fontFamily: 'Lato-Regular',
        },
        drawerActiveBackgroundColor: colors.bg,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={BottomNavigator}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <IonIcons
              name="ios-home"
              size={size}
              color={focused ? colors.main : colors.secondary}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Help"
        component={DrawerScreens.Help}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <IonIcons
              name="ios-help-circle-outline"
              size={size}
              color={focused ? colors.main : colors.secondary}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Privacy&Policy"
        component={DrawerScreens.Help}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <MaterialIcons
              name="privacy-tip"
              size={size}
              color={focused ? colors.main : colors.secondary}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

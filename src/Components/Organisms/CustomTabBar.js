import React from 'react';
import { View, Text, StyleSheet, Platform, Dimensions } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TouchableOpacity from '@components/Atoms/TouchableOpacity';

import { COLORS as colors } from '@constants';

const isIos = Platform.OS === 'ios';
const { width } = Dimensions.get('window');
const totalWidth = width - 30;

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const insets = useSafeAreaInsets();
  // const tabWidth = totalWidth / state?.routes?.length;
  if (focusedOptions?.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container(insets.bottom)}>
      {state?.routes?.map((route, index) => {
        const { options } = descriptors[route?.key];
        const label =
          options?.tabBarLabel !== undefined
            ? options?.tabBarLabel
            : options?.title !== undefined
            ? options?.title
            : route?.name;

        const isFocused = state?.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route?.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event?.defaultPrevented) {
            navigation.navigate(route?.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route?.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            key={label}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabWrapper}
          >
            {options.tabBarIcon({
              focused: isFocused,
              color: isFocused ? colors.primary : '#7d7d7d',
              size: 25,
            })}
            <Text style={styles.label(isFocused ? colors.primary : colors.secondary)}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: (bottom) => ({
    position: 'absolute',
    bottom: Platform.OS == 'ios' ? bottom : 15,
    width: totalWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 7,
    padding: 6,
    marginHorizontal: 10,
    // paddingBottom: isIos ? bottom - 10 : 0,
    shadowColor: '#b89b70',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 8,
  }),
  tabWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 30,
    flex: 1,
  },
  label: (color) => ({
    marginTop: 4,
    color: color,
    fontSize: 13,
    fontFamily: 'Lato-Regular',
  }),
  badgeWrapper: (color) => ({
    position: 'absolute',
    top: 3,
    right: 3,
    borderRadius: 30,
    backgroundColor: color,
    alignItems: 'center',
    justifyContent: 'center',
    width: 12,
    height: 12,
  }),
});
export default CustomTabBar;

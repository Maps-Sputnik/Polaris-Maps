import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions,
  Animated,
} from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const isIos = Platform.OS === 'ios';
const { width } = Dimensions.get('window');
const totalWidth = isIos ? width : width - 20;

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();
  const tabWidth = totalWidth / state?.routes?.length;
  const translateValue = useRef(new Animated.Value(0)).current;
  if (focusedOptions?.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container(insets.bottom)}>
      {translateValue && (
        <Animated.View style={styles.slider(colors.primary, translateValue, tabWidth)} />
      )}
      {state?.routes?.map((route, index) => {
        const { options } = descriptors[route?.key];
        const label =
          options?.tabBarLabel !== undefined
            ? options?.tabBarLabel
            : options?.title !== undefined
            ? options?.title
            : route?.name;

        const isFocused = state?.index === index;

        useEffect(() => {
          if (isFocused) {
            Animated.spring(translateValue, {
              toValue: index * tabWidth,
              velocity: 10,
              useNativeDriver: true,
            }).start();
          }
        }, [isFocused]);
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route?.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event?.defaultPrevented) {
            navigation.navigate(route?.name);
          }
          // Animated.spring(translateValue, {
          //   toValue: index * tabWidth,
          //   velocity: 10,
          //   useNativeDriver: true,
          // }).start();
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
              size: 21,
            })}
            <Text style={styles.label(isFocused ? colors.primary : '#7d7d7d')}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: (bottom) => ({
    position: 'absolute',
    bottom: isIos ? 0 : 5,
    width: totalWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: isIos ? 0 : 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingBottom: isIos ? bottom - 10 : 0,
    shadowColor: '#b89b70',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 8,
  }),
  slider: (color, translateValue, tabWidth) => ({
    position: 'absolute',
    top: 0,
    left: tabWidth / 4,
    height: 3,
    width: tabWidth / 2,
    borderRadius: 10,
    backgroundColor: color,
    transform: [{ translateX: translateValue }],
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
    fontSize: 10,
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

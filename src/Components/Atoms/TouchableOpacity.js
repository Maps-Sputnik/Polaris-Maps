import React, { useRef } from 'react';
import { Pressable, StyleSheet, Animated } from 'react-native';

const AnimatedTouchable = Animated.createAnimatedComponent(Pressable);

const TouchableOpacityComponent = (props) => {
  const scale = useRef(new Animated.Value(1)).current;
  const { style, children, ...rest } = props;

  const scaleIn = () => {
    Animated.timing(scale, {
      toValue: 0.92,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const scaleOut = () => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <AnimatedTouchable
      style={[styles.container(scale), style]}
      delayPressIn={100}
      onPressIn={scaleIn}
      onPressOut={scaleOut}
      {...rest}
    >
      {children}
    </AnimatedTouchable>
  );
};

const styles = StyleSheet.create({
  container: (scale) => ({
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    transform: [{ scale }],
  }),
});

export default TouchableOpacityComponent;

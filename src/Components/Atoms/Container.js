import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Container = (props) => {
  const insets = useSafeAreaInsets();
  const { style, children, ...rest } = props;
  return (
    <View style={[styles.container(insets), style]} {...rest}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: (insets) => ({
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  }),
});

export default Container;

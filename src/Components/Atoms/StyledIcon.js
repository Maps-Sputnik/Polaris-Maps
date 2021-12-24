import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-remix-icon';

const StyledIcon = (props) => {
  const { name, size, color, style } = props;
  return (
    <View style={style}>
      <Icon name={name} size={size} color={color} />
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {},
// })

export default StyledIcon;

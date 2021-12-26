import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');
const LoadingIcon = require('@assets/JSON/Loading.json');
const size = 70;

const Loading = () => {
  return (
    <View style={styles.container}>
      <LottieView source={LoadingIcon} autoPlay loop style={styles.animation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: size,
    height: size,
    backgroundColor: '#fff',
    borderRadius: 8,
    zIndex: 10,
    alignSelf: 'center',
    position: 'absolute',
    top: height / 2 - size / 2,
    left: width / 2 - size / 2,
  },
  animation: {
    width: 120,
    height: 120,
  },
});

export default Loading;

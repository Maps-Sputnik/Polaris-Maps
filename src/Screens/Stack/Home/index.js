import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import RussiaSVG from '@assets/SVG/044-russia.svg';
// import { Svg } from 'react-native-svg';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <RussiaSVG width={50} height={50} />
    </View>
  );
};

export default Home;

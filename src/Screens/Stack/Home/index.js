import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import RussiaSVG from '@assets/SVG/044-russia.svg';
import Icon from 'react-native-remix-icon';
import LinearGradient from 'react-native-linear-gradient';
import VectorIcon from 'react-native-vector-icons/Ionicons';
import LottieView from 'lottie-react-native';
import TouchableOpacity from '@components/Atoms/TouchableOpacity';

const LoadingAnim = require('@assets/JSON/loadingNav.json');

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text>Custom SVG icons</Text>
        <RussiaSVG width={50} height={50} />
      </View>
      <View style={styles.section}>
        <Icon name="map-pin-range-line" size="48" color="#6666ff" />
        <Text>Remix Icons</Text>
      </View>
      <View style={styles.section}>
        <VectorIcon name="ios-heart" size={48} color="#ff0000" />
        <Text>Vector Icons</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.customFont}>Custom Font Family: Ubuntu</Text>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Lottie Animations</Text>
        <LottieView source={LoadingAnim} autoPlay loop style={styles.animation} />
      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.button}>
          <LinearGradient
            style={styles.gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#1A2980', '#26D0CE']}
          >
            <Text style={{ color: '#fff' }}>Linear Gradient</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

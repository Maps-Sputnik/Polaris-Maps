import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Container from '@components/Atoms/Container';
import Touchable from '@components/Atoms/TouchableOpacity';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { SIZES as sizes, COLORS as colors } from '@constants';
import styles from './styles';

const Profile = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const { height } = Dimensions.get('screen');
  return (
    <Container style={styles.container(insets)}>
      <Text style={styles.headerTxt}>Profile</Text>
    </Container>
  );
};

export default Profile;

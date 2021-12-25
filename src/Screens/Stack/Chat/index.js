import React from 'react';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Container from '@components/Atoms/Container';
import StyledIcon from '@components/Atoms/StyledIcon';
import Touchable from '@components/Atoms/TouchableOpacity';
import { SIZES as sizes, COLORS as colors } from '@constants';
import styles from './styles';

const Chat = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <Container style={styles.container(insets)}>
      <View style={styles.subCon}>
        <Text style={styles.headerTxt}>Chat screen</Text>
      </View>
    </Container>
  );
};

export default Chat;

import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import Touchable from '@components/Atoms/TouchableOpacity';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { SIZES as sizes, COLORS as colors } from '@constants';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const MemoRow = () => {
  const { height } = Dimensions.get('screen');
  const navigation = useNavigation();

  function handleDelete() {
    console.warn('Delete');
  }
  return (
    <Touchable
      style={[
        styles.row,
        styles.card,
        {
          height: height * 0.1,
        },
      ]}
      onPress={() => navigation.navigate('Navigation')}
    >
      <View>
        <FontAwesome5 name="location-arrow" size={sizes.icon * 1.1} color={colors.icon} />
      </View>
      <View style={styles.centerCon}>
        <Text style={styles.h4}>{'Home' || ''}</Text>
        <Text style={styles.h6}>{'5 Furness StBelfast, New York(NY)' || ''}</Text>
      </View>
      <View style={styles.actionsCon}>
        <Touchable onPress={handleDelete}>
          <IonIcons name="ios-trash-bin-outline" size={sizes.icon} color="red" />
        </Touchable>
      </View>
    </Touchable>
  );
};

export default React.memo(MemoRow);

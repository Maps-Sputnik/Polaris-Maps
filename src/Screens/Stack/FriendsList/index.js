import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import I18n from '@i18n';
import StyledIcon from '@components/Atoms/StyledIcon';
import Touchable from '@components/Atoms/TouchableOpacity';
import { SIZES as sizes, COLORS as colors } from '@constants';
import styles from './styles';

import RowMemo from './RowMemo';

const FriendsList = () => {
  const navigation = useNavigation();

  function handleFinal() {
    console.warn('to be implemented later');
  }
  // component funcs
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={[styles.row, styles.barCon]}>
        <Touchable onPress={() => navigation.goBack()}>
          <StyledIcon name="ri-arrow-left-s-line" size={sizes.icon * 1.3} color={colors.icon} />
        </Touchable>
        <Touchable onPress={() => navigation.goBack()} onPress={handleFinal}>
          <StyledIcon name="ri-search-line" size={sizes.icon} color={colors.icon} />
        </Touchable>
      </View>
      <Text style={styles.labelTxt}>{I18n.t('friendsList.Friends')}</Text>
      {/* content */}
      <RowMemo />
      <RowMemo />
    </ScrollView>
  );
};

export default FriendsList;

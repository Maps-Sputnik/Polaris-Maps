import React from 'react';
import { Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import Touchable from '@components/Atoms/TouchableOpacity';
import I18n from '@i18n';

const RowMemo = () => {
  return (
    <Touchable style={[styles.row, styles.friendCon]}>
      <FastImage source={require('@assets/Images/person.jpg')} style={styles.avatarImg} />
      <View style={styles.centerCon}>
        <Text style={styles.h4}>John Doe</Text>
      </View>
      <Touchable style={styles.unfriendBtn}>
        <Text style={[styles.h6, styles.btnTxt]}>{I18n.t('friendsList.Unfriend')}</Text>
      </Touchable>
    </Touchable>
  );
};

export default React.memo(RowMemo);

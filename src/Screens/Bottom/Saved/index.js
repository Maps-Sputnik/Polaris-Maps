import React, { useEffect, useState } from 'react';
import { Text, View, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '@store/Actions/types';
import styles from './styles';

import MemoRow from './MemoRow';

const Saved = () => {
  // hooks
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  // effects

  useEffect(() => {
    dispatch({ type: types.FETCH_POSTS_REQUEST });
  }, []);

  return (
    <ScrollView>
      <Text style={styles.headerTxt}>Saved places</Text>
      <View style={styles.subCon}>
        <MemoRow />
        <MemoRow />
        <MemoRow />
      </View>
    </ScrollView>
  );
};

export default Saved;

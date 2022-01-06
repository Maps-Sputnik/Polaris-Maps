import React, { useEffect, useState } from 'react';
import { Text, View, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import LoadingHoc from '@components/HOCs/LoadingHoc';
import * as types from '@store/Actions/types';
import MemoRow from './MemoRow';
import styles from './styles';

const LoadingWithScrollView = LoadingHoc(ScrollView);

const Saved = () => {
  // hooks
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const { loader } = useSelector((state) => ({ loading: state.loader.general }));
  // effects
  useEffect(() => {
    dispatch({ type: types.FETCH_POSTS_REQUEST });
  }, []);

  return (
    <LoadingWithScrollView loader={loader}>
      <Text style={styles.headerTxt}>Saved places</Text>
      <View style={styles.subCon}>
        <MemoRow />
        <MemoRow />
        <MemoRow />
      </View>
    </LoadingWithScrollView>
  );
};

export default Saved;

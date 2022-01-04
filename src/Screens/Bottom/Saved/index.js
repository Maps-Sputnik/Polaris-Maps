import React, { useEffect, useState } from 'react';
import { Text, View, Dimensions, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Container from '@components/Atoms/Container';
import Touchable from '@components/Atoms/TouchableOpacity';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { SIZES as sizes, COLORS as colors } from '@constants';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '@store/Actions/types';
import styles from './styles';

const Saved = () => {
  // hooks
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const { height } = Dimensions.get('screen');
  const dispatch = useDispatch();
  // effects

  useEffect(() => {
    dispatch({ type: types.FETCH_POSTS_REQUEST });
  }, []);

  const dummy = [
    {
      id: 1,
      label: 'Home',
      location: '5 Furness StBelfast, New York(NY)',
    },
    {
      id: 2,
      label: 'Work',
      location: '5 Furness StBelfast, New York(NY)',
    },
  ];

  // callBacks
  function handleDelete() {
    console.warn('Delete');
  }

  // function comps
  function renderRow(name, location) {
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
          <Text style={styles.h4}>{name || ''}</Text>
          <Text style={styles.h6}>{location || ''}</Text>
        </View>
        <View style={styles.actionsCon}>
          <Touchable onPress={handleDelete}>
            <IonIcons name="ios-trash-bin-outline" size={sizes.icon} color="red" />
          </Touchable>
        </View>
      </Touchable>
    );
  }
  return (
    <Container style={styles.container(insets)}>
      <Text style={styles.headerTxt}>Saved places</Text>
      <View style={styles.subCon}>
        <FlatList
          data={dummy}
          renderItem={({ item }) => renderRow(item?.label, item?.location)}
          keyExtractor={(item) => item?.id}
          style={styles.list}
        />
      </View>
    </Container>
  );
};

export default Saved;

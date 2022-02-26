import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-remix-icon';
import { useNavigation } from '@react-navigation/native';

import CustomTouchableOpacity from '@components/Atoms/TouchableOpacity';
import { MAIN_HEADER } from '@constants';
import I18n from '@i18n';

const CustomHeader = (props) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View style={styles.container(insets)}>
      <CustomTouchableOpacity onPress={() => navigation.openDrawer()}>
        <Icon name="menu-4-line" size={28} color="#000" />
      </CustomTouchableOpacity>
      <TouchableOpacity style={styles.searchBar} onPress={() => navigation.navigate('Search')}>
        <Text style={styles.title}>{I18n.t('search.Search')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: (insets) => ({
    position: 'absolute',
    top: insets.top + MAIN_HEADER.top,
    height: MAIN_HEADER.height,
    width: '95%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 3,
    padding: 10,
    shadowColor: '#c2c2c2',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    elevation: 3,
    alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'row',
  }),
  searchBar: {
    marginLeft: 30,
    width: '80%',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Ubuntu-Italic',
    color: '#878684',
  },
});

export default CustomHeader;

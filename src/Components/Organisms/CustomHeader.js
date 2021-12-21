import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-remix-icon';
import { useNavigation } from '@react-navigation/native';
import CustomTouchableOpacity from '@components/Atoms/TouchableOpacity';

const CustomHeader = (props) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View style={styles.container(insets)}>
      <CustomTouchableOpacity onPress={() => navigation.openDrawer()}>
        <Icon name="menu-4-line" size={28} color="#000" />
      </CustomTouchableOpacity>
      <TouchableOpacity style={styles.searchBar} onPress={() => navigation.navigate('Search')}>
        <Text style={styles.title}>Search...</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: (insets) => ({
    position: 'absolute',
    top: insets.top + 10,
    height: 50,
    width: '95%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 3,
    padding: 10,
    shadowColor: '#b89b70',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 8,
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
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import { SIZES as sizes } from '@constants';
import TouchableOpacity from '@components/Atoms/TouchableOpacity';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} showsVerticalScrollIndicator={false} style={styles.custom}>
      <TouchableOpacity style={styles.avatarCon}>
        <FastImage source={require('@assets/Images/person.jpg')} style={styles.avatarImg} />
        <View style={styles.centered}>
          <Text style={styles.name}>John Doe</Text>
        </View>
        {/* <AntDesign name="right" size={sizes.icon * 0.8} color="black" /> */}
      </TouchableOpacity>
      <DrawerItemList {...props} style={styles.itemsList} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  avatarCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 10,
    marginBottom: 20,
  },
  centered: {
    flex: 1,
  },
  avatarImg: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  name: {
    fontFamily: 'Lato-Bold',
    color: 'black',
    fontSize: sizes.h4,
    marginHorizontal: 10,
  },
});

export default CustomDrawerContent;

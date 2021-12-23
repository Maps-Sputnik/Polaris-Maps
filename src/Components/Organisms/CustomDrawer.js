import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { sizes } from '@utils';
import Opacity from '@components/Atoms/TouchableOpacity';
import { useNavigation } from '@react-navigation/native';

function CustomDrawerContent(props) {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props} showsVerticalScrollIndicator={false} style={styles.custom}>
      <Opacity style={styles.avatarCon} onPress={() => navigation.navigate('Settings')}>
        <Image source={require('@assets/Images/person.jpg')} style={styles.avatarImg} />
        <View style={styles.centered}>
          <Text style={styles.name}>John Doe</Text>
        </View>
      </Opacity>
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
  nameCon: {
    marginHorizontal: 10,
  },
  name: {
    fontFamily: 'Lato-Bold',
    color: 'black',
    fontSize: sizes.h4,
    marginHorizontal: 10,
  },
});

export default CustomDrawerContent;

import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, Dimensions, Linking, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GiftedChat } from 'react-native-gifted-chat';
import FastImage from 'react-native-fast-image';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Container from '@components/Atoms/Container';
import Touchable from '@components/Atoms/TouchableOpacity';
import { SIZES as sizes, COLORS as colors, MAIN_HEADER } from '@constants';
// import styles from './styles';

const Chat = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
  }, []);

  function handleCall() {
    Linking.openURL(`tel:+998999999999`);
  }
  return (
    <>
      <View style={[styles.row, styles.headerCon]}>
        <View style={[styles.row]}>
          <Touchable style={styles.btns} onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={sizes.icon * 1.1} color="black" />
          </Touchable>
          <FastImage source={require('@assets/Images/person.jpg')} style={styles.avatarImg} />
          <View style={styles.textCon}>
            <Text style={styles.nameTxt}>John Doe</Text>
            <Text style={styles.statusTxt}>Online</Text>
          </View>
        </View>
        <View style={[styles.row]}>
          <Touchable style={styles.btns} onPress={handleCall}>
            <FontAwesome5 name="phone-alt" size={sizes.icon * 0.8} color="black" />
          </Touchable>
          <Touchable style={styles.btns}>
            <Entypo name="dots-three-vertical" size={sizes.icon * 0.8} color="black" />
          </Touchable>
        </View>
      </View>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: (insets) => ({
    backgroundColor: 'white',
    flex: 1,
    // paddingTop: MAIN_HEADER.height + insets.top + MAIN_HEADER.top + 10,
  }),
  avatarImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  headerCon: {
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: '#b7b7a4',
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btns: {
    marginHorizontal: 10,
  },
  textCon: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  nameTxt: {
    fontFamily: 'Lato-Bold',
    fontSize: sizes.h4,
    color: 'black',
  },
  statusTxt: {
    fontFamily: 'Lato-Regular',
    color: '#018AEB',
  },
});

export default Chat;

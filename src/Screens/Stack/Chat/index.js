import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, Linking, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GiftedChat, Send, Day, Time, Bubble } from 'react-native-gifted-chat';
import FastImage from 'react-native-fast-image';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Touchable from '@components/Atoms/TouchableOpacity';
import { SIZES as sizes, COLORS as colors, MAIN_HEADER } from '@constants';
import styles from './styles';

const Chat = () => {
  // hooks
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  // states
  const [messages, setMessages] = useState([]);
  // effects
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
  // callbacks
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
  }, []);

  function handleCall() {
    Linking.openURL(`tel:+998999999999`);
  }
  function handlePopup() {
    console.warn('Handled later...');
  }

  // function comps
  function renderEmptyChat() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.emptyChatTxt}>No messages here yet...</Text>
      </View>
    );
  }
  function customSendBtn(props) {
    return (
      <Send {...props}>
        <Ionicons name="ios-send-sharp" size={sizes.icon} color="#018AEB" style={styles.sendBtn} />
      </Send>
    );
  }
  function renderDay(props) {
    return <Day {...props} textStyle={styles.dayTxt} />;
  }

  function renderBubble(props) {
    return <Bubble {...props} textStyle={styles.bubbleTxt} wrapperStyle={styles.bubbleWrapper} />;
  }

  function renderTime(props) {
    return <Time {...props} textStyle={styles.timeTxt} />;
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
          <Touchable style={styles.btns} onPress={handlePopup}>
            <Entypo name="dots-three-vertical" size={sizes.icon * 0.8} color="black" />
          </Touchable>
        </View>
      </View>
      <GiftedChat
        messages={messages}
        renderChatEmpty={renderEmptyChat}
        renderSend={customSendBtn}
        textInputStyle={styles.textInput}
        style={styles.chatCon}
        onSend={(messages) => onSend(messages)}
        renderDay={renderDay}
        renderBubble={renderBubble}
        renderTime={renderTime}
        user={{
          _id: 1,
        }}
        listViewProps={{
          style: {
            backgroundColor: '#f8f9fa',
          },
        }}
      />
    </>
  );
};

export default Chat;

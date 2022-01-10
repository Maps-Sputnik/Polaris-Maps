import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, Linking, Platform, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GiftedChat, Send, Day, Time, Bubble } from 'react-native-gifted-chat';
import FastImage from 'react-native-fast-image';
import RemixIcon from 'react-native-remix-icon';
import Touchable from '@components/Atoms/TouchableOpacity';
import { SIZES as sizes, COLORS as colors } from '@constants';
import styles from './styles';

const isIos = Platform.OS === 'ios';
const { width } = Dimensions.get('window');

const Chat = () => {
  // hooks
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  // states
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: 'Hello developer',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
      image: 'https://placeimg.com/500/500/any',
      sent: true,
      received: true,
    },
  ]);

  // callbacks
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
    setTimeout(() => {
      setMessages((messages) => {
        return messages.map((message) => ({ ...message, sent: true, received: false }));
      });
    }, 1000);
    setTimeout(() => {
      setMessages((messages) => {
        return messages.map((message) => ({ ...message, sent: true, received: true }));
      });
    }, 2000);
  }, []);

  console.log(messages);

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
        <RemixIcon
          name="send-plane-2-fill"
          size={sizes.icon}
          color={colors.main}
          style={styles.sendBtn}
        />
        {/* <Ionicons name="ios-send-sharp" size={sizes.icon} color="#018AEB" style={styles.sendBtn} /> */}
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

  function renderTicks(message) {
    if (message.received) {
      return <RemixIcon name="check-double-line" size={sizes.icon / 2} color={'#fff'} />;
    } else if (message.sent && !message.received) {
      return <RemixIcon name="check-line" size={sizes.icon / 2} color={'#fff'} />;
    } else {
      return null;
    }
  }

  function renderMessageImage(props) {
    return (
      <View>
        <FastImage
          source={{ uri: props.currentMessage.image }}
          style={{ width: width / 2, height: width / 2 }}
          resizeMode="cover"
        />
      </View>
    );
  }

  return (
    <View style={styles.container(insets)}>
      <View style={[styles.row, styles.headerCon]}>
        <View style={[styles.row]}>
          <Touchable onPress={() => navigation.goBack()}>
            <RemixIcon
              name={isIos ? 'arrow-left-s-line' : 'arrow-left-line'}
              size={sizes.icon * 1.1}
              color="black"
            />
          </Touchable>
          <FastImage source={require('@assets/Images/person.jpg')} style={styles.avatarImg} />
          <View style={styles.textCon}>
            <Text style={styles.nameTxt}>John Doe</Text>
            <Text style={styles.statusTxt}>{isIos ? 'Online' : 'Last seen recently'}</Text>
          </View>
        </View>
        <View style={[styles.row]}>
          <Touchable style={styles.btns} onPress={handleCall}>
            <RemixIcon name="phone-fill" size={sizes.icon} color="black" />
          </Touchable>
          <Touchable style={styles.btns} onPress={handlePopup}>
            <RemixIcon name="more-2-fill" size={sizes.icon} color="black" />
          </Touchable>
        </View>
      </View>
      <GiftedChat
        messages={messages}
        renderChatEmpty={renderEmptyChat}
        renderSend={customSendBtn}
        textInputStyle={styles.textInput}
        style={styles.chatCon}
        onSend={onSend}
        renderDay={renderDay}
        renderBubble={renderBubble}
        renderTime={renderTime}
        renderTicks={renderTicks}
        // renderMessageImage={renderMessageImage}
        user={{
          _id: 1,
        }}
        listViewProps={{
          style: {
            backgroundColor: '#f8f9fa',
          },
        }}
      />
    </View>
  );
};

export default Chat;

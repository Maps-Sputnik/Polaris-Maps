import React, { useState, useMemo } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Contacts from 'react-native-contacts';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';

import Container from '@components/Atoms/Container';
import Touchable from '@components/Atoms/TouchableOpacity';
import { requestContactsPermission } from '@utils/Permissions';
import { SIZES as sizes } from '@constants';
import * as types from '@actions/types';
import styles from './styles';
import MemoRow from './MemoRow';

const Messages = () => {
  // hooks
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();

  // state
  const [selected, setSelected] = useState([]);

  // effects,
  const { contacts } = useSelector((state) => ({
    contacts: state.user.contacts,
  }));

  const filteredNums = useMemo(() => {
    if (contacts.length > 0) {
      let contactsWithNums = contacts.filter(
        (contact) => contact?.phoneNumbers[0]?.number?.length > 9
      );
      let phones = contactsWithNums.map((contact) => contact?.phoneNumbers[0]?.number);
      let trimmedNums = phones.map(function (phone) {
        return trimmer(phone);
      });
      return trimmedNums;
    } else {
      return null;
    }
  }, [contacts]);

  function trimmer(word) {
    let final = '';
    for (let i = 0; i < word.length; i++) {
      if (word.charAt(i) != ' ' && word.charAt(i) != '+') {
        final = final += word.charAt(i);
      }
    }
    return final;
  }

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) => contact?.phoneNumbers[0]?.number?.length > 9);
  }, [contacts]);

  // callbacks
  function importContacts() {
    dispatch({ type: types.GET_CONTACTS });
    // to be changed later
    const getContacts = async () => {
      try {
        const contacts = await Contacts.getAll();
        return contacts;
      } catch (err) {
        console.warn(err);
      }
    };
    requestContactsPermission().then((granted) => {
      if (granted) {
        console.log('contacts permission granted');
        getContacts().then((contacts) => {
          // console.log(contacts);
          dispatch({ type: types.SET_CONTACTS, payload: contacts });
        });
      } else {
        console.log('contacts permission denied');
      }
    });
  }

  // component funcs
  var colorsD = [
    '#0d41e1',
    '#a100f2',
    '#f20089',
    '#6610f2',
    '#04e762',
    '#fc2f00',
    '#183fe9',
    '#0cb4e5',
    '#0050e3',
    '#00bde8',
    '#de0152',
  ];

  function generateRandomColor() {
    let randomInt = Math.floor(Math.random() * 9) + 1;
    return colorsD[randomInt];
  }

  const usersMapped = useMemo(() => {
    return filteredContacts.map(function (user) {
      return (
        <MemoRow
          user={{
            id: user?.recordID,
            name: user?.displayName,
            avatar: user?.avatar,
            backupColor: '#00bde8',
            isFriend: false,
            isMember: user?.displayName?.length > 4,
          }}
          msg={{
            lastMsg: 'Smth',
            msgTime: '121212',
            unreadCount: 1,
          }}
          key={user?.recordID}
        />
      );
    });
  }, [filteredContacts]);

  function renderTools() {
    return (
      <View style={styles.toolsCon}>
        <Touchable style={styles.toolBtn}>
          <IonIcons
            name="ios-mail-open-outline"
            onPress={makeRead}
            size={sizes.icon}
            color="black"
          />
        </Touchable>
        <Touchable style={styles.toolBtn} onPress={handleDelete}>
          <IonIcons name="ios-trash-outline" size={sizes.icon} color="black" />
        </Touchable>
      </View>
    );
  }

  function renderNoChat() {
    return (
      <View style={styles.noChatCon}>
        <LottieView
          source={require('@assets/JSON/notFound.json')}
          autoPlay
          loop
          style={styles.animation}
        />
        <Touchable style={styles.gradientBtn} onPress={importContacts}>
          <LinearGradient
            style={styles.gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#1A2980', '#26D0CE']}
          >
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                fontFamily: 'Lato-Regular',
                fontSize: sizes.h4,
              }}
            >
              Import Contacts
            </Text>
          </LinearGradient>
        </Touchable>
      </View>
    );
  }

  return (
    <Container style={styles.container(insets)}>
      {!filteredContacts?.length ? (
        renderNoChat()
      ) : (
        <View style={styles.innerCon}>
          <Text style={styles.labelTxt}>Friends</Text>
          {selected?.length > 0 && renderTools()}
          {usersMapped}
        </View>
      )}
    </Container>
  );
};

export default Messages;

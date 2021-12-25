import React, { useState, useEffect, useMemo } from 'react';
import { Text, View, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Container from '@components/Atoms/Container';
import FastImage from 'react-native-fast-image';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Touchable from '@components/Atoms/TouchableOpacity';
import { SIZES as sizes, COLORS as colors, MAIN_HEADER } from '@constants';

import styles from './styles';

const Messages = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const { height, width } = Dimensions.get('screen');
  // states
  let staticUsers = [
    {
      id: 0,
      name: 'John Doe',
      avatar: require('@assets/Images/person.jpg'),
    },
    {
      id: 1,
      name: 'Jenice Doe',
      avatar: require('@assets/Images/person.jpg'),
    },
    {
      id: 2,
      name: 'John Doe',
      avatar: require('@assets/Images/person.jpg'),
    },
    {
      id: 3,
      name: 'Jenice Doe',
      avatar: require('@assets/Images/person.jpg'),
    },
  ];

  const [selected, setSelected] = useState([]);
  const [usersD, setUsersD] = useState();
  const [selectMode, setSelectMode] = useState(false);
  // effects,

  useEffect(() => {
    if (selected?.length) setSelectMode(true);
    else setSelectMode(false);
  }, [selected]);

  // callbacks
  function handlePress(_id) {
    if (!selectMode) {
      navigation.navigate('Chat');
    } else {
      handleLongPress(_id);
    }
  }

  function handleLongPress(_id) {
    if (selected.includes(_id)) {
      setSelected((prev) => prev.filter((item) => item != _id));
    } else {
      setSelected((prev) => [...prev, _id]);
    }
  }
  function handleDelete() {
    let filtered = [];
    for (let user of usersD) {
      if (!selected.includes(user?.id)) {
        filtered.push(user);
      }
    }
    setUsersD(filtered);
    setSelected([]);
  }
  function makeRead() {
    console.warn('to be handled later');
  }

  function importContacts() {
    // to be changed later
    setUsersD(staticUsers);
  }
  // component funcs
  function renderRow(user) {
    const { id, avatar, name, lastMsg = null, msgTime = null, unreadCount = null } = user;
    return (
      <Touchable
        style={[
          styles.chatRow,
          {
            width: width * 0.95,
            height: height * 0.08,
            paddingHorizontal: selected.includes(id) ? sizes.padding : 0,
            backgroundColor: selected.includes(id) ? '#a9d6e5' : 'white',
          },
        ]}
        onPress={() => handlePress(id)}
        onLongPress={() => handleLongPress(id)}
        key={id}
      >
        <FastImage
          source={avatar || require('@assets/Images/person.jpg')}
          style={styles.avatarImg}
        />

        <View style={styles.subCon}>
          <View style={[styles.nameCon, styles.rowBtw]}>
            <Text style={styles.nameTxt}>{name || ''}</Text>
            <View style={styles.badgeCon}>
              <Text style={styles.badgeTxt}>{unreadCount || 1}</Text>
            </View>
          </View>
          <View style={[styles.timeCon, styles.rowBtw]}>
            <Text style={styles.msgTxt}>
              {lastMsg?.length > 27
                ? `${lastMsg.slice(0, 26)}...`
                : lastMsg || 'Hi, How are you doin ? '}
            </Text>
            <Text style={styles.timeTxt}>{msgTime || '00:00'}</Text>
          </View>
        </View>
      </Touchable>
    );
  }

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
      {!usersD?.length ? (
        renderNoChat()
      ) : (
        <View style={styles.innerCon}>
          <Text style={styles.labelTxt}>Friends</Text>
          {selected?.length > 0 && renderTools()}
          {usersD.map(function (user) {
            return renderRow({
              id: user?.id,
              name: user?.name,
              avatar: user?.avatar,
            });
          })}
        </View>
      )}
    </Container>
  );
};

export default Messages;

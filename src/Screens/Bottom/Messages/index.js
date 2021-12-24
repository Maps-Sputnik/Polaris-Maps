import React, { useState } from 'react';
import { Text, View, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Container from '@components/Atoms/Container';
import FastImage from 'react-native-fast-image';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Touchable from '@components/Atoms/TouchableOpacity';
import { SIZES as sizes, COLORS as colors, MAIN_HEADER } from '@constants';

import styles from './styles';

const Messages = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const { height, width } = Dimensions.get('screen');

  // states
  const [selected, setSelected] = useState([]);
  const [usersD, setUsersD] = useState([
    {
      id: 0,
      name: 'John Doe',
      avatar: require('@assets/Images/person.jpg'),
    },
    {
      id: 1,
      name: 'John Doe',
      avatar: require('@assets/Images/person.jpg'),
    },
    {
      id: 2,
      name: 'John Doe',
      avatar: require('@assets/Images/person.jpg'),
    },
  ]);

  function handlePress() {
    console.warn('On Press');
  }

  function handleLongPress(_id) {
    if (selected.includes(_id)) {
      setSelected((prev) => prev.filter((item) => item != _id));
    } else {
      setSelected((prev) => [...prev, _id]);
    }
  }

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
        onPress={handlePress}
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
              {lastMsg?.length > 27 ? `${lastMsg.slice(0, 26)}...` : lastMsg || ''}
            </Text>
            <Text style={styles.timeTxt}>{msgTime || '00:00'}</Text>
          </View>
        </View>
      </Touchable>
    );
  }

  function renderTools() {
    return (
      <View>
        <Text>Renderer</Text>
      </View>
    );
  }
  return (
    <Container style={styles.container(insets)}>
      <View style={styles.innerCon}>
        <Text style={styles.labelTxt}>Friends</Text>
        {selected.length && renderTools()}
        {usersD &&
          usersD.map(function (user) {
            return renderRow({
              id: user?.id,
              name: user?.name,
              avatar: user?.avatar,
            });
          })}
      </View>
    </Container>
  );
};

export default Messages;

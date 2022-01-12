import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
import Touchable from '@components/Atoms/TouchableOpacity';
import { SIZES as sizes, COLORS as colors, MAIN_HEADER } from '@constants';
import styles from './styles';

function Row(props) {
  const { id, avatar, name, backupColor, isFriend, isMember } = props.user;
  const { lastMsg = null, msgTime = null, unreadCount = null } = props.msg;
  //   hooks
  const navigation = useNavigation();

  // callbacks
  function handlePress(_id) {
    navigation.navigate('Chat');
  }

  const { height, width } = Dimensions.get('screen');
  return (
    <Touchable
      style={[
        styles.chatRow,
        {
          width: '95%',
          height: height * 0.08,
          //   paddingHorizontal: selected.includes(id) ? sizes.padding : 0,
          //   backgroundColor: selected.includes(id) ? '#a9d6e5' : 'white',
          paddingHorizontal: 0,
          backgroundColor: 'white',
        },
      ]}
      onPress={() => handlePress(id)}
      //   onLongPress={() => handleLongPress(id)}
      key={id}
    >
      {avatar ? (
        <FastImage source={avatar} style={styles.avatarImg} />
      ) : (
        <View style={styles.noAvatarCon(backupColor)}>
          <Text style={styles.avatarTxt}>{name.charAt(0) || ''}</Text>
        </View>
      )}

      <View style={styles.subCon}>
        <View style={[styles.nameCon, styles.rowBtw]}>
          <Text style={styles.nameTxt}>{name || ''}</Text>
          {isFriend ? (
            <View style={styles.badgeCon}>
              <Text style={styles.badgeTxt}>{unreadCount || 1}</Text>
            </View>
          ) : (
            <Touchable style={styles.requestBtn(isMember)}>
              <Text style={styles.requestTxt}>{isMember ? 'Request' : 'Invite'}</Text>
            </Touchable>
          )}
        </View>
        {isFriend ? (
          <View style={[styles.timeCon, styles.rowBtw]}>
            <Text style={styles.msgTxt}>
              {lastMsg?.length > 27
                ? `${lastMsg.slice(0, 26)}...`
                : lastMsg || 'Hi, How are you doin ? '}
            </Text>
            <Text style={styles.timeTxt}>{msgTime || '00:00'}</Text>
          </View>
        ) : (
          <View></View>
        )}
      </View>
    </Touchable>
  );
}

export default React.memo(Row);

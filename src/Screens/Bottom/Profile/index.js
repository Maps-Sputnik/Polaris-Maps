import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import { Button, Dialog, Portal } from 'react-native-paper';
import Icon from 'react-native-remix-icon';
import I18n from '@i18n';
import Touchable from '@components/Atoms/TouchableOpacity';
import StyledIcon from '@components/Atoms/StyledIcon';
import { SIZES as sizes, COLORS as colors } from '@constants';
import styles from './styles';

const ProfileItem = ({ label, icon, onPress }) => {
  return (
    <TouchableOpacity style={styles.settingsRow} onPress={onPress}>
      <StyledIcon
        name={icon.name}
        size={icon.size}
        color={icon.color}
        style={styles.iconBg(icon.bg, 50, 13)}
      />
      <View style={styles.centered}>
        <Text style={styles.regular}>{label} </Text>
      </View>
      <Touchable hitSlop={10} style={styles.arrowContainer}>
        <StyledIcon
          name={'arrow-right-s-line'}
          size={sizes.icon * 0.7}
          color={colors.icon}
          style={styles.iconBg('#f5f5f5', 10, 9)}
        />
      </Touchable>
    </TouchableOpacity>
  );
};

const Profile = () => {
  // hooks
  const navigation = useNavigation();
  // states
  const [logoutVisible, setLogoutVisible] = React.useState(false);

  const showLogOutAlert = () => setLogoutVisible(true);
  const hideLogOutAlert = () => setLogoutVisible(false);
  const navigate =
    (name, params = {}) =>
    () => {
      navigation.navigate(name, params);
    };

  const handleLogOut = () => {
    hideLogOutAlert();
    navigation.navigate('Login');
  };

  function renderLogOutAlert() {
    return (
      <Portal>
        <Dialog visible={logoutVisible} onDismiss={hideLogOutAlert}>
          <Dialog.Title>{I18n.t('settings.LogOutTxt')} </Dialog.Title>
          <Dialog.Actions>
            <Button onPress={hideLogOutAlert} color="green">
              {I18n.t('settings.Cancel')}
            </Button>
            <Button onPress={handleLogOut} color="red">
              {I18n.t('settings.Sure')}
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      {/* <Text style={styles.headerTxt}>Profile</Text> */}
      <View style={styles.profileCon}>
        <View style={[styles.miniBar, styles.row]}>
          <Touchable onPress={() => console.warn('smth')}>
            {/* <Icon name={'settings-line'} size={sizes.icon} color={colors.icon} /> */}
          </Touchable>
          <Touchable onPress={() => navigation.navigate('EditProfile')}>
            <Icon name={'pencil-line'} size={sizes.icon} color={colors.icon} />
          </Touchable>
        </View>
        <View style={styles.centeredCon}>
          <FastImage source={require('@assets/Images/person.jpg')} style={styles.avatarImg} />
          <Text style={styles.h3}>John Does</Text>
          <Text style={styles.h6}>+998916693104</Text>
        </View>
        <View style={[styles.row, styles.statsCon]}>
          <Touchable onPress={() => navigation.navigate('FriendsList')}>
            <Text style={styles.upperTxt}>50+</Text>
            <Text style={styles.h6}>{I18n.t('settings.Friends')}</Text>
          </Touchable>
          <Touchable>
            <Text style={styles.upperTxt}>12000+</Text>
            <Text style={styles.h6}>miles on road</Text>
          </Touchable>
          <Touchable>
            <Text style={styles.upperTxt}>1550+</Text>
            <Text style={styles.h6}>{I18n.t('settings.Radars')}</Text>
          </Touchable>
        </View>
      </View>
      {/* settings */}
      <View style={styles.settingsCon}>
        {/* <Text style={styles.labelTxt}>Settings</Text> */}
        <ProfileItem
          label={I18n.t('settings.Language')}
          icon={{
            name: 'global-fill',
            size: sizes.icon - 5,
            bg: '#d9ffe2',
            color: '#1ab03d',
          }}
          onPress={navigate('LanguageSelect', { goBack: true })}
        />
        <ProfileItem
          label={I18n.t('settings.Notification')}
          icon={{
            name: 'notification-3-fill',
            size: sizes.icon - 5,
            bg: '#fceccc',
            color: '#e8a620',
          }}
          onPress={navigate('Notifications')}
        />
        <ProfileItem
          label={I18n.t('settings.Logout')}
          icon={{
            name: 'ri-logout-circle-line',
            size: sizes.icon - 5,
            bg: '#fedcda',
            color: '#a30800',
          }}
          onPress={showLogOutAlert}
        />
      </View>
      {logoutVisible && renderLogOutAlert()}
    </ScrollView>
  );
};

export default Profile;

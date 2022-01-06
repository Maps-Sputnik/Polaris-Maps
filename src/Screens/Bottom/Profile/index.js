import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import I18n, { changeLanguage } from '@i18n';
import Icon from 'react-native-remix-icon';
import { Button, Dialog, Portal } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@components/Atoms/Container';
import Touchable from '@components/Atoms/TouchableOpacity';
import StyledIcon from '@components/Atoms/StyledIcon';
import { SIZES as sizes, COLORS as colors } from '@constants';
import styles from './styles';

const Profile = () => {
  // hooks
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const { currLanguage, languages } = useSelector((state) => ({
    languages: state.language.allLanguages,
    currLanguage: state.language.language,
  }));

  // states
  const [visible, setVisible] = React.useState(false);
  const [logoutVisible, setLogoutVisible] = React.useState(false);

  // callbacks
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const showLogOutAlert = () => setLogoutVisible(true);
  const hideLogOutAlert = () => setLogoutVisible(false);

  const navigate = (val) => navigation.navigate(val || 'Navigation');

  function handleLangChange(lang) {
    // I18n.locale = lang;
    changeLanguage(lang);
    dispatch({ type: 'CHANGE_LANGUAGE', payload: lang });
    hideDialog();
  }

  function handleLogOut() {
    hideLogOutAlert();
    navigation.navigate('Login');
  }

  // component funcs
  function renderPopUp() {
    return (
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Change Language</Dialog.Title>
          <Dialog.Content>
            {languages &&
              languages.map(({ key, label }) => {
                return (
                  <Touchable
                    key={key}
                    style={[
                      styles.langRow,
                      {
                        backgroundColor: key === currLanguage ? colors.bg : 'white',
                      },
                    ]}
                    onPress={() => handleLangChange(key)}
                  >
                    <Text style={styles.langTxt}>{label || ''}</Text>
                  </Touchable>
                );
              })}
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog} color={colors.text}>
              {I18n.t('settings.Done')}
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    );
  }

  function renderLogOutAlert() {
    return (
      <Portal>
        <Dialog visible={logoutVisible} onDismiss={hideLogOutAlert}>
          <Dialog.Title>{I18n.t('settings.LogOutTxt')} </Dialog.Title>
          <Dialog.Actions>
            <Button onPress={handleLogOut} color="red">
              {I18n.t('settings.Sure')}
            </Button>
            <Button onPress={hideLogOutAlert} color="green">
              {I18n.t('settings.Cancel')}
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    );
  }

  function renderSettingsRow(label, path, icon, handler) {
    return (
      <TouchableOpacity style={styles.settingsRow} onPress={handler}>
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
      {visible && renderPopUp()}
      {logoutVisible && renderLogOutAlert()}
      {/* settings */}
      <View style={styles.settingsCon}>
        {/* <Text style={styles.labelTxt}>Settings</Text> */}

        {renderSettingsRow(
          I18n.t('settings.Language'),
          'Navigation',
          {
            name: 'global-fill',
            size: sizes.icon - 5,
            bg: '#d9ffe2',
            color: '#1ab03d',
          },
          showDialog
        )}
        {renderSettingsRow(
          I18n.t('settings.Notification'),
          'Navigation',
          {
            name: 'notification-3-fill',
            size: sizes.icon - 5,
            bg: '#fceccc',
            color: '#e8a620',
          },
          () => navigation.navigate('Notifications')
        )}
        {renderSettingsRow(
          I18n.t('settings.Logout'),
          'Navigation',
          {
            name: 'ri-logout-circle-line',
            size: sizes.icon - 5,
            bg: '#fedcda',
            color: '#a30800',
          },
          showLogOutAlert
        )}
      </View>
    </ScrollView>
  );
};

export default Profile;

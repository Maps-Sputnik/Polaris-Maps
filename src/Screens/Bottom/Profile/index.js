import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
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

  // callbacks
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const navigate = (val) => navigation.navigate(val || 'Navigation');

  function handleLangChange(lang) {
    // I18n.locale = lang;
    changeLanguage(lang);
    dispatch({ type: 'CHANGE_LANGUAGE', payload: lang });
    hideDialog();
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
              Done
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
    <Container style={styles.container(insets)}>
      {/* <Text style={styles.headerTxt}>Profile</Text> */}
      <View style={styles.profileCon}>
        <View style={[styles.miniBar, styles.row]}>
          <Touchable>
            <Icon name={'pencil-line'} size={sizes.icon} color={colors.icon} />
          </Touchable>
          <Touchable>
            <Icon name={'settings-line'} size={sizes.icon} color={colors.icon} />
          </Touchable>
        </View>
        <View style={styles.centeredCon}>
          <FastImage source={require('@assets/Images/person.jpg')} style={styles.avatarImg} />
          <Text style={styles.h3}>John Doe</Text>
          <Text style={styles.h6}>+998916693104</Text>
        </View>
        <View style={[styles.row, styles.statsCon]}>
          <Touchable>
            <Text style={styles.upperTxt}>50+</Text>
            <Text style={styles.h6}>friends</Text>
          </Touchable>
          <Touchable>
            <Text style={styles.upperTxt}>12000+</Text>
            <Text style={styles.h6}>miles on road</Text>
          </Touchable>
          <Touchable>
            <Text style={styles.upperTxt}>1550+</Text>
            <Text style={styles.h6}>radars</Text>
          </Touchable>
        </View>
      </View>
      {visible && renderPopUp()}
      {/* settings */}
      <View style={styles.settingsCon}>
        <Text style={styles.labelTxt}>Settings</Text>
        {renderSettingsRow(
          'Language',
          'Navigation',
          {
            name: 'global-fill',
            size: sizes.icon - 5,
            bg: '#d9ffe2',
            color: '#1ab03d',
          },
          showDialog
        )}
        {renderSettingsRow('Notifications', 'Navigation', {
          name: 'notification-3-fill',
          size: sizes.icon - 5,
          bg: '#fceccc',
          color: '#e8a620',
        })}
        {renderSettingsRow('Help', 'Navigation', {
          name: 'error-warning-fill',
          size: sizes.icon - 5,
          bg: '#d9e9ff',
          color: '#498ff2',
        })}
      </View>
    </Container>
  );
};

export default Profile;

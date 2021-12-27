import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import Container from '@components/Atoms/Container';
import Touchable from '@components/Atoms/TouchableOpacity';
import StyledIcon from '@components/Atoms/StyledIcon';
import Icon from 'react-native-remix-icon';
import { SIZES as sizes, COLORS as colors } from '@constants';
import styles from './styles';

const Profile = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  function renderSettingsRow(label, path, icon) {
    return (
      <TouchableOpacity
        style={styles.settingsRow}
        onPress={() => navigation.navigate(path || 'Navigation')}
      >
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

      {/* settings */}
      <View style={styles.settingsCon}>
        <Text style={styles.labelTxt}>Settings</Text>
        {renderSettingsRow('Language', 'Navigation', {
          name: 'global-fill',
          size: sizes.icon - 5,
          bg: '#d9ffe2',
          color: '#1ab03d',
        })}
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

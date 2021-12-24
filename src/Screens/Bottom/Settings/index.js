import React from 'react';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Container from '@components/Atoms/Container';
import StyledIcon from '@components/Atoms/StyledIcon';
import Touchable from '@components/Atoms/TouchableOpacity';
import { SIZES as sizes, COLORS as colors } from '@constants';
import styles from './styles';

const Settings = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  function renderRow(label, path, icon) {
    return (
      <TouchableOpacity style={styles.row} onPress={() => navigation.navigate(path || 'Home')}>
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
      <View style={styles.subCon}>
        <Text style={styles.headerTxt}>Settings</Text>
        <View style={styles.accountCon}>
          <Text style={styles.labelTxt}>Account</Text>
          {renderRow('John Doe', 'Home', {
            name: 'user-6-fill',
            size: sizes.icon - 5,
            bg: '#e6e6e6',
            color: '#a1a1a1',
          })}
          <Text style={styles.labelTxt}>Settings</Text>
          {renderRow('Language', 'Home', {
            name: 'global-fill',
            size: sizes.icon - 5,
            bg: '#d9ffe2',
            color: '#1ab03d',
          })}
          {renderRow('Notifications', 'Home', {
            name: 'notification-3-fill',
            size: sizes.icon - 5,
            bg: '#fceccc',
            color: '#e8a620',
          })}
          {renderRow('Help', 'Home', {
            name: 'error-warning-fill',
            size: sizes.icon - 5,
            bg: '#d9e9ff',
            color: '#498ff2',
          })}
        </View>
      </View>
    </Container>
  );
};

export default Settings;

import React, { useCallback } from 'react';
import { View, Text, Linking } from 'react-native';
import FastImage from 'react-native-fast-image';
import TouchableOpacity from '@components/Atoms/TouchableOpacity';
import { requestLocationPermission } from '@services/Permission';
import styles from './styles';
import Container from '@components/Atoms/Container';
import I18n from '@i18n';

const LocationIcon = require('@assets/PNG/LocationPin.png');

const AskPermission = ({ permissionGranted }) => {
  const onPress = useCallback(async () => {
    if (permissionGranted === null) {
      const granted = await requestLocationPermission();
      dispatch({ type: SET_PERMISSION, payload: granted });
    } else {
      await Linking.openSettings();
    }
  }, []);

  return (
    <Container style={styles.mainContainer}>
      <View style={styles.content}>
        <FastImage source={LocationIcon} style={styles.image} />
        <Text style={styles.allowText}>{I18n.t('navigationScreen.noPermission')}</Text>
        <TouchableOpacity onPress={onPress} style={styles.allowButton}>
          <Text style={styles.allowButtonText}>{I18n.t('navigationScreen.allow')}</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default AskPermission;

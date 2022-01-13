import { PermissionsAndroid, Platform } from 'react-native';
import Contacts from 'react-native-contacts';
import RNLocation from 'react-native-location';

// const types = ['authorizedWhenInUse', 'notDetermined', 'denied', 'restricted', 'authorizedAlways'];

export const requestContactsPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Contacts',
          message: 'Sputnik would like to view your contacts to connect with you',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      // console.warn(err);
    }
  } else {
    const isGranted = await Contacts.requestPermission();
    if (isGranted === 'authorized') {
      return true;
    } else {
      return false;
    }
  }
};

export const requestLocationPermission = async () => {
  let granted = null;
  RNLocation.configure({
    allowsBackgroundLocationUpdates: true,
    desiredAccuracy: {
      ios: 'bestForNavigation',
      android: 'highAccuracy',
    },
    androidProvider: 'auto',
    activityType: 'automotiveNavigation',
    allowsBackgroundLocationUpdates: true,
    showsBackgroundLocationIndicator: false,
  });

  const isAlways = await RNLocation.checkPermission({
    ios: 'always',
    android: {
      detail: 'fine',
    },
  });

  const whenInUse = await RNLocation.checkPermission({
    ios: 'whenInUse',
    android: {
      detail: 'coarse',
    },
  });

  if (isAlways) return true;
  if (whenInUse) return true;

  granted = await RNLocation.requestPermission({
    ios: 'always',
    android: {
      detail: 'fine',
      rationale: {
        title: 'Location permission',
        message:
          'Please choose "Always allow", otherwise, some functionalities might not be available.',
        buttonPositive: 'OK',
        buttonNegative: 'Cancel',
      },
    },
  });
  // if android differs from iOS add denied option here
  if (granted !== ('denied' && 'restricted' && 'never_ask_again' && false)) {
    return true;
  }
  return false;
};

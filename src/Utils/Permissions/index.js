import { PermissionsAndroid, Platform } from 'react-native';
import Contacts from 'react-native-contacts';

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
    return true;
  }
};

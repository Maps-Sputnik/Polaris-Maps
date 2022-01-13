import SInfo from 'react-native-sensitive-info';

export const saveToken = async (name, token) => {
  await SInfo.setItem(name, token, {
    sharedPreferencesName: 'mySharedPrefs',
    keychainService: 'myKeychain',
  });
};

export const getToken = async (name) =>
  SInfo.getItem(name, {
    sharedPreferencesName: 'mySharedPrefs',
    keychainService: 'myKeychain',
  });

export const deleteToken = async (name) => {
  await SInfo.deleteItem(name, {
    sharedPreferencesName: 'mySharedPrefs',
    keychainService: 'myKeychain',
  });
};

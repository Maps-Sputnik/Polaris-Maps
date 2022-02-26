import React, { useEffect } from 'react';
import 'intl';
import 'intl/locale-data/jsonp/en';
import { StatusBar, LogBox } from 'react-native';
import MapboxGL, { Logger } from '@react-native-mapbox-gl/maps';
import { useDispatch, useSelector } from 'react-redux';
import RNLocation from 'react-native-location';
import { NavigationContainer } from '@react-navigation/native';
import Config from 'react-native-config';
import StackNavigator from '@navigation/Stack';
import { requestLocationPermission } from '@services/Permission';
import I18n, { changeLanguage } from '@i18n';
import { SET_PERMISSION, GET_ACCESS_TOKEN } from '@store/Actions/types';

const ignoreLogs = () => {
  LogBox.ignoreLogs(['new NativeEventEmitter']);
  Logger.setLogCallback((log) => {
    const { message } = log;

    // expected warnings - see https://github.com/mapbox/mapbox-gl-native/issues/15341#issuecomment-522889062
    if (
      message.match('Request failed due to a permanent error: Canceled') ||
      message.match('Request failed due to a permanent error: Socket Closed')
    ) {
      return true;
    }
    return false;
  });
};

const App = () => {
  const dispatch = useDispatch();

  const { currLanguage } = useSelector((state) => ({
    currLanguage: state.language.language,
  }));

  useEffect(() => {
    if (currLanguage) {
      I18n.locale = currLanguage;
      changeLanguage(currLanguage);
    }
  }, [currLanguage]);

  useEffect(() => {
    // FOR PRODUCTION
    // dispatch({ type: GET_ACCESS_TOKEN })

    // FOR DEVELOPMENT
    console.info(Config);
    MapboxGL.setAccessToken(Config.MAPBOX_API_KEY);

    const unsubscribe = RNLocation.subscribeToPermissionUpdates((currentPermission) => {
      if (currentPermission === ('denied' || 'never_ask_again' || 'restricted')) {
        dispatch({ type: SET_PERMISSION, payload: false });
      } else {
        dispatch({ type: SET_PERMISSION, payload: true });
      }
    });

    const requestPermission = async () => {
      const granted = await requestLocationPermission();
      dispatch({ type: SET_PERMISSION, payload: granted });
    };

    requestPermission();
    ignoreLogs();

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;

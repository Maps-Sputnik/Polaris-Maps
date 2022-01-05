import React, { useEffect } from 'react';
import 'intl';
import 'intl/locale-data/jsonp/en';
import { StatusBar, LogBox } from 'react-native';
import MapboxGL, { Logger } from '@react-native-mapbox-gl/maps';
import { useDispatch, useSelector } from 'react-redux';
import RNLocation from 'react-native-location';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from '@navigation/Stack';
import I18n, { changeLanguage } from '@i18n';
import { SET_PERMISSION } from '@store/Actions/types';

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
    MapboxGL.setAccessToken(
      'sk.eyJ1IjoicG9sYXJpcy1tYXBzIiwiYSI6ImNreGthajR0ZDBzaWEycG81c2N4N3BvNWgifQ.oLvyK7pozaHFOzvCswzVYA'
    );
    LogBox.ignoreLogs(['new NativeEventEmitter']);

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

    RNLocation.requestPermission({
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
    }).then((granted) => {
      dispatch({ type: SET_PERMISSION, payload: granted });
    });
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
  }, []);

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;

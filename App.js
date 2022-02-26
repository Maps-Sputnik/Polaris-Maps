import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import { useDispatch, useSelector } from 'react-redux';
import RNLocation from 'react-native-location';
import { NavigationContainer } from '@react-navigation/native';
import Config from 'react-native-config';
import 'intl';
import 'intl/locale-data/jsonp/en';

import StackNavigator from '@navigation/Stack';
import { requestLocationPermission } from '@services/Permission';
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
    // FOR PRODUCTION
    // dispatch({ type: GET_ACCESS_TOKEN })

    // FOR DEVELOPMENT
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

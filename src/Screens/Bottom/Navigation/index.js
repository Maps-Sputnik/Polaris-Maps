import React, { useState, usesEffect, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import MapboxGL from '@react-native-mapbox-gl/maps';
import RNLocation from 'react-native-location';
import Container from '@components/Atoms/Container';
import { COLORS as colors } from '@constants';

const Dashboard = () => {
  const [coordinates, setCoordinates] = useState([69.294861, 41.316441]);

  useEffect(() => {
    const unsubscribe = RNLocation.subscribeToLocationUpdates((locations) => {
      let latestLocation = { timestamp: 0 };
      locations.forEach((location, index) => {
        if (location.timestamp > latestLocation.timestamp) {
          latestLocation = location;
        }
      });
      setCoordinates([latestLocation.longitude, latestLocation.latitude]);
    });
    return unsubscribe;
  }, []);

  return (
    <Container style={styles.container}>
      <MapboxGL.MapView
        style={styles.map}
        zoomEnabled={true}
        styleURL="mapbox://styles/polaris-maps/ckxkpuan6lmpk15o5is31ipm7"
      >
        <MapboxGL.UserLocation />
        <MapboxGL.Camera zoomLevel={13} centerCoordinate={coordinates} />
        <MapboxGL.PointAnnotation coordinate={coordinates} id={'asd'} />
      </MapboxGL.MapView>
    </Container>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

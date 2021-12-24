import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Container from '@components/Atoms/Container';
import { COLORS as colors } from '@constants';
import MapboxGL from '@react-native-mapbox-gl/maps';

const Dashboard = () => {
  const [coordinates] = useState([69.294861, 41.316441]);

  return (
    <Container style={styles.container}>
      <MapboxGL.MapView style={styles.map} zoomEnabled={true}>
        <MapboxGL.UserLocation />
        <MapboxGL.Camera zoomLevel={4} centerCoordinate={coordinates} />
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

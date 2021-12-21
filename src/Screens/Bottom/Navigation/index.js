import React from 'react';
import { StyleSheet } from 'react-native';
import Container from '@components/Atoms/Container';
import { colors } from '@utils/index';
import MapView, { Marker } from 'react-native-maps';

const Dashboard = ({ navigation }) => {
  return (
    <Container style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 40.374132,
          longitude: 71.472253,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: 40.374132,
            longitude: 71.472253,
          }}
        />
      </MapView>
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

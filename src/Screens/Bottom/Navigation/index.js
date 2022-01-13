import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import RNLocation from 'react-native-location';
import Container from '@components/Atoms/Container';
import TouchableOpacity from '@components/Atoms/TouchableOpacity';
import StyledIcon from '@components/Atoms/StyledIcon';
import styles from './styles';
import { COLORS } from '@constants';

const Dashboard = () => {
  // const [coordinates, setCoordinates] = useState([69.294861, 41.316441]);
  // const [userCoordinates, setUserCoordinates] = useState([69.294861, 41.316441]);
  // const [init, setInit] = useState(true);
  // const [zoom, setZoom] = useState(15);

  // useEffect(() => {
  // const unsubscribe = RNLocation.subscribeToLocationUpdates((locations) => {
  //   let latestLocation = { timestamp: 0 };
  //   locations.forEach((location, index) => {
  //     if (location.timestamp > latestLocation.timestamp) {
  //       latestLocation = location;
  //     }
  //   });
  //   setUserCoordinates([latestLocation.longitude, latestLocation.latitude]);
  //   if (init) {
  //     setCoordinates([latestLocation.longitude, latestLocation.latitude]);
  //     setInit(false);
  //   }
  // });
  // return unsubscribe;
  // }, []);

  // const zoomInOut = (zoomIn) => () => {
  //   if (zoomIn) {
  //     setZoom(zoom + 1);
  //   } else {
  //     setZoom(zoom - 1);
  //   }
  // };

  const returnToDefault = () => {
    // cameraRef?.current?.setCamera({
    //   centerCoordinate: userCoordinates,
    //   zoomLevel: zoom,
    //   animationDuration: 1000,
    // });
  };

  return (
    <Container style={styles.container}>
      {/* <MapboxGL.MapView
        style={styles.map}
        zoomEnabled={true}
        styleURL="mapbox://styles/polaris-maps/ckxln0bve2t5814krx77s65hl"
      >
        <MapboxGL.UserLocation androidRenderMode="compass" />
        <MapboxGL.Camera
          zoomLevel={zoom}
          centerCoordinate={coordinates}
          animationMode="flyTo"
          animationDuration={1000}
          heading={0}
        />
        <MapboxGL.PointAnnotation coordinate={coordinates} id={'asd'} />
      </MapboxGL.MapView>
      <View style={styles.zoomContainer}>
        <TouchableOpacity onPress={zoomInOut(true)}>
          <StyledIcon
            name="add-line"
            size={28}
            color="#000"
            style={[styles.shadow, styles.zoomButton]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={zoomInOut(false)}>
          <StyledIcon
            name="subtract-line"
            size={28}
            color="#000"
            style={[styles.shadow, styles.zoomButton]}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.compassContainer} onPress={returnToDefault}>
        <StyledIcon
          name="compass-3-line"
          size={30}
          color={COLORS.primary}
          style={[styles.shadow, styles.zoomButton]}
        />
      </TouchableOpacity> */}
    </Container>
  );
};

export default Dashboard;

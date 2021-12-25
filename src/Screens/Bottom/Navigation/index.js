import React from 'react';
import { StyleSheet } from 'react-native';
import Container from '@components/Atoms/Container';
import { COLORS as colors } from '@constants';

const Dashboard = ({ navigation }) => {
  return <Container style={styles.container}></Container>;
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

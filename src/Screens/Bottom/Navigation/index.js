import React from 'react';
import { StyleSheet, View } from 'react-native';
import Container from '@components/Atoms/Container';
import { colors, sizes } from '@utils/index';

const Dashboard = ({ navigation }) => {
  return <Container style={styles.container}></Container>;
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: sizes.padding,
    paddingVertical: sizes.padding,
  },
});

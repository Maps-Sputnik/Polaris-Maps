import { StyleSheet } from 'react-native';
import { COLORS as colors } from '@constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  zoomContainer: {
    position: 'absolute',
    right: 10,
    bottom: 250,
  },
  zoomButton: {
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },
  compassContainer: {
    position: 'absolute',
    right: 10,
    bottom: 130,
    width: 45,
    height: 45,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.32,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default styles;

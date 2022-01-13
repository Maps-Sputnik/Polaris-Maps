import { StyleSheet, Dimensions } from 'react-native';
import { COLORS as colors } from '@constants';

const { width } = Dimensions.get('window');

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
  // Ask Permission
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: width - 100,
    height: width - 100,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  allowButton: {
    width: width - 130,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: colors.buttonBg,
  },
  allowText: {
    fontSize: 15,
    // fontWeight: 'bold',
    textAlign: 'center',
  },
  allowButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 70,
    height: 70,
  },
});

export default styles;

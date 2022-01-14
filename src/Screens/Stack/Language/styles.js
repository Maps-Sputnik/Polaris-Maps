import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '@constants';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  langWrapper: {
    width: width - 100,
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 20,
  },
  langContainer: {
    marginVertical: 10,
    padding: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  languageText: {
    fontSize: 18,
    // fontWeight: 'bold',
    // color: COLORS.text,
  },
});

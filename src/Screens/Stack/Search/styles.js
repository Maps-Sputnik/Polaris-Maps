import { StyleSheet } from 'react-native';
import { SIZES as sizes, COLORS as colors, MAIN_HEADER } from '@constants';

const styles = StyleSheet.create({
  container: (insets) => ({
    backgroundColor: colors.bg,
    flex: 1,
    paddingTop: insets.top + 20,
  }),
  searchBar: {
    width: '95%',
    alignSelf: 'center',
    borderRadius: 0,
    position: 'relative',
    fontSize: sizes.h4,
    fontFamily: 'Lato-Regular',
    color: colors.text,
  },
  flatList: {
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchItem: {
    padding: 10,
    paddingVertical: 15,
    width: '95%',
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'space-between',
    borderRadius: 0,
    borderBottomWidth: 0.5,
    borderBottomColor: '#828282',
  },
  centerCon: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  animCon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: 250,
    height: 250,
  },
  h4: {
    fontSize: sizes.h4 * 0.9,
    fontFamily: 'Lato-Regular',
    color: colors.text,
  },
  h6: {
    fontSize: sizes.h6,
    fontFamily: 'Lato-Regular',
    color: '#525960',
    marginVertical: 5,
  },
});

export default styles;

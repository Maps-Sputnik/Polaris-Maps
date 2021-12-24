import { StyleSheet } from 'react-native';
import { SIZES as sizes, COLORS as colors, MAIN_HEADER } from '@constants';

const styles = StyleSheet.create({
  container: (insets) => ({
    backgroundColor: 'white',
    flex: 1,
    paddingTop: MAIN_HEADER.height + insets.top + MAIN_HEADER.top + 10,
  }),
  subCon: {
    paddingHorizontal: 20,
  },
  headerTxt: {
    fontFamily: 'Lato-Black',
    color: colors.text,
    fontSize: sizes.h3 + 3,
  },
  accountCon: {
    marginVertical: 20,
  },
  labelTxt: {
    fontFamily: 'Lato-Bold',
    color: colors.text,
    fontSize: sizes.h3 - 3,
    marginTop: 25,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  centered: {
    flex: 1,
    paddingHorizontal: 10,
  },
  iconBg: (backgroundColor, borderRadius, padding) => ({
    backgroundColor,
    padding,
    borderRadius,
  }),
  regular: {
    fontFamily: 'Lato-Bold',
    color: colors.text,
    fontSize: sizes.h4 - 1,
    textAlign: 'left',
  },
  arrowContainer: {
    zIndex: 1,
  },
});

export default styles;

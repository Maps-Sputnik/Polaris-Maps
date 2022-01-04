import { StyleSheet } from 'react-native';
import { SIZES as sizes, COLORS as colors, MAIN_HEADER } from '@constants';

const styles = StyleSheet.create({
  container: (insets) => ({
    backgroundColor: 'white',
    flex: 1,
  }),
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  barCon: {
    width: '100%',
    // height: MAIN_HEADER.height * 1.2,
    justifyContent: 'space-between',
    padding: 15,
    paddingHorizontal: 5,
  },
  formRow: {
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  textInput: {
    // backgroundColor: '#f4f4f5',
    width: '100%',
    alignSelf: 'center',
    // marginVertical: 10,
    fontFamily: 'Lato-Regular',
    color: colors.text,
    fontSize: sizes.h4,
    borderBottomWidth: 1,
    borderBottomColor: colors.bg,
  },
  labelTxt: {
    fontFamily: 'Lato-Black',
    color: colors.text,
    fontSize: sizes.h2,
    margin: 15,
  },
  h4: {
    fontFamily: 'Lato-Regular',
    color: colors.text,
    fontSize: sizes.h4,
  },
  h6: {
    fontFamily: 'Lato-Bold',
    color: colors.text,
    fontSize: sizes.h6 * 1.1,
  },
});

export default styles;

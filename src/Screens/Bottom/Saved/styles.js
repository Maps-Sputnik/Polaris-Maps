import { StyleSheet } from 'react-native';
import { SIZES as sizes, COLORS as colors, MAIN_HEADER } from '@constants';

const styles = StyleSheet.create({
  container: (insets) => ({
    backgroundColor: colors.bg,
    flex: 1,
    paddingTop: MAIN_HEADER.height + insets.top + MAIN_HEADER.top + 10,
  }),
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTxt: {
    fontFamily: 'Lato-Black',
    color: colors.text,
    fontSize: sizes.h3 + 3,
    marginHorizontal: 15,
    marginVertical: 20,
  },
  card: {
    backgroundColor: 'white',
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
  },
  centerCon: {
    flexDirection: 'column',
    flex: 1,
    paddingHorizontal: 15,
  },
  h4: {
    fontFamily: 'Lato-Bold',
    color: colors.text,
    fontSize: sizes.h4,
  },
  h6: {
    fontFamily: 'Lato-Regular',
    color: colors.text,
    fontSize: sizes.h6,
  },
  actionsCon: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
});

export default styles;

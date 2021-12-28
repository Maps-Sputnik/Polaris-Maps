import { StyleSheet } from 'react-native';
import { SIZES as sizes, COLORS as colors, MAIN_HEADER } from '@constants';

const styles = StyleSheet.create({
  container: (insets) => ({
    backgroundColor: colors.bg,
    flex: 1,
    paddingTop: MAIN_HEADER.height + insets.top + MAIN_HEADER.top + 10,
  }),
  headerTxt: {
    fontFamily: 'Lato-Black',
    color: colors.text,
    fontSize: sizes.h3 + 3,
    marginHorizontal: 15,
    marginVertical: 20,
  },
  avatarImg: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileCon: {
    backgroundColor: 'white',
    width: '95%',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
  },
  miniBar: {
    justifyContent: 'space-between',
  },
  h3: {
    fontFamily: 'Lato-Bold',
    color: colors.text,
    fontSize: sizes.h3,
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
  centeredCon: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 30,
  },
  statsCon: {
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  upperTxt: {
    fontFamily: 'Lato-Bold',
    color: colors.text,
    fontSize: sizes.h3,
  },

  // stetings
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
  settingsCon: {
    backgroundColor: 'white',
    width: '95%',
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
  },
  settingsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  langRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 10,
  },
  langImg: {
    width: 45,
    height: 45,
  },
  langTxt: {
    fontFamily: 'Lato-Regular',
    color: colors.text,
    fontSize: sizes.h4,
    marginHorizontal: 10,
  },
});

export default styles;

import { StyleSheet } from 'react-native';
import { SIZES as sizes, COLORS as colors, MAIN_HEADER } from '@constants';

const styles = StyleSheet.create({
  container: (insets) => ({
    backgroundColor: 'white',
    flex: 1,
    // paddingTop: MAIN_HEADER.height + insets.top + MAIN_HEADER.top + 10,
  }),
  scroll: {
    backgroundColor: 'white',
    // flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  barCon: {
    width: '100%',
    // height: MAIN_HEADER.height * 1.2,
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 15,
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
  flatListContent: {
    paddingLeft: 10,
  },
  notItem: (width, height) => ({
    backgroundColor: '#f5f5f5',
    width: width * 0.7,
    height: height * 0.75,
    marginHorizontal: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 5,
    position: 'relative',
  }),
  bodyCon: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    flex: 1,
  },
  notImg: (width, height) => ({
    width: width * 0.65,
    height: height * 0.4,
    borderRadius: 5,
    resizeMode: 'cover',
  }),
  titleTxt: {
    fontFamily: 'Lato-Bold',
    color: colors.text,
    fontSize: sizes.h4 * 1.1,
  },
  secondaryTxt: {
    fontFamily: 'Lato-Regular',
    color: 'black',
    fontSize: sizes.h6,
  },
  brandTxt: {
    fontFamily: 'Lato-Bold',
    color: colors.text,
    fontSize: sizes.h4 * 1.2,
  },
  viewCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
  viewCount: {
    fontFamily: 'Lato-Regular',
    color: 'black',
    fontSize: 14,
  },
  headerTxt: {
    fontFamily: 'Lato-Bold',
    color: colors.text,
    fontSize: sizes.h4 * 1.1,
  },
});

export default styles;

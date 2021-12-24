import { StyleSheet } from 'react-native';
import { SIZES as sizes, COLORS as colors, MAIN_HEADER } from '@constants';

const styles = StyleSheet.create({
  container: (insets) => ({
    backgroundColor: 'white',
    flex: 1,
    paddingTop: MAIN_HEADER.height + insets.top + MAIN_HEADER.top + 10,
  }),
  labelTxt: {
    fontFamily: 'Lato-Bold',
    fontSize: sizes.h3,
    color: 'black',
    marginHorizontal: sizes.padding,
  },
  chatRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderBottomWidth: 0.5,
    borderColor: '#b7b7a4',
    marginVertical: 2,
  },
  rowBtw: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subCon: {
    flexDirection: 'column',
    flex: 1,
    paddingHorizontal: sizes.padding,
  },
  avatarImg: {
    width: 60,
    height: 60,
    borderRadius: 60,
    resizeMode: 'cover',
  },
  badgeCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 25,
    height: 25,
    backgroundColor: '#018AEB',
    borderRadius: 20,
  },
  badgeTxt: {
    fontFamily: 'Lato-Bold',
    color: 'white',
    fontSize: sizes.h4,
  },
  nameTxt: {
    fontFamily: 'Lato-Bold',
    fontSize: sizes.h4,
    color: 'black',
  },
  msgTxt: {
    fontFamily: 'Lato-Regular',
    color: '#495057',
    fontSize: sizes.h5,
  },
  timeTxt: {
    fontSize: sizes.h6,
    color: '#495057',
  },
  editCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: sizes.padding,
  },
  editBtns: {
    marginHorizontal: 10,
  },
});

export default styles;

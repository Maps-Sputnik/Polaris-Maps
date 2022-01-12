import { StyleSheet } from 'react-native';
import { SIZES as sizes, COLORS as colors, MAIN_HEADER } from '@constants';

const styles = StyleSheet.create({
  container: (insets) => ({
    backgroundColor: 'white',
    // flex: 1,
    paddingTop: MAIN_HEADER.height + insets.top + MAIN_HEADER.top + 10,
  }),
  labelTxt: {
    fontFamily: 'Lato-Bold',
    fontSize: sizes.h4 * 1.2,
    color: 'black',
    marginHorizontal: sizes.padding,
    marginVertical: 5,
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
    width: 55,
    height: 55,
    borderRadius: 55,
    resizeMode: 'cover',
  },
  noAvatarCon: (color) => ({
    width: 55,
    height: 55,
    borderRadius: 55,
    backgroundColor: color ? color : '#6b705c',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  avatarTxt: {
    color: 'white',
    fontFamily: 'Lato-Regular',
    fontSize: sizes.h3,
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
  toolsCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  toolBtn: {
    marginHorizontal: 10,
  },
  noChatCon: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  animation: {
    width: 200,
    height: 200,
  },
  gradientBtn: {
    width: 200,
    height: 45,
  },
  gradient: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  requestBtn: (isMember) => ({
    backgroundColor: isMember ? '#018AEB' : '#387532',
    width: 70,
    height: 30,
    borderRadius: 0,
  }),
  requestTxt: {
    fontSize: sizes.h6,
    fontFamily: 'Lato-Regular',
    color: 'white',
  },
});

export default styles;

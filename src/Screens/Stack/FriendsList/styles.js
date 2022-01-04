import { StyleSheet } from 'react-native';
import { SIZES as sizes, COLORS as colors, MAIN_HEADER } from '@constants';

const styles = StyleSheet.create({
  container: (insets) => ({
    backgroundColor: 'white',
    flex: 1,
  }),
  scroll: {
    backgroundColor: 'white',
    flex: 1,
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
  avatarImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  unfriendBtn: {
    backgroundColor: '#018AEB',
    padding: 10,
    paddingVertical: 5,
    borderRadius: 0,
    marginHorizontal: 5,
  },
  friendCon: {
    justifyContent: 'space-between',
    marginHorizontal: 15,
    borderRadius: 0,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#f4f4f5',
    marginVertical: 5,
  },
  btnTxt: {
    color: 'white',
    fontFamily: 'Lato-Regular',
  },
  centerCon: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default styles;

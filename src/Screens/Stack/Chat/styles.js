import { StyleSheet } from 'react-native';
import { SIZES as sizes, COLORS as colors, MAIN_HEADER } from '@constants';

const styles = StyleSheet.create({
  container: (insets) => ({
    backgroundColor: 'white',
    flex: 1,
    // paddingTop: MAIN_HEADER.height + insets.top + MAIN_HEADER.top + 10,
  }),
  avatarImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  headerCon: {
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: '#b7b7a4',
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btns: {
    marginHorizontal: 10,
  },
  textCon: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  nameTxt: {
    fontFamily: 'Lato-Bold',
    fontSize: sizes.h4,
    color: 'black',
  },
  statusTxt: {
    fontFamily: 'Lato-Regular',
    color: '#018AEB',
  },
  chatCon: {
    backgroundColor: 'red',
  },
  sendBtn: {
    marginHorizontal: 10,
  },
  textInput: {
    lineHeight: sizes.h4,
    fontFamily: 'Lato-Regular',
    fontSize: sizes.h4,
  },
  emptyChatTxt: {
    transform: [{ scaleY: -1 }],
    fontSize: sizes.h5,
    fontFamily: 'Lato-Regular',
  },
  bubbleTxt: {
    left: {
      color: 'white',
      fontFamily: 'Lato-Regular',
    },
    right: {
      color: 'white',
      fontFamily: 'Lato-Regular',
    },
  },
  bubbleWrapper: {
    left: {
      backgroundColor: '#018AEB',
    },
    right: {
      backgroundColor: '#018AEB',
    },
  },
  dayTxt: {
    color: colors.text,
    fontSize: sizes.h6,
    fontFamily: 'Lato-Regular',
  },
  timeTxt: {
    right: {
      color: 'white',
    },
    left: {
      color: 'white',
    },
  },
});

export default styles;

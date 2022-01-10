import { StyleSheet } from 'react-native';
import { SIZES as sizes, COLORS as colors, MAIN_HEADER } from '@constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  scrollView: (insets) => ({
    flex: 1,
    alignItems: 'center',
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingHorizontal: 15,
  }),
  animation: {
    width: 300,
    height: 300,
  },
  animCon: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  formCon: {
    flex: 1,
    width: '100%',
    padding: 10,
    paddingBottom: 0,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.bg,
  },
  labelTxt: {
    fontFamily: 'Lato-Black',
    color: colors.text,
    fontSize: sizes.h2,
  },
  gradientBtn: {
    width: '70%',
    height: 45,
    alignSelf: 'center',
    marginVertical: 10,
  },
  gradient: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  btnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Lato-Bold',
    fontSize: sizes.h3,
  },
  policyTxt: {
    fontFamily: 'Lato-Regular',
    color: '#828282',
    fontSize: 12,
    padding: 10,
    marginTop: 10,
    textAlign: 'center',
  },
  policyTxtBold: {
    fontFamily: 'Lato-Bold',
    // darker gray color hex code for text
    color: '#525960',
    fontSize: 12,
  },
});

export default styles;

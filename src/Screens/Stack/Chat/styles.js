import { StyleSheet } from 'react-native';
import { SIZES as sizes, COLORS as colors, MAIN_HEADER } from '@constants';

const styles = StyleSheet.create({
  container: (insets) => ({
    backgroundColor: 'white',
    flex: 1,
    paddingTop: MAIN_HEADER.height + insets.top + MAIN_HEADER.top + 10,
  }),
  avatarImg: {
    width: 60,
    height: 60,
    borderRadius: 60,
    resizeMode: 'cover',
  },
});

export default styles;

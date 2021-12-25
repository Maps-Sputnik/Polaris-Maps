import { StyleSheet } from 'react-native';
import { SIZES as sizes, COLORS as colors, MAIN_HEADER } from '@constants';

const styles = StyleSheet.create({
  container: (insets) => ({
    backgroundColor: 'white',
    flex: 1,
    paddingTop: MAIN_HEADER.height + insets.top + MAIN_HEADER.top + 10,
  }),
});

export default styles;

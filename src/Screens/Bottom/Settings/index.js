import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Container from '@components/Atoms/Container';
import Opacity from '@components/Atoms/TouchableOpacity';
import { colors, sizes } from '@utils';

const Settings = () => {
  const { height } = Dimensions.get('window');
  const navigation = useNavigation();

  function renderIconWithBg(
    iconName,
    iconBg = '#e9ecef',
    iconSize = sizes.icon * 1.3,
    leftIcon = false
  ) {
    return (
      <View style={styles.iconBg(iconBg || '#e9ecef', leftIcon ? 50 : 10, leftIcon ? 8 : 5)}>
        <AntDesign
          name={iconName || 'info'}
          size={iconSize || sizes.icon * 1.3}
          color={colors.icon}
        />
      </View>
    );
  }

  function renderRow(label, path = 'Home', icons, bgs, sizes) {
    return (
      <Opacity style={styles.row} onPress={() => navigation.navigate(path || 'Home')}>
        {renderIconWithBg(icons[0], bgs[0], sizes[0], true)}
        <View style={styles.centered}>
          <Text style={styles.regular}>{label || ''} </Text>
        </View>
        {renderIconWithBg(icons[1], bgs[1], sizes[1])}
      </Opacity>
    );
  }
  return (
    <Container
      style={[
        styles.container,
        {
          paddingTop: height * 0.1,
        },
      ]}
    >
      <View style={styles.subCon}>
        <Text style={styles.headerTxt}>Settings</Text>
        <View style={styles.accountCon}>
          <Text style={styles.labelTxt}>Account</Text>
          {renderRow(
            'John Doe',
            'Home',
            ['user', 'right'],
            ['#fec89a', null],
            [sizes.icon * 1.2, sizes.icon * 0.8]
          )}
          <Text style={styles.labelTxt}>Settings</Text>
          {renderRow(
            'Language',
            'Home',
            ['wechat', 'right'],
            ['#e76f51', null],
            [sizes.icon * 1.2, sizes.icon * 0.8]
          )}
          {renderRow(
            'Notifications',
            'Home',
            ['notification', 'right'],
            ['#48cae4', null],
            [sizes.icon * 1.2, sizes.icon * 0.8]
          )}
          {renderRow(
            'Help',
            'Home',
            ['infocirlceo', 'right'],
            ['#d8e2dc', null],
            [sizes.icon * 1.2, sizes.icon * 0.8]
          )}
        </View>
      </View>
    </Container>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  subCon: {
    paddingHorizontal: 20,
  },
  headerTxt: {
    fontFamily: 'Lato-Black',
    color: colors.text,
    fontSize: sizes.h1,
  },
  accountCon: {
    marginVertical: 20,
  },
  labelTxt: {
    fontFamily: 'Lato-Bold',
    color: colors.text,
    fontSize: sizes.h3,
    marginTop: 25,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  centered: {
    flex: 1,
    paddingHorizontal: 10,
  },
  iconBg: (bgc, border, padd) => ({
    backgroundColor: bgc,
    padding: padd,
    borderRadius: border,
  }),
  regular: {
    fontFamily: 'Lato-Bold',
    color: colors.text,
    fontSize: sizes.h4 * 1.1,
    textAlign: 'left',
  },
});

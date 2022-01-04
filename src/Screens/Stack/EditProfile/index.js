import React, { useState } from 'react';
import { Text, View, Dimensions, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import I18n from '@i18n';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Container from '@components/Atoms/Container';
import StyledIcon from '@components/Atoms/StyledIcon';
import Touchable from '@components/Atoms/TouchableOpacity';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { SIZES as sizes, COLORS as colors } from '@constants';
import styles from './styles';

const EditProfile = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const { height } = Dimensions.get('screen');

  const [formState, setFormState] = useState({
    name: '',
    lastName: '',
    phone: '',
  });

  function handleChange(name, value) {
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleFinal() {
    console.warn('to be implemented later');
  }
  // component funcs
  return (
    <Container style={styles.container(insets)}>
      <View style={[styles.row, styles.barCon]}>
        <Touchable onPress={() => navigation.goBack()}>
          <StyledIcon name="ri-arrow-left-s-line" size={sizes.icon * 1.3} color={colors.icon} />
        </Touchable>
        <Touchable onPress={() => navigation.goBack()} onPress={handleFinal}>
          <StyledIcon name="ri-check-double-line" size={sizes.icon * 1.3} color={colors.icon} />
        </Touchable>
      </View>
      {/* form */}
      <View style={styles.form}>
        {/* textinput row with label text */}
        <Text style={[styles.h2, styles.labelTxt]}>{I18n.t('editProfile.UpdateCredentials')}</Text>
        <View style={styles.formRow}>
          <Text style={styles.h6}>{I18n.t('editProfile.Name')}*</Text>
          <TextInput
            style={styles.textInput}
            autoCapitalize="words"
            placeholder="John"
            maxLength={22}
            onChangeText={(value) => handleChange('name', value)}
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.h6}>{I18n.t('editProfile.Lastname')}*</Text>
          <TextInput
            style={styles.textInput}
            autoCapitalize="words"
            placeholder="Doe"
            maxLength={22}
            onChangeText={(value) => handleChange('lastname', value)}
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.h6}>{I18n.t('editProfile.Phone')}*</Text>
          <TextInput
            style={styles.textInput}
            placeholder="+XXX XXX XXX XX XX"
            defaultValue="+"
            maxLength={13}
            keyboardType="phone-pad"
            onChangeText={(value) => handleChange('phone', value)}
          />
        </View>
      </View>
    </Container>
  );
};

export default EditProfile;

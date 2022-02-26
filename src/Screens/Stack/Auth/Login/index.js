import React, { useState } from 'react';
import {
  Text,
  View,
  Dimensions,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import TextInputMask from 'react-native-text-input-mask';

import Touchable from '@components/Atoms/TouchableOpacity';
import { SIZES as sizes, COLORS as colors } from '@constants';
import I18n from '@i18n';
import styles from './styles';
import LottieView from 'lottie-react-native';

const Login = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const { height } = Dimensions.get('screen');
  // states
  const [phone, setPhone] = useState('');

  // callbacks
  function handleLogin() {
    console.warn('login');
  }

  function onChange(formatted, extracted) {
    console.log(formatted, extracted);
    setPhone(extracted);
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      // keyboardVerticalOffset={60}
      style={styles.container}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scrollView(insets)}
      >
        <View style={styles.animCon}>
          <LottieView
            source={require('@assets/JSON/login.json')}
            autoPlay
            loop
            style={styles.animation}
          />
        </View>
        <View style={styles.formCon}>
          <View>
            <Text style={styles.labelTxt}>{I18n.t('login.Login')}</Text>
            {/* <Text style={{ color: '#000' }}>You can style now!! :)</Text> */}
            <TextInputMask
              style={styles.input}
              placeholder="+998 90 123 45 67"
              placeholderTextColor={colors.placeholder}
              keyboardType="numeric"
              onChangeText={onChange}
              mask={'+998 [00] [000] [00] [00]'}
            />
          </View>
          <View>
            <Touchable style={styles.gradientBtn} onPress={handleLogin}>
              <LinearGradient
                style={styles.gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#1A2980', '#26D0CE']}
              >
                <Text style={styles.btnTxt}>{I18n.t('login.Login')}</Text>
              </LinearGradient>
            </Touchable>
            <Text style={styles.policyTxt}>
              {I18n.t('login.PrivacyTxt')}
              {/* <Text style={styles.policyTxtBold}>Terms of Service</Text> and{' '} */}
              {/* <Text style={styles.policyTxtBold}>Privacy Policy</Text> */}
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

import React from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import RemixIcon from 'react-native-remix-icon';
import { useNavigation, useRoute } from '@react-navigation/native';
import TouchableOpacity from '@components/Atoms/TouchableOpacity';
import Container from '@components/Atoms/Container';
import styles from './styles';
import { COLORS } from '@constants';

const Language = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { params } = useRoute();
  const { languages, currLanguage } = useSelector((state) => ({
    languages: state.language.allLanguages,
    currLanguage: state.language.language,
  }));

  const renderLanguages = () => {
    return languages.map((language, index) => {
      const setLanguage = () => {
        dispatch({ type: 'CHANGE_LANGUAGE', payload: language.key });
        if (params?.goBack) {
          navigation.goBack();
        }
      };

      return (
        <TouchableOpacity key={language.key} onPress={setLanguage} style={styles.langContainer}>
          <Text style={styles.languageText}>{language.label}</Text>
          {language.key === currLanguage && (
            <RemixIcon name="check-fill" size={20} color={COLORS.buttonBg} />
          )}
        </TouchableOpacity>
      );
    });
  };
  return (
    <Container style={styles.container} bounces={true}>
      <View style={styles.langWrapper}>{renderLanguages()}</View>
    </Container>
  );
};

export default Language;

import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import StyledIcon from '@components/Atoms/StyledIcon';
import Container from '@components/Atoms/Container';
import Touchable from '@components/Atoms/TouchableOpacity';
import I18n from '@i18n';
import { SIZES as sizes, COLORS as colors } from '@constants';
import styles from './styles';

import MemoizedItem from './MemoizedItem';

const Notifications = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  function handleFinal() {
    console.warn('smth');
  }
  return (
    <Container style={styles.container(insets)}>
      <View style={[styles.row, styles.barCon]}>
        <Touchable onPress={() => navigation.goBack()}>
          <StyledIcon name="ri-arrow-left-s-line" size={sizes.icon * 1.3} color={colors.icon} />
        </Touchable>
        <Text style={styles.headerTxt}>{I18n.t('notifications.Notifications')}</Text>
        <Touchable onPress={() => navigation.goBack()} onPress={handleFinal}>
          <StyledIcon name="ri-filter-3-line" size={sizes.icon} color={colors.icon} />
        </Touchable>
      </View>
      {/* content */}
      <FlatList
        data={nots}
        renderItem={(item) => <MemoizedItem {...item} />}
        keyExtractor={(item) => item.id.toString()}
        style={styles.flatlist}
        horizontal
        contentContainerStyle={styles.flatListContent}
      />
    </Container>
  );
};

var nots = [
  {
    id: 1,
    title: 'New Order',
    date: '2 days ago',
    body: 'lorem ipsum kjfisdj fisjdif sjdif jisdjf isjdifj isdjif jsidji fjsdjf isjdijf isdjifjisd',
    image: require('@assets/Images/person.jpg'),
  },
  {
    id: 2,
    title: 'New Order',
    date: '2 days ago',
    body: 'lorem ipsum kjfisdj fisjdif sjdif jisdjf isjdifj isdjif jsidji fjsdjf isjdijf isdjifjisd',
    image: require('@assets/Images/person.jpg'),
  },
  {
    id: 3,
    title: 'New Order',
    date: '2 days ago',
    body: 'lorem ipsum kjfisdj fisjdif sjdif jisdjf isjdifj isdjif jsidji fjsdjf isjdijf isdjifjisd',
    image: require('@assets/Images/person.jpg'),
  },
];

export default Notifications;

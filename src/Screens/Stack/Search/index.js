import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Container from '@components/Atoms/Container';
import StyledIcon from '@components/Atoms/StyledIcon';
import { SIZES as sizes, COLORS as colors } from '@constants';
import styles from './styles';
import { Searchbar } from 'react-native-paper';
import LottieView from 'lottie-react-native';
import I18n from '@i18n';

const Search = () => {
  // hooks
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  // states
  const [searchQuery, setSearchQuery] = React.useState('');
  // callbacks
  const onChangeSearch = (query) => setSearchQuery(query);
  function handeNavigate() {
    navigation.navigate('Navigation');
  }
  // components
  function searchItem(item) {
    return (
      <TouchableOpacity style={[styles.row, styles.searchItem]} onPress={handeNavigate}>
        <View style={styles.centerCon}>
          <Text style={styles.h4}>Garrett Rd, Upper Darby</Text>
          <Text style={styles.h6}>Tashkent, Uzbekistan</Text>
        </View>
        <StyledIcon name="ri-navigation-fill" color={colors.icon} size={sizes.icon} />
      </TouchableOpacity>
    );
  }

  return (
    <Container style={styles.container(insets)}>
      <Searchbar
        placeholder={I18n.t('search.Search')}
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
        icon={() => <StyledIcon name="ri-search-2-line" color={colors.icon} size={sizes.icon} />}
      />
      {searchQuery?.length ? (
        <FlatList
          data={items}
          renderItem={(item) => searchItem(item)}
          keyExtractor={(item) => item?.id}
          contentContainerStyle={styles.flatList}
          horizontal={false}
        />
      ) : (
        <View style={styles.animCon}>
          <LottieView
            source={require('@assets/JSON/search.json')}
            autoPlay
            loop
            style={styles.animation}
          />
        </View>
      )}
    </Container>
  );
};

var items = [
  {
    id: 1,
    title: 'Item 1',
    location: 'Location 1',
  },
  {
    id: 2,
    title: 'Item 2',
    location: 'Location 2',
  },
  {
    id: 3,
    title: 'Item 3',
    location: 'Location 3',
  },
];
export default Search;

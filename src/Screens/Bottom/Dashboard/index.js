import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Searchbar } from 'react-native-paper';
import { colors, sizes } from '@utils/index';

const Dashboard = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  const renderIcon = () => {
    return <Ionicons name="ios-menu" size={sizes.icon} color={colors.icon} />;
  };
  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <Searchbar
          placeholder="Search..."
          onChangeText={onChangeSearch}
          value={searchQuery}
          icon={renderIcon}
          onIconPress={() => navigation.openDrawer()}
        />
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: sizes.padding,
    paddingVertical: sizes.padding,
  },
});

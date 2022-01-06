import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const LoadingHoc = (Comp) => {
  return ({ loader, children, ...props }) => (
    <View style={styles.container}>
      <Comp {...props}>{children}</Comp>
      {loader && (
        <View style={styles.loaderContainer}>
          <View style={styles.loaderWrapper}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  loaderWrapper: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 20,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // elevation: 1,
  },
});

export default LoadingHoc;

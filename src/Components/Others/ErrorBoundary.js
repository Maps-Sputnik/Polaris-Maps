import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/Ionicons';
import RNRestart from 'react-native-restart';
import { withTheme } from 'react-native-paper';
import { connect } from 'react-redux';
import { COLORS } from '@constants';
// import I18n from '@utils/i18n'
// import {
//   SEND_ERROR_REQUEST as sendError,
// } from '@store/Actions/types'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
    // this.handleClick = this.handleClick.bind(this);
    this.colors = props.theme.colors;
  }

  static getDerivedStateFromError(error) {
    return { error: true };
  }

  componentDidCatch(error, errorInfo) {
    // deal with errorInfo if needed
    console.log(error, errorInfo);
    // this.props.dispatch({type: sendError, payload: { location: 'Error boundary', errorContent: JSON.stringify(errorInfo) }})
  }

  handleClick = async () => {
    // restart app
    RNRestart.Restart();
  };

  render() {
    if (this.state.error) {
      return (
        <SafeAreaView style={styles.safeAreaView}>
          <View style={styles.container}>
            <Text>
              <FontAwesome name="ios-information-circle-outline" size={60} color="#fff" />
            </Text>
            <Text style={styles.error}>Unknown error occured</Text>
            <Text style={styles.errorContent}>Sorry for the inconvenience.</Text>
            <TouchableOpacity onPress={this.handleClick} style={styles.button}>
              <Text style={styles.buttonText}>Restart</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      );
    } else {
      return this.props.children;
    }
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.bg,
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  error: {
    fontSize: 30,
    color: '#fff',
  },
  errorContent: {
    marginVertical: 10,
    lineHeight: 23,
    fontWeight: '500',
    color: '#fff',
  },
  button: {
    marginVertical: 20,
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    color: COLORS.text,
    fontWeight: 'bold',
  },
});

export default connect()(withTheme(ErrorBoundary));

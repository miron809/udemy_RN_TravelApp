/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Home from './src/screens/Home';

function App(): JSX.Element {
  return <Home />;
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: 'red',
  },
  view: {flex: 1, backgroundColor: 'yellow'},
});

export default App;

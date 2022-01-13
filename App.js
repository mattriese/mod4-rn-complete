import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number"></Header>
      <StartGameScreen></StartGameScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

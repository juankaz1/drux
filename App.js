// App.js

import React from 'react';
import { EventsProvider } from './src/contexts/EventsContext';
import AppNavigator from './src/navigation/AppNavigator';
import { SafeAreaView, StyleSheet, AppRegistry } from 'react-native';
import { StatusBar } from 'expo-status-bar';


AppRegistry.registerComponent('main', () => App);
export default function App() {
  return (
    <EventsProvider>
    <SafeAreaView style={styles.container}>
      <AppNavigator />
    </SafeAreaView>
    </EventsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
});
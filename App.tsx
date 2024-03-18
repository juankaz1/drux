// App.js

import React from 'react';
import { EventsProvider } from './src/contexts/EventsContext';
import AppNavigator from './src/navigation/AppNavigator';
import { StatusBar, SafeAreaView, StyleSheet, AppRegistry, ViewStyle } from 'react-native';




const App: React.FC = () => {
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
    marginTop: StatusBar.currentHeight ? StatusBar.currentHeight : 0,
  } as ViewStyle,
});

AppRegistry.registerComponent('main', () => App);

export default App;
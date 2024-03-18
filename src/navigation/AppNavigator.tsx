// src/navigation/AppNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import EventsScreen from '../screens/EventsScreen';
import DataInputScreen from '../screens/DataInputScreen';
import NewUserScreen from '../screens/NewUserScreen';


export type RootStackParamList = {
  Events: undefined; // No params expected for EventsScreen
  DataInput: { eventName: string; eventId: string }; // Expect eventName and eventId params for DataInputScreen
  NewUser: { eventName: string; eventId: string }; // Expect eventName and eventId params for NewUserScreen
};
const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Events">
        <Stack.Screen name="Events" component={EventsScreen} />
        <Stack.Screen name="DataInput" component={DataInputScreen} />
        <Stack.Screen name='NewUser' component={NewUserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

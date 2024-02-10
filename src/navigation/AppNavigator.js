// src/navigation/AppNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import EventsScreen from '../screens/EventsScreen';
import DataInputScreen from '../screens/DataInputScreen';
import NewUserScreen from '../screens/NewUserScreen';

const Stack = createStackNavigator();

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

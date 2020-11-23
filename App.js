/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

// import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
// screens

import SignIn from './app/components/SignIn';
import HomeScreen from './app/components/HomeScreen';



const Stack = createStackNavigator();
const noHeader = () => ({
  headerShown: false
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name="SignIn" component={SignIn} options={noHeader} />
         <Stack.Screen name="HomeScreen" component={HomeScreen} options={noHeader} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


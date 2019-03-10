import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ToCounterApp from './src/CounterComponent/ToCounterApp'
import HomeScreenApp from './src/HomeScreenComponent/HomeScreenApp'
import CalendarApp from './src/CalendarComponent/CalendarApp'
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createBottomTabNavigator({
  HomeScreen: {screen: HomeScreenApp},
  Calendar: {screen: CalendarApp},
  Counter: {screen: ToCounterApp},
});

const App = createAppContainer(MainNavigator);

export default App

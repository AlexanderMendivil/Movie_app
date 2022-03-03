import React from 'react';
import { Home } from './Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Details } from './Screens/Details';
import { Navbar } from './Components/Navbar';
import { View } from 'react-native';
import { MainNavigation } from './Components/MainNavigation';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
  <NavigationContainer>
      <MainNavigation/>
  </NavigationContainer>
  )
}
export default App;
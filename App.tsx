import React from 'react';
import { View } from 'react-native';
import { Home } from './Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{headerShown:false}} component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}
export default App;
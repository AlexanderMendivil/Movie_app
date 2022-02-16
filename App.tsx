import React from 'react';
import { Home } from './Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Details } from './Screens/Details';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{headerShown:false}} component={Home} />
      <Stack.Screen name="Detail" options={{headerShown:false}} component={Details} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}
export default App;
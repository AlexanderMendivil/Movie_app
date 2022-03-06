import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Details } from '../Screens/Details';
import { Navbar } from './Navbar';
import { NavbarHomeLeft } from './Navbar';
import { NavbarHomeRight } from './Navbar';
import { Home } from '../Screens/Home';
import { Search } from "../Screens/Search";

const Stack = createNativeStackNavigator();

export const MainNavigation = () => {
    return (
        <Stack.Navigator >

        <Stack.Screen name="Home" options={
          ({ navigation })=>({

            headerTransparent:true,
              headerLeft: ()=><NavbarHomeLeft navigation={ navigation }/>,
              headerRight: () => <NavbarHomeRight navigation={ navigation }/>,
              title: ""

            })} 
            component={Home} />
  
        <Stack.Screen name="Detail" options={
          ({ navigation })=>({

              headerTransparent:true,
              headerRight: () => <Navbar navigation={ navigation } />,
              title:""
              
            })} 
            component={Details} />

        <Stack.Screen name="Search" options={
          ({ navigation })=>({

              headerTransparent:true,
              headerRight: () => <Navbar navigation={ navigation } />,
              title:""
              
            })} 
            component={Search} />
  
      </Stack.Navigator>        
    );
}

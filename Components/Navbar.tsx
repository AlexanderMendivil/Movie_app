import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";

export const NavbarHomeRight = ({navigation})  => {
      return (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Search');
          }}>
          <Icon color={"#fff"} size={30} name={'search-outline'} />
        </TouchableOpacity>
      );
    }

  export const NavbarHomeLeft = ({navigation}) => {
      return (
        <Image style={styles.logo} source={require('../Assets/images/movies.png')} />
      );
    }

export const Navbar = ({ navigation }) => {
    return (
        <SafeAreaProvider>
            <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                <Icon style={styles.Icon} name={"chevron-back"} size={30} color={"#fff"}/>
            </TouchableOpacity>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    logo:{
        width: 50,
        height: 50,
    },
    Icon: {
        paddingLeft: 15
    }
  });

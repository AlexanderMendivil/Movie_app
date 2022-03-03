import React from "react";
import { StyleSheet, Text, Platform, StatusBar, View, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";

export const Navbar = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                <Icon name={"chevron-back"} size={40} color={"#fff"}/>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    AndroidSafeArea: {
        // position:"absolute",
        // flex:1,
        height: 50,
        backgroundColor: "black",
        // top: 20
        headerMode:"screen"
    },
  
  });

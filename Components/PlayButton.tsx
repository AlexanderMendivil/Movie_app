import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "../Theme/Colors";

export const PlayButton = ({ handlePress }) => {
    return (
    <View>
        <Pressable onPress={()=>handlePress()} style={styles.button}>
            <Icon name="caret-forward-outline" size={30} color={Colors.white}/>
        </Pressable>
    </View>        
    );
}

const styles = StyleSheet.create({
    button:{
        alignContent: "center",
        borderRadius: 50,
        width: 50,
        padding: 10,
        backgroundColor: Colors.primary
    }
})
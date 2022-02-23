import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export const PlayButton = () => {
    return (
    <View>
        <Pressable style={styles.button}>
            <Icon name="caret-forward-outline" size={30} color="white"/>
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
        backgroundColor: "#4481FC"
    }
})
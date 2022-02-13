import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Error = ({ errorText1, errorText2 } : { errorText1:string, errorText2:string }) => {
    return (
      <View style={styles.container}>
          <Text style={styles.text}>{errorText1 || "Ooops something went wrong."}</Text>
          <Text style={styles.text}>{errorText2 || "Make sure you are online or restart."}</Text>
      </View>  
    );
}

const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontWeight: "bold"
    }
})
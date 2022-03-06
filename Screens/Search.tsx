import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
export const Search = () => {

    const [text, setText] = useState<string>("");

    const onSubmit = (query: string) =>{
        console.log(query);
    }

    return (
    <React.Fragment>
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.form}>
                    <TextInput style={styles.input} onChangeText={setText} value={text} placeholder={"Search movie or tv show."}/>
                </View>
                    <TouchableOpacity
                        onPress={() => {onSubmit(text)}}>
                        <Icon size={30} name={'search-outline'} />
                    </TouchableOpacity>
            </View>
        </SafeAreaView>
    </React.Fragment>
    );
}


const styles = StyleSheet.create({
    
    input:{

        height: 40,
        margin: 12,
        borderWidth: 0.5,
        borderRadius: 10,
        padding: 8
    },

    container:{
        padding: 10,
        paddingTop: 60,
        flexDirection: "row",
        alignItems: "center"
    },

    form:{
        flexBasis: "auto",
        flexGrow: 1,
        paddingRight: 8
    }
})
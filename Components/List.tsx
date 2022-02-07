import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import { Card } from "./Card";

export const List = ({ title ,data }) => {
    return (
        <View style={style.list}>
            <View>
                <Text style={style.text}>{ title }</Text>
            </View>
            <View>
                <FlatList 
                        data={data} 
                        renderItem={({ item })=>(<Card item={item}/>)} 
                        horizontal={true}/>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight: "bold",
        color: "black",
        paddingBottom: 20
    },
    list:{
        marginTop:25
    }
});
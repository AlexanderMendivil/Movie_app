import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import { MovieModel } from "../Models/MovieModel";


const placeHolderImage = require("../Assets/images/placeholder.png");

export const Card = ({ item }: { item: any }) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate("Detail",{movieDetail:item})}>
            <Image resizeMode="cover" source={
                item.poster_path ?
                {uri: "https://image.tmdb.org/t/p/w500"+item.poster_path}
                : 
                placeHolderImage
                } style={styles.movieImage} 
                />
                {!item.poster_path && (<Text style={styles.movieName}>{item.title}</Text>)}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 5,
        position: "relative",
        height: 200
    },
    movieImage:{
        height: 200,
        width: 120,
        borderRadius: 20
    },
    movieName:{
        position:"absolute",
        width: 100,
        textAlign:"center",
        alignSelf: "center",
        top: 10
    }
})
import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";

export const Card = ({ item }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image resizeMode="cover" source={{uri: "https://image.tmdb.org/t/p/w500"+item.poster_path}} style={styles.movieImage}></Image>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 5,
        position: "relative"
    },
    movieImage:{
        height: 200,
        width: 120,
        borderRadius: 20
    }
})
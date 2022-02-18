import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View, Dimensions, ActivityIndicator } from "react-native";
import { MovieDetailModel } from "../Models/MovieDetailModel";
import { getMovie } from "../services/services";


const placeHolderImage = require("../Assets/images/placeholder.png");
const height = Dimensions.get("screen").height;

export const Details = ({ route }) => {
    const movieId:number  = route.params.movieId;

    const [movieDetail, setMovieDetail] = useState<MovieDetailModel>({});
    const [ loaded, setLoaded ] = useState<boolean>(false);

    useEffect(()=>{
        getMovie( movieId ).then(( movieData: MovieDetailModel ) =>{
            setMovieDetail( movieData );
            setLoaded(true);
        })
    },[movieId])

    return (
    <React.Fragment>
        {
        loaded && (
        <ScrollView>
                <Image resizeMode="cover" source={
                movieDetail.poster_path ?
                {uri: "https://image.tmdb.org/t/p/w500"+movieDetail.poster_path}
                : 
                placeHolderImage
                } style={styles.movieImage} />
        </ScrollView>
        )}
        {!loaded &&(<ActivityIndicator size="large" color="#000000" />)}
    </React.Fragment>       
    );
}

const styles = StyleSheet.create({
    movieImage:{
        height: height/2,
    },
})
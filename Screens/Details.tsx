import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View, Dimensions, ActivityIndicator } from "react-native";
import { genre, MovieDetailModel } from "../Models/MovieDetailModel";
import { getMovie } from "../services/services";
import StarRating from "react-native-star-rating"

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
                <View style={styles.container}>
                <Text style={styles.movieTitle}>{movieDetail.title}</Text>
                {movieDetail.genres && (
                <View style={styles.genresContainer}>
                    {movieDetail.genres.map((genre: genre)=>{return (
                        <Text style={styles.genre} key={genre.id}>{genre.name}</Text>

                    )})}
                </View>
                )}
                <StarRating maxStars={5} rating={movieDetail.vote_average/2} disabled={true} fullStarColor={'gold'} starSize={30}/>
                </View>
        </ScrollView>
        )}
        {!loaded &&(<ActivityIndicator size="large" color="#000000" />)}
    </React.Fragment>       
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"    
    },

    movieImage:{
        height: height/2,
    },

    movieTitle:{
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 10,
    },

    genresContainer:{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20
    },
    genre:{
        marginRight: 10,
        marginLeft: 10,
        fontWeight: "bold"
    }
})
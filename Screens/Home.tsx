import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import { MovieModel } from '../Models/MovieModel';
import { getPopularMovies, getUpcomingMovies } from '../services/services';


import { SliderBox } from "react-native-image-slider-box";

const dimension = Dimensions.get("screen")
export const Home = () => {

    const [movieImages, setMovieImages] = useState<string[]>([])
    const [movies, setMovies] = useState<MovieModel[]>([])
    const [error, setError] = useState<string>("");
    useEffect(() => {

        getUpcomingMovies().then(() => {
            const moviesImagesArray:string[] = []
            movies.forEach((movie:MovieModel) =>{
                moviesImagesArray.push("https://image.tmdb.org/t/p/w500"+movie.poster_path)

            })
            setMovieImages(moviesImagesArray)

        }).catch(err=> {})

        getPopularMovies()
        .then((movie:MovieModel)=>{
          setMovies(JSON.parse(JSON.stringify(movie)))
        })
        .catch(()=>setError("There was a problem with the movies, sorry!"))

  },[])


    return (
        
        <View
            style={styles.sliderContainer}>
            <SliderBox 
                images={movieImages} 
                sliderBoxHeight={dimension.height/1.5} 
                autoplay={true}
                circleLoop={true}
                dotStyle={styles.sliderStyle}/>
        </View>
    );
}

const styles = StyleSheet.create({
    sliderContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems:"center"
    },
    sliderStyle:{
        height: 0
    }
})
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, FlatList } from "react-native";

import { MovieModel } from '../Models/MovieModel';
import { getPopularMovies, getUpcomingMovies } from '../services/services';


import { SliderBox } from "react-native-image-slider-box";
import { List } from "../Components/List";

const dimension = Dimensions.get("screen")
export const Home = () => {

    const [movieImages, setMovieImages] = useState<string[]>([])
    const [movies, setMovies] = useState<MovieModel[]>([])
    const [popularMovies, setPopularMovies] = useState<MovieModel[]>([])
    const [error, setError] = useState<string>("");
    useEffect(() => {

        getUpcomingMovies().then((movies:MovieModel[]) => {
            const moviesImagesArray:string[] = []
            movies.forEach((movie:MovieModel) =>{
                moviesImagesArray.push("https://image.tmdb.org/t/p/w500"+movie.poster_path)

            })
            setMovieImages(moviesImagesArray)

        }).catch(err=> {})

        getPopularMovies()
        .then((movies:MovieModel[])=>{
          setPopularMovies(movies)
        })
        .catch(()=>setError("There was a problem with the movies, sorry!"))

  },[])


    return (
        <React.Fragment>
            <View
                style={styles.sliderContainer}>
                <SliderBox 
                    images={movieImages} 
                    sliderBoxHeight={dimension.height/1.5} 
                    autoplay={true}
                    circleLoop={true}
                    dotStyle={styles.sliderStyle}/>
            </View>
            <View style={styles.carousel}>
                <List title="Mi titulo" data={popularMovies}/>
            </View>
        </React.Fragment>
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
    },
    carousel:{
        flex: 1,
        justifyContent: "center",
        alignItems:"center"
    },
})
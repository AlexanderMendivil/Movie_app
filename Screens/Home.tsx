import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, Alert } from "react-native";

import { MovieModel } from '../Models/MovieModel';
import { getFamilyMovies, getPopularMovies, getPopularTv, getUpcomingMovies } from '../services/services';


import { SliderBox } from "react-native-image-slider-box";
import { List } from "../Components/List";
import { tvModel } from "../Models/tvModel";

const dimension = Dimensions.get("screen")
export const Home = () => {

    const [movieImages, setMovieImages] = useState<string[]>([])
    const [popularMovies, setPopularMovies] = useState<MovieModel[]>([])
    const [tvSeries, setTvSeries] = useState<tvModel[]>([])
    const [familyMovies, setFamilyMovies] = useState<MovieModel[]>([])

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
        .catch( ()=> Alert.alert( "Warning!", "There was a problem with the movies, sorry!" ))

        getPopularTv()
        .then((series:tvModel[])=>{
            setTvSeries(series)
        })
        .catch( ()=> Alert.alert( "Warning!", "There was a problem with the movies, sorry!" ) )
        
        getFamilyMovies()
        .then((familyMov:MovieModel[])=>{
            setFamilyMovies(familyMov)
        })
        .catch( ()=> Alert.alert( "Warning!", "There was a problem with the movies, sorry!" ) )
  },[])


    return (
        <React.Fragment>
            <ScrollView>

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
                    <List title="Popular Movies" data={popularMovies} />
                </View>
                <View style={styles.carousel}>
                    <List title="Popular Tv Shows" data={tvSeries} />
                </View>
                <View style={styles.carousel}>
                    <List title="Family Movies" data={familyMovies} />
                </View>
                
            </ScrollView>
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
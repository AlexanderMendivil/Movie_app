import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, Alert } from "react-native";

import { MovieModel } from '../Models/MovieModel';
import { getDocumentaries, getFamilyMovies, getPopularMovies, getPopularTv, getUpcomingMovies } from '../services/services';


import { SliderBox } from "react-native-image-slider-box";
import { List } from "../Components/List";
import { tvModel } from "../Models/tvModel";

const dimension = Dimensions.get("screen")
export const Home = () => {

    const [movieImages, setMovieImages] = useState<string[]>([])
    const [popularMovies, setPopularMovies] = useState<MovieModel[]>([])
    const [tvSeries, setTvSeries] = useState<tvModel[]>([])
    const [familyMovies, setFamilyMovies] = useState<MovieModel[]>([])
    const [documentaries, setDocumentaries] = useState<MovieModel[]>([])

    const [error, setError] = useState<string>("");

    const getData =  () => {
        return Promise.all([
            getUpcomingMovies(),
            getPopularMovies(),
            getPopularTv(),            
            getFamilyMovies(),
            getDocumentaries()
        ]);
    }
    useEffect(() => {
        getData().then(( [ 
            upcomingMoviesData, 
            popularMoviesData, 
            popularTvData, 
            familyMoviesData, 
            documentariesMoviesData 
        ] )=>{
            const moviesImagesArray:string[] = []
            upcomingMoviesData.forEach((movie:MovieModel) =>{
                moviesImagesArray.push("https://image.tmdb.org/t/p/w500"+movie.poster_path)
                
            })
            setMovieImages(moviesImagesArray);
            setPopularMovies(popularMoviesData);
            setTvSeries(popularTvData);
            setFamilyMovies(familyMoviesData);
            setDocumentaries(documentariesMoviesData);
        }).catch((err)=>{setError(err.message)})
  },[])


    return (
        <React.Fragment>
            <ScrollView>

                {movieImages && 
                (<View
                    style={styles.sliderContainer}>
                    <SliderBox 
                        images={movieImages} 
                        sliderBoxHeight={dimension.height/1.5} 
                        autoplay={true}
                        circleLoop={true}
                        dotStyle={styles.sliderStyle}/>
                </View>
                )}
                {popularMovies && (<View style={styles.carousel}>
                    <List title="Popular Movies" data={popularMovies} />
                </View>)}
                {tvSeries && (<View style={styles.carousel}>
                    <List title="Popular Tv Shows" data={tvSeries} />
                </View>)}
                {familyMovies && (<View style={styles.carousel}>
                    <List title="Family Movies" data={familyMovies} />
                </View>)}
                {documentaries && (<View style={styles.carousel}>
                    <List title="Documentaries" data={documentaries} />
                </View>)}
                
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
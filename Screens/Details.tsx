import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View, Dimensions, ActivityIndicator, Modal, Pressable } from "react-native";
import { genre, MovieDetailModel } from "../Models/MovieDetailModel";
import { getMovie } from "../services/services";
import StarRating from "react-native-star-rating";
import dateFormat from "dateformat";
import VideoPlayer from "react-native-video-controls";

import { PlayButton } from "../Components/PlayButton";
import { useNavigation } from "@react-navigation/native";

const placeHolderImage = require("../Assets/images/placeholder.png");
const height = Dimensions.get("screen").height;

export const Details = ({ route }) => {
    const movieId:number  = route.params.movieId;
    
    const navigation = useNavigation()

    const [movieDetail, setMovieDetail] = useState<MovieDetailModel>({});
    const [ loaded, setLoaded ] = useState<boolean>(false);
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    useEffect(()=>{
        getMovie( movieId ).then(( movieData: MovieDetailModel ) =>{
            setMovieDetail( movieData );
            setLoaded(true);
        })
    },[movieId])
    
    const videoShown = ():void =>{
        setModalVisible(!modalVisible)
    }
    
    return (
    <React.Fragment>
        {
        loaded && (
        <View>

            <ScrollView>
                    <Image resizeMode="cover" source={
                    movieDetail.poster_path ?
                    {uri: "https://image.tmdb.org/t/p/w500"+movieDetail.poster_path}
                    : 
                    placeHolderImage
                    } style={styles.movieImage} />
                    <View style={styles.container}>
                        <View style={styles.playButton}>
                            <PlayButton handlePress={videoShown}/>
                        </View>
                    <Text style={styles.movieTitle}>{movieDetail.title}</Text>
                    {movieDetail.genres && (
                        <View style={styles.genresContainer}>
                        {movieDetail.genres.map((genre: genre)=>{return (
                            <Text style={styles.genre} key={genre.id}>{genre.name}</Text>

                            )})}
                    </View>
                    )}
                    <StarRating maxStars={5} rating={movieDetail.vote_average/2} disabled={true} fullStarColor={'gold'} starSize={30}/>
                    <Text style={styles.overview}>{movieDetail.overview}</Text>
                    <Text style={styles.release}>{"Release date: "+dateFormat(movieDetail.release_date, "mmmm, dd, yyyy")}</Text>
                    </View>
            </ScrollView>
            
            <Modal animationType="slide" visible={modalVisible}>
                <View style={styles.videoModal}>
                    
                    <VideoPlayer 
                    onBack={()=>{videoShown();}}
                    navigator={navigation}
                    source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
                    // navigator={this.props.navigator}
                    />
                    {/* <Pressable onPress={()=>videoShown()}>
                        <Text>Close</Text>
                    </Pressable> */}
                </View>
            </Modal>

        </View>
        )}
        {!loaded &&(<ActivityIndicator size="large" color="#000000" />)}
    </React.Fragment>       
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center" ,
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
    },

    overview:{
        padding: 15

    },

    release:{
        fontWeight: "bold"
    },

    playButton:{
        position: "absolute",
        top: -30,
        right: 10
    },

    videoModal:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
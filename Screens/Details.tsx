import React from "react";
import { Text, View } from "react-native";

export const Details = ({ route }) => {

    const movieDetail  = route.params.movieDetail;

    return (
    <React.Fragment>
        <Text>{movieDetail.title}</Text>
    </React.Fragment>       
    );
}
import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Card } from "../Components/Card";
import { searchMovieAndTv } from "../services/services";

export const Search = () => {

    const [text, setText] = useState<string>("");
    const [searchResults, setSearchResults] = useState<any>([]);

    const onSubmit = (query: string) =>{
        searchMovieAndTv(query, "movie").then(( searchData )=>{ 
            setSearchResults( searchData )});
    }

    return (
    <React.Fragment>
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.form}>
                    <TextInput style={styles.input} onChangeText={setText} value={text} placeholder={"Search movie or tv show."}/>
                </View>
                    <TouchableOpacity
                        onPress={() => {onSubmit(text)}}>
                        <Icon size={30} name={'search-outline'} />
                    </TouchableOpacity>
            </View>
            <View style={styles.searchItem}>
                {searchResults && searchResults.length > 0 && (
                    <FlatList
                        numColumns={3}
                        data={searchResults}
                        renderItem={({item})=>(<Card item={item}/>)}
                        keyExtractor={item => item.id}
                    />
                )}

                {searchResults && searchResults.length == 0 && (
                    <View style={styles.empty}>
                        <Text>No results matching your criteria.</Text>
                        <Text>Try different keywords.</Text>
                    </View>
                )}
                
                {!searchResults && (
                    <View style={styles.empty}>
                        <Text>Type something to start searching.</Text>
                    </View>
                )}

            </View>
        </SafeAreaView>
    </React.Fragment>
    );
}


const styles = StyleSheet.create({
    
    input:{

        height: 40,
        margin: 12,
        borderWidth: 0.5,
        borderRadius: 10,
        padding: 8
    },

    container:{
        padding: 10,
        paddingTop: 60,
        flexDirection: "row",
        alignItems: "center"
    },

    form:{
        flexBasis: "auto",
        flexGrow: 1,
        paddingRight: 8
    },

    searchItem:{
        padding: 5
    },

    empty:{

    }
})
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

const getPopularMovies = async () =>{
  const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=06346bd5142a8959b8b0e8df0606be39")
  return response.data.results
}

const App = () => {
  const [movies, setMovies] = useState<Object[]>([])
 
  useEffect(()=>{
    getPopularMovies().then((movie:Object[])=>{
      setMovies(movie)
    })
  },[])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Movie name: {movies[0].original_title || "titulo"}</Text>
      {/* <Text>Movie language: {JSON.stringify(movies[0].original_language) || "titulo"}</Text> */}
    </View>
  )
}
export default App;
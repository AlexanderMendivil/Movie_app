import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import axios from 'axios';
import { MovieModel } from './Models/MovieModel';
const getPopularMovies = async () =>{
  const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=06346bd5142a8959b8b0e8df0606be39")
  return response.data.results
}

const App = () => {

  const [movies, setMovies] = useState<MovieModel[]>([])
  const [error, setError] = useState<string>("");
  useEffect(() => {

    const result = getPopularMovies()
    result.then((movie:MovieModel[])=>{
      setMovies(JSON.parse(JSON.stringify(movie)))
    }).catch(()=>setError("There was a problem with the movies, sorry!"))

  },[])
 
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
        {error === ""?
      <Text>Movie name: {movies[10].original_title || "titulo"}</Text>
      :
      <Text>Error: {error}</Text>
        }
    </View>
  )
}
export default App;
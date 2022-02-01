import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import axios from 'axios';
import { MovieModel } from './Models/MovieModel';
import { getPopularMovies } from './services/services';

const App = () => {

  const [movies, setMovies] = useState<MovieModel[]>([])
  const [error, setError] = useState<string>("");
  useEffect(() => {

    const result = getPopularMovies()
    result.then((movie:MovieModel)=>{
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
      <Text>Movie name: {JSON.stringify(movies[11].original_title) || "titulo"}</Text>
      :
      <Text>Error: {error}</Text>
        }
    </View>
  )
}
export default App;
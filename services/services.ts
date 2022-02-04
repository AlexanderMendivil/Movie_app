
import axios from "axios"
import { MovieModel } from "../Models/MovieModel"

const URL_API:string = "https://api.themoviedb.org/3"
const API_KEY:string = "api_key=06346bd5142a8959b8b0e8df0606be39"

export const getPopularMovies = async ():Promise<MovieModel[]> => {
    const response = await axios.get(`${URL_API}/movie/popular?${API_KEY}`)
    return response.data.results

  }
  
export const getUpcomingMovies = async ():Promise<MovieModel[]> => {
    const response = await axios.get(`${URL_API}/movie/upcoming?${API_KEY}`)
    return response.data.results
      
    }
    
export const getPopularTv = async () => {
    const response = await axios.get(`${URL_API}/tv/popular?${API_KEY}`)
    return response.data.results
    
    }
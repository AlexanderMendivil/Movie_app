
import axios from "axios"
import { MovieDetailModel } from "../Models/MovieDetailModel"
import { MovieModel } from "../Models/MovieModel"
import { tvModel } from "../Models/tvModel"

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
    
export const getPopularTv = async ():Promise<tvModel[]> => {
    const response = await axios.get(`${URL_API}/tv/popular?${API_KEY}`)
    return response.data.results
    
    }

export const getFamilyMovies = async ():Promise<MovieModel[]> => {
    const response = await axios.get(`${URL_API}/discover/movie?${API_KEY}&with_genres=10751`)
    return response.data.results
    
    }

export const getDocumentaries = async ():Promise<MovieModel[]> => {
    const response = await axios.get(`${URL_API}/discover/movie?${API_KEY}&with_genres=99`)
    return response.data.results
    
    }

export const getMovie = async (id: number):Promise<MovieDetailModel> => {
    const response = await axios.get(`${URL_API}/movie/${id}?${API_KEY}`)
    return response.data
    
    }


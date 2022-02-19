export interface MovieDetailModel{
    adult: boolean,
    backdrop_path: string | null,
    belongs_to_collection: null | object,
    budget: number,
    genres: genre[],
    homepage: string | null,
    id: number,
    imdb_id: string | null,
    original_language: string,
    original_title: string,
    overview: string | null,
    popularity: number,
    poster_path: string | null,
    production_companies: any[]
    production_countries: any[]
    release_date: Date,
    revenue: number,
    runtime: number | null,
    spoken_languages: string[],
    status: string,
    tagline: string | null,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number

}

export interface genre{
    id: number,
    name: string
}
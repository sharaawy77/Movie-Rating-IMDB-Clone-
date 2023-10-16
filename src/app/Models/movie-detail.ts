export interface genres {
    id: number;
    name: string;
  }
  export interface Production_companies {
    id: number;
    name: string;
    logo_path:string;
    origin_country:string
  }
  export interface Production_countries {

    name: string;
    iso_3166_1:string;
    
  }
  export interface spoken_languages {
    english_name:string
    name: string;
    iso_639_1:string;
    
  }
  
  export interface Movie {
    adult:boolean;
    backdrop_path:string;
    id:number;
    title:string;
    original_language:string;
    original_title:string;
    overview:string;
    poster_path:string;
    media_type:string;
    genre_ids:number[];
    popularity:number;
    release_date:string;
    video:boolean;
    vote_average:number;
    vote_count:number;
  }
  
  export interface MovieDetail {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: string;
    budget: number;
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Production_companies[];
    production_countries: Production_countries[];
    genres: genres[];
    release_date: string;
    revenue: number;
    runtime: number;
    status: string;
    spoken_languages: spoken_languages[];
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
  
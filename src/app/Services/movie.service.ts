import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Movie, MovieDetail } from '../Models/movie-detail';
import { TrendMovie } from '../Models/trend-movie';
import { Review } from '../Models/review';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private readonly API_KEY = `9ccd7cf`;
  private readonly API_KEY_imdb = `e6da3b55adab1789c94e6a34261053df`;


  constructor(private http: HttpClient) { }

  searchMovie(searchQuery: string|null=null): Observable<Array<Movie>> {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?language=en-US&api_key=e6da3b55adab1789c94e6a34261053df&query=${searchQuery}`)
      .pipe(
        map((response: any) => response.results)
      );
  }

  getMovieDetails(imdbId: number): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(`https://api.themoviedb.org/3/movie/${imdbId}?language=en-US&api_key=e6da3b55adab1789c94e6a34261053df`);
  }
  getTrentingMovies(): Observable<Array<TrendMovie>> {
    return this.http.get(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=e6da3b55adab1789c94e6a34261053df`)
      .pipe(
        map((response: any) => response.results)
      );
  }
  getSimilarMovies(movieId:number): Observable<Array<Movie>> {
    return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1&api_key=e6da3b55adab1789c94e6a34261053df`)
      .pipe(
        map((response: any) => response.results)
      );
  }
  getAllReviews(movieid:number): Observable<Array<Review>> {
    
    return this.http.get(`https://api.themoviedb.org/3/movie/${movieid}/reviews?language=en-US&page=1&api_key=e6da3b55adab1789c94e6a34261053df`)
      .pipe(
        map((response: any) => response.results)
        
      );
  }

}

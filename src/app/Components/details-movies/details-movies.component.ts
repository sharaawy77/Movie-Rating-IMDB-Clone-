import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/Models/movie-detail';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-details-movies',
  templateUrl: './details-movies.component.html',
  styleUrls: ['./details-movies.component.css']
})
export class DetailsMoviesComponent implements OnInit {
  movieId:number=-1;
  similarmovies:Movie[]=[];
  

  constructor(private _activedrouted:ActivatedRoute,private readonly movieService: MovieService) {
    this._activedrouted.params.subscribe((p)=>{
      this.movieId=p["id"];
    })
    
}
  ngOnInit(): void {
    this.getSimilarMoviessResult();
  }

getSimilarMoviessResult(){
  this.movieService.getSimilarMovies(this.movieId).subscribe(
    (movies)=>{
      for (let index = 7; index < 12; index++) {
        this.similarmovies.push(movies[index]);
        
      }
    }
  )
}
}

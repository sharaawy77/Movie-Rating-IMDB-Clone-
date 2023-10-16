import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/Models/movie-detail';
import { TrendMovie } from 'src/app/Models/trend-movie';

import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit  {

  query: string|null=null;
  movies$: Array<Movie>|null=null;


  constructor(private router:Router,private _activatedRoute:ActivatedRoute,private readonly movieService: MovieService) {
    this._activatedRoute.paramMap.subscribe((ParamMap)=>{
      if(this.query!=ParamMap.get('movieTitle')){
        this.query=ParamMap.get('movieTitle');
      }
      

    });
  }
  ngOnInit(): void {
    this.getSearchResults();
    
    
  }
  getSearchResults() {
     this.movieService.searchMovie(this.query).subscribe((movies)=>
    this.movies$=movies
    );
    
  }
 
  

 


}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Movie, MovieDetail } from 'src/app/Models/movie-detail';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  movieId:number=-1;
  

  movieDetail:MovieDetail|null=null;
  constructor(private _activedrouted:ActivatedRoute,private readonly movieService: MovieService) {
   this._activedrouted.paramMap.subscribe((params)=>{
    this.movieId=Number(params.get('id'));
   })
    
  }
  ngOnInit(): void {
    this.getSearchResult();
    
  }
  getSearchResult() {
     this.movieService.getMovieDetails(this.movieId).subscribe((movie)=>
    this.movieDetail=movie
    );
  }
  
}

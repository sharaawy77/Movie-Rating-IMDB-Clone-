import { Component, OnInit } from '@angular/core';
import { TrendMovie } from 'src/app/Models/trend-movie';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Trendsmovies: TrendMovie[] = [];
  AvailableTrendsmovies: TrendMovie[] = [];
  LastestTrendsmovies: TrendMovie[] = [];



  constructor(private movieService: MovieService) {


  }
  ngOnInit(): void {
    this.getTrentingMoviess();
  }
  getTrentingMoviess() {
    this.movieService.getTrentingMovies().subscribe(
      (moviees) => {
        for (let index = 6; index < 14; index++) {
          this.Trendsmovies.push(moviees[index]);
        };
        for (let index = 0; index < 3; index++) {
          this.AvailableTrendsmovies.push(moviees[index]);
        }
        for (let index = 3; index < 6; index++) {
          this.LastestTrendsmovies.push(moviees[index]);
        }
      }
    )

  }

}

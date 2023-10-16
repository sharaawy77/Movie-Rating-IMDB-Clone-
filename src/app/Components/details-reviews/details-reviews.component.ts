import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from 'src/app/Models/review';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-details-reviews',
  templateUrl: './details-reviews.component.html',
  styleUrls: ['./details-reviews.component.css']
})
export class DetailsReviewsComponent implements OnInit {
  movieId:number=-1;
  Reviews:Review[]=[];
  
  constructor(private _activedrouted:ActivatedRoute,private readonly movieService: MovieService) {
    this._activedrouted.params.subscribe((p)=>{
      this.movieId=p["id"];
    })
    
}
  ngOnInit(): void {
    this.getSimilarMoviessResult();
    
  }
  getSimilarMoviessResult(){
    this.movieService.getAllReviews(this.movieId).subscribe(
      (reviews)=>{
        for (let index = 0; index < 3; index++) {
          this.Reviews.push(reviews[index]);
           

        }
      }
    )

  }

}

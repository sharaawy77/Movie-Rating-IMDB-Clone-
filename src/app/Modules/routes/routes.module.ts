import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { DetailsActorsComponent } from 'src/app/Components/details-actors/details-actors.component';
import { DetailsMoviesComponent } from 'src/app/Components/details-movies/details-movies.component';
import { DetailsReviewsComponent } from 'src/app/Components/details-reviews/details-reviews.component';
import { DetailsComponent } from 'src/app/Components/details/details.component';
import { HomeComponent } from 'src/app/Components/home/home.component';
import { FeedBackComponent } from 'src/app/Components/feed-back/feed-back.component';
import { SearchComponent } from 'src/app/Components/search/search.component';
import { NotFoundComponent } from 'src/app/Components/not-found/not-found.component';

const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'details/:id',component:DetailsComponent},
  {path:'details/actors/:id',component:DetailsActorsComponent},
  {path:'details/movies/:id',component:DetailsMoviesComponent},
  {path:'details/reviews/:id',component:DetailsReviewsComponent},
  {path:'feedback',component:FeedBackComponent},
  {path:'Search/:movieTitle',component:SearchComponent},


  {path:'**',component:NotFoundComponent},




  

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[ RouterModule]
})
export class RoutesModule { }

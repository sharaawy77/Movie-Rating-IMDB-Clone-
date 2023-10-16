import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { DetailsComponent } from './Components/details/details.component';
import { DetailsActorsComponent } from './Components/details-actors/details-actors.component';
import { DetailsReviewsComponent } from './Components/details-reviews/details-reviews.component';
import { NotAuthComponent } from './Components/not-auth/not-auth.component';
import { SearchComponent } from './Components/search/search.component';
import { LoadingComponent } from './Components/loading/loading.component';
import { ModelComponent } from './Components/model/model.component';
import { FormsModule } from '@angular/forms';
import { DetailsMoviesComponent } from './Components/details-movies/details-movies.component';
import { RouterModule } from '@angular/router';
import { RoutesModule } from './Modules/routes/routes.module';
import { FeedBackComponent } from './Components/feed-back/feed-back.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    DetailsComponent,
    DetailsActorsComponent,
    DetailsReviewsComponent,
    NotAuthComponent,
    SearchComponent,
    LoadingComponent,
    ModelComponent,
    DetailsMoviesComponent,
    FeedBackComponent,
    NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutesModule,
    FormsModule,
    HttpClientModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

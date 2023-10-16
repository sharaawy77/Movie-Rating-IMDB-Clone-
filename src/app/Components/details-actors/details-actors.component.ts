import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-actors',
  templateUrl: './details-actors.component.html',
  styleUrls: ['./details-actors.component.css']
})
export class DetailsActorsComponent {
  movieId:number=-1;
  
  constructor(private _activedrouted:ActivatedRoute) {
    this._activedrouted.params.subscribe((p)=>{
      this.movieId=p["id"];
    })
    
}
}

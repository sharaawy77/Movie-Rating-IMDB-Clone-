import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
currentyear:number=new Date().getFullYear();
/**
 *
 */
constructor() {
 

}
}

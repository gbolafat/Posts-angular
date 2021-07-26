import { Component } from '@angular/core';
import { FavouriteChangedArgs } from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 post = {
   title:"Title",
   isFavorite: true
 }
 onInputChange(evtArg: FavouriteChangedArgs ) {
   console.log("input changed", evtArg);
   
 }
}

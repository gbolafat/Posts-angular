import { Component,  Input,Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent  {
 @Input('isFavorite') isSelected: boolean;
@Output('change') click= new EventEmitter
 imgurl = `https://via.placeholder.com/150`
 imgurl2 = `https://via.placeholder.com/300`

  constructor() { }

 
  onClick() {
    this.isSelected = !this.isSelected;
    this.click.emit({newObj: this.isSelected});
  }

}

export interface FavouriteChangedArgs {
  newValue :boolean;
}

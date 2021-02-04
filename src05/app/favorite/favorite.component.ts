import { Component, OnInit, Input , Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('isFavorite') isFavorite: boolean;
  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.isFavorite=!this.isFavorite;   
    console.log('IS favorite value:' + this.isFavorite);
    this.change.emit();
  }

}

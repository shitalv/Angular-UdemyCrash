import { Component } from '@angular/core';
import { FavoriteComponent } from './favorite/favorite.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn-s05-app';
  post={
    title:"Title",
    isFavorite:true
  }
  onFavoriteChanged(){
    console.log("fav changed")
  }
}

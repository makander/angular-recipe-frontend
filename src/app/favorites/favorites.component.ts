import { Component, OnInit, OnDestroy } from "@angular/core";
import { FavoritesService } from "../favorites.service";
import { Subscription } from 'rxjs';



@Component({
  selector: "app-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.css"]
})
export class FavoritesComponent implements OnInit {
  constructor(private FavoritesService: FavoritesService) {}

  savedRecipes: any[] = [];
  subscription$: Subscription;

/*   getFavoriteRecipes() {
    this.FavoritesService.getFavoriteRecipes().subscribe(data => {
      console.log(data);
      this.savedRecipes = data;
    });
  } */

  deleteRecipe(recipeId) {
    this.FavoritesService.deleteRecipeData(recipeId);
  }

  ngOnInit() {
    this.subscription$ = this.FavoritesService.getFavoriteRecipes().subscribe(data => {
      console.log(data);
      this.savedRecipes = data;
    });
  }
  

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
 }


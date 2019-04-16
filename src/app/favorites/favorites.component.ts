import { Component, OnInit, OnDestroy } from "@angular/core";
import { FavoritesService } from "../favorites.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.css"]
})
export class FavoritesComponent implements OnInit {
  constructor(private FavoritesService: FavoritesService) {}

  savedRecipes: any[] = [];
  recipies$: Subscription;
  delete$: Subscription;

  deleteRecipe(recipeId) {
    this.FavoritesService.deleteRecipe(recipeId).subscribe(data => {
      this.savedRecipes = data;
    });
  }

  ngOnInit() {
    this.recipies$ = this.FavoritesService.getFavoriteRecipes().subscribe(
      data => {
        this.savedRecipes = data;
      }
    );
  }

  ngOnDestroy() {
    this.recipies$.unsubscribe();
  }
}

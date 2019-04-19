import { Component, OnInit, OnDestroy } from "@angular/core";
import { FavoritesService } from "../favorites.service";
import { Subscription } from "rxjs";
import { TokenServiceService } from "../token-service.service";

@Component({
  selector: "app-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.css"]
})
export class FavoritesComponent implements OnInit, OnDestroy {
  getToken: any;
  constructor(
    private FavoritesService: FavoritesService,
    private Token: TokenServiceService
  ) {}

  savedRecipes = [];
  recipies$: Subscription;

  deleteRecipe(recipeId) {
    this.FavoritesService.deleteRecipe(recipeId).subscribe(
      data => (this.savedRecipes = data),
      error => console.log(error)
    );
  }

  ngOnInit() {
    this.recipies$ = this.FavoritesService.getFavoriteRecipes().subscribe(
      data => (this.savedRecipes = data),
      error => console.log(error)
    );
  }

  ngOnDestroy() {
    this.recipies$.unsubscribe();
  }
}

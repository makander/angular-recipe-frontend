import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class FavoritesService {
  constructor() {}

  favoriteRecipes = [];

  saveRecipes(recipeId: string) {
    this.favoriteRecipes.push(recipeId);
    console.log(recipeId);
  }
}

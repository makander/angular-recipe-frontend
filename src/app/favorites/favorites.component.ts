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
  subscription$: Subscription;

  deleteRecipe(recipeId) {
    this.FavoritesService.deleteRecipe(recipeId).subscribe(data => {
      console.log(data);
      this.savedRecipes = data;
    });
  }

  ngOnInit() {
    this.subscription$ = this.FavoritesService.getFavoriteRecipes().subscribe(
      data => {
        console.log(data);
        this.savedRecipes = data;
      }
    );
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}

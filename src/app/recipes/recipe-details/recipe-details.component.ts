import { Component, OnInit } from "@angular/core";
import { RecipeService } from "../recipe-service.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { RecipeDetails } from "../recipeDetails";
import { FavoritesService } from "../../favorites.service";
import { AuthServiceService } from "src/app/auth-service.service";

@Component({
  selector: "app-recipe-details",
  templateUrl: "./recipe-details.component.html",
  styleUrls: ["./recipe-details.component.css"]
})
export class RecipeDetailsComponent implements OnInit {
  recipeDetails: RecipeDetails;
  public userLoggedIn: boolean;
  constructor(
    private route: ActivatedRoute,
    private RecipeService: RecipeService,
    private location: Location,
    private FavoritesService: FavoritesService,
    private Auth: AuthServiceService
  ) {}

  ngOnInit() {
    this.getRecipe();
    this.Auth.authStatus.subscribe(value => (this.userLoggedIn = value));
  }
  getRecipe(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.RecipeService.getRecipe(id).subscribe(data => {
      this.recipeDetails = data;
    });
  }

  saveToFavorites(recipeId, recipeName, imageUrl) {
    this.FavoritesService.saveRecipe(
      recipeId,
      recipeName,
      imageUrl
    ).subscribe();
  }

  goBack(): void {
    this.location.back();
  }
}

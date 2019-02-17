import { Component, OnInit } from "@angular/core";
import { RecipeService } from "../recipe-service.service";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  searchString: string;
  recipes: Recipe[];

  constructor(private RecipeService: RecipeService) {}

  handleRecipesSearch = () => {
    this.RecipeService.getRecipes(this.searchString).subscribe(data => {
      this.recipes = data.matches;
      console.log(this.recipes);
    });
  };

  ngOnInit() {
  }
}

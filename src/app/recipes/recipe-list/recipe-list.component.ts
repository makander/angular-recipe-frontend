import { Component, OnInit } from "@angular/core";
import { RecipeService } from "../recipe-service.service";
import { RecipeDetails } from "../recipeDetails";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  searchString: string;
  recipes = [];

  constructor(private RecipeService: RecipeService) {}

  handleRecipesSearch = () => {
    this.RecipeService.getRecipes(this.searchString).subscribe(data => {
      this.recipes = data.matches;
      console.log(this.recipes);
    });
  };

  ngOnInit() {}
}

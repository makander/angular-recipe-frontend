import { Component, Input } from '@angular/core';
import { RecipeService } from './recipes/recipe-service.service';
import { Recipe } from './recipes/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-app-frontend-makander';
  searchString: string; 
  recipes: Recipe[];

  constructor(private RecipeService: RecipeService)
   {}

  handleRecipeClick = () => {
    this.RecipeService.getRecipe(this.searchString)
    .subscribe(data => {
      this.recipes = data.matches;
    }); 
  }
}
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Recipe } from "./recipeSearch";
import { RecipeDetails } from "./recipeDetails";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  constructor(private http: HttpClient) {}

  getRecipe(id): Observable<RecipeDetails> {
    let yummlyApiKey = "265eb398f3aef5a718cbcad8c3ecfac2";
    let yummlyAppId = "e00f2385";
    let yummlyBasePath = "http://api.yummly.com/v1/api/recipe/";
    let yummlyParams = `${id}?_app_id=${yummlyAppId}&_app_key=${yummlyApiKey}`;
    let yummlyRecipeUrl = `${yummlyBasePath}${yummlyParams}`;
    console.log("this is the recipe detail" + " " + yummlyRecipeUrl);
    return this.http.get<RecipeDetails>(yummlyRecipeUrl);
  }

  getRecipes(searchString: string, options?:string): Observable<Recipe> {

    let yummlyApiKey = "265eb398f3aef5a718cbcad8c3ecfac2";
    let yummlyAppId = "e00f2385";
    let yummlyBasePath = "http://api.yummly.com/v1/api/recipes?";
    let yummlyQueryParams = `_app_id=${yummlyAppId}&_app_key=${yummlyApiKey}&q=${searchString}${options}&maxResult=25&start=10`.replace(/,/g, '');
    let yummlyURL = `${yummlyBasePath}${yummlyQueryParams}&requirePictures=true`;
    console.log(yummlyURL);
    return this.http.get<Recipe>(yummlyURL);
  }
}

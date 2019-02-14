import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Recipe } from './recipe.model'; 

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

    getRecipe(searchString) : Observable<any>{
      
      let yummlyApiKey = '265eb398f3aef5a718cbcad8c3ecfac2';
      let yummlyAppId = 'e00f2385';
      let yummlyBasePath = 'http://api.yummly.com/v1/api/recipes?'
      let yummlyQueryParams = `_app_id=${yummlyAppId}&_app_key=${yummlyApiKey}&q=${searchString}`;
      let yummlyURL = `${yummlyBasePath}${yummlyQueryParams}`; 
      return this.http.get<Recipe>(yummlyURL);
    }
  }

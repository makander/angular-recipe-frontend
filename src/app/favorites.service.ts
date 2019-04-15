import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class FavoritesService {
  constructor(private http: HttpClient) {}

  private baseUrl = "http://recipe.test/api/auth";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      Authorization: "Bearer " + localStorage.getItem("token")
    })
  };

  saveRecipes(recipeId, recipeName, imageUrl) {
    const body = {
      yummly_recipe_id: recipeId,
      recipe_name: recipeName,
      image_url: imageUrl
    };
    this.addRecipe(body).subscribe();
  }

  addRecipe(data) {
    console.log(data);
    console.log(typeof data + 'this is the type when adding');
    return this.http.post(`${this.baseUrl}/recipes/`, data, this.httpOptions);
  }

  getFavoriteRecipes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/recipes/`, this.httpOptions) ;
  }

  deleteRecipeData(recipeId) {
     this.deleteRecipe(recipeId).subscribe();
  }

  deleteRecipe(data)  {
    console.log(data);
    console.log(typeof data + 
      'this is the type');
    return this.http.delete(`${this.baseUrl}/recipes/${data}`, this.httpOptions);
  }

}

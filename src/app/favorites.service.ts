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

  saveRecipe(recipeId, recipeName, imageUrl) {
    const body = {
      yummly_recipe_id: recipeId,
      recipe_name: recipeName,
      image_url: imageUrl
    };
    return this.http.post(`${this.baseUrl}/recipes/`, body, this.httpOptions);
  }

  getFavoriteRecipes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/recipes/`, this.httpOptions);
  }

  deleteRecipe(recipeId): Observable<any> {
    console.log(recipeId);
    console.log(typeof recipeId + "this is the type");
    return this.http.delete(
      `${this.baseUrl}/recipes/${recipeId}`,
      this.httpOptions
    );
  }
}

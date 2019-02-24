import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FavoritesService {
  constructor(private http: HttpClient) {}

  private baseUrl = "http://localhost:8000/api/auth/recipes/";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      Authorization: "Bearer " + localStorage.getItem("token")
    })
  };

  saveRecipes(recipeId, recipeName, imageUrl) {
    const body1 = {
      yummly_recipe_id: recipeId,
      recipe_name: recipeName,
      image_url: imageUrl
    };
    this.addRecipe(body1).subscribe();
  }

  addRecipe(data) {
    console.log(data);
    console.log(typeof data);

    return this.http.post(`${this.baseUrl}`, data, this.httpOptions);
  }
}

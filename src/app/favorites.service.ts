import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FavoritesService {
  constructor(private http: HttpClient) {}

  private baseUrl = "http://localhost:8000/api/auth/recipes/store";
  //favoriteRecipes = [];
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      Authorization: "Bearer " + localStorage.getItem("token")
    })
  };

  saveRecipes(recipeId, recipeName, imageUrl) {
    const body1 = {
      recipe_id: recipeId,
      yummly_recipe_id: recipeName,
      image_url: imageUrl
    };
    return body1;
  }

  sendRequest() {
    return this.http
      .post(this.baseUrl, this.saveRecipes, this.httpOptions)
      .subscribe();
  }
}

//  const addRequest = this.http.post(this.baseUrl, this.saveRecipes, this.httpOptions);
//  addRequest.subscribe();

//   //this.favoriteRecipes.push(recipeId);
//   console.log(recipeId, recipeName);
//   return this.http
//     .post(this.baseUrl, {
//       yummly_recipe_id: recipeId,
//       recipe_name: recipeName,
//       image_url: imageUrl,
//       this.httpOptions
//     })
//     .subscribe

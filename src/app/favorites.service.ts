import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TokenServiceService } from "./token-service.service";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root"
})
export class FavoritesService {
  constructor(private http: HttpClient, private Token: TokenServiceService) {}

  saveRecipe(recipeId, recipeName, imageUrl) {
    const body = {
      yummly_recipe_id: recipeId,
      recipe_name: recipeName,
      image_url: imageUrl
    };
    return this.http.post(`${environment.baseurl}/recipes`, body, {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this.Token.getToken()
      })
    });
  }
  getFavoriteRecipes() {
    return this.http.get<any>(`${environment.baseurl}` + "/recipes", {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this.Token.getToken()
      })
    });
  }

  deleteRecipe(recipeId) {
    return this.http.delete<any>(`${environment.baseurl}/recipes/${recipeId}`, {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this.Token.getToken()
      })
    });
  }
}

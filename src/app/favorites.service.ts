// import { Injectable } from "@angular/core";
// import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { Observable } from "rxjs";
// import { map } from "rxjs/operators";
// import { TokenServiceService } from "./token-service.service";

// @Injectable({
//   providedIn: "root"
// })
// export class FavoritesService {
//   constructor(private http: HttpClient, private Token: TokenServiceService) {}

//   private baseUrl = "http://recipe.test/api/auth";
//   public httpOptions = {
//     headers: new HttpHeaders({
//       "Content-Type": "application/json",
//       "X-Requested-With": "XMLHttpRequest",
//       Authorization: "Bearer" + this.Token.getToken()
//     })
//   };

//   saveRecipe(recipeId, recipeName, imageUrl) {
//     const body = {
//       yummly_recipe_id: recipeId,
//       recipe_name: recipeName,
//       image_url: imageUrl
//     };
//     return this.http.post(`${this.baseUrl}/recipes/`, body, this.httpOptions);
//   }

//   getFavoriteRecipes() {
//     return this.http.get<any>(this.baseUrl + "/recipes/", {
//       headers: new HttpHeaders({
//         Authorization: "Bearer " + this.Token.getToken()
//       })
//     });
//   }

//   deleteRecipe(recipeId): Observable<any> {
//     console.log(recipeId);
//     console.log(typeof recipeId + "this is the type");
//     return this.http.delete(
//       `${this.baseUrl}/recipes/${recipeId}`,
//       this.httpOptions
//     );
//   }
// }

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
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
    return this.http.post(`${environment.baseurl}/recipes/`, body, {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this.Token.getToken()
      })
    });
  }
  getFavoriteRecipes() {
    return this.http.get<any>(`${environment.baseurl}` + "/recipes/", {
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

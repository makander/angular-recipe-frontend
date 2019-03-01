import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class FavoritesService {
  constructor(private http: HttpClient) {}

  private baseUrl = "http://localhost:8000/api/auth";
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

    return this.http.post(`${this.baseUrl}/recipes/`, data, this.httpOptions);
  }

  getFavoriteRecipes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/recipes/`);
  }
  // // Fetch all existing comments
  // getComments(): Observable<Comment[]> {
  //   // ...using get request
  //   return (
  //     this.http
  //       .get(this.commentsUrl)
  //       // ...and calling .json() on the response to return data
  //       .map((res: Response) => res.json())
  //       //...errors if any
  //       .catch((error: any) =>
  //         Observable.throw(error.json().error || "Server error")
  //       )
  //   );
  // }

  // getRecipes(searchString: string, options?:string): Observable<Recipe> {

  //   let yummlyApiKey = "265eb398f3aef5a718cbcad8c3ecfac2";
  //   let yummlyAppId = "e00f2385";
  //   let yummlyBasePath = "http://api.yummly.com/v1/api/recipes?";
  //   let yummlyQueryParams = `_app_id=${yummlyAppId}&_app_key=${yummlyApiKey}&q=${searchString}${options}&maxResult=25&start=10`.replace(/,/g, '');
  //   let yummlyURL = `${yummlyBasePath}${yummlyQueryParams}&requirePictures=true`;
  //   console.log(yummlyURL);
  //   return this.http.get<Recipe>(yummlyURL);
  // }
}

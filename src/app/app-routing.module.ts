import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeDetailsComponent } from "./recipes/recipe-details/recipe-details.component";
import { FavoritesComponent } from "./recipes/favorites/favorites.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
  { path: "", component: RecipeListComponent },
  { path: "recipe/:id", component: RecipeDetailsComponent },
  { path: "favorites", component: FavoritesComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "profile", component: ProfileComponent }
  //{ path: '', component: RecipeListComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

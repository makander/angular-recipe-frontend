import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeDetailsComponent } from "./recipes/recipe-details/recipe-details.component";
import { FavoritesComponent } from "./favorites/favorites.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AfterLoginService } from "./after-login.service";
import { BeforeLoginService } from "./before-login.service";

const routes: Routes = [
  { path: "", component: RecipeListComponent },
  { path: "recipe/:id", component: RecipeDetailsComponent },
  {
    path: "favorites",
    component: FavoritesComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent,
    canActivate: [BeforeLoginService]
  },
  { path: "logout", redirectTo: "", component: RecipeListComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

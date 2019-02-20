import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeDetailsComponent } from "./recipes/recipe-details/recipe-details.component";
import { FavoritesComponent } from "./recipes/favorites/favorites.component";

const routes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  { path: "recipes", component: RecipeListComponent },
  { path: "recipes/:id", component: RecipeDetailsComponent },
  { path: "favorites", component: FavoritesComponent }
  //{ path: '', component: RecipeListComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

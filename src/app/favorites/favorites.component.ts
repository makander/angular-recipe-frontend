import { Component, OnInit } from "@angular/core";
import { FavoritesService } from "../favorites.service";

@Component({
  selector: "app-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.css"]
})
export class FavoritesComponent implements OnInit {
  constructor(private FavoritesService: FavoritesService) {}

  getFavoriteRecipes() {
    // this.FavoritesService.getFavoriteRecipes();
    console.log("lololol");
  }

  ngOnInit() {}
}

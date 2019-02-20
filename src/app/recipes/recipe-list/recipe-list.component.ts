import { Component, OnInit } from "@angular/core";
import { RecipeService } from "../recipe-service.service";
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn
} from "@angular/forms";
import { FavoritesService } from "../favorites.service";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  form: FormGroup;
  searchString;

  recipes = [];
  allergies = [
    { id: "&allowedAllergy[]=394^Peanut-Free", name: "Peanut" },
    { id: "&allowedAllergy[]=396^Dairy-Free", name: "Dairy" },
    { id: "&allowedAllergy[]=400^Soy-Free", name: "Soy" },
    { id: "&allowedAllergy[]=395^Tree+Nut-Free", name: "Tree Nut" },
    { id: "&allowedAllergy[]=397^Egg-Free", name: "Egg" },
    { id: "&allowedAllergy[]=398^Seafood-Free", name: "Seafood" },
    { id: "&allowedAllergy[]=401^Sulfite-Free", name: "Sulfite" },
    { id: "&allowedAllergy[]=392^Wheat-Free", name: "Wheat" },
    { id: "&allowedAllergy[]=393^Gluten-Free", name: "Gluten" },
    { id: "&allowedAllergy[]=399^Sesame-Free", name: "Sesame" }
  ];

  courses = [
    { id: "&allowedCourse[]=course^course-Appetizers", name: "Appetizers" },
    { id: "&allowedCourse[]=course^course-Desserts", name: "Desserts" },
    { id: "&allowedCourse[]=course^course-Breads", name: "Breads" },
    { id: "&allowedCourse[]=course^course-Appetizers", name: "Breakfast" },
    { id: "&allowedCourse[]=course^course-Soups", name: "Soups" },
    { id: "&allowedCourse[]=course^course-Beverages", name: "Beverages" },
    { id: "&allowedCourse[]=course^course-Cocktails", name: "Cocktails" },
    {
      id: "&allowedCourse[]=course^course-",
      name: "Condiments and Sauces"
    },
    { id: "&allowedCourse[]=course^course-", name: "Side Dishes" },
    { id: "&allowedCourse[]=course^course-", name: "Lunch" },
    { id: "&allowedCourse[]=course^course-", name: "Mains" }
  ];

  // Main Dishes, Desserts, Side Dishes, Lunch and Snacks, Appetizers, Salads, Breads, Breakfast and Brunch, Soups, Beverages, Condiments and Sauces, Cocktails

  constructor(
    private RecipeService: RecipeService,
    private FavoritesService: FavoritesService,
    private formBuilder: FormBuilder
  ) {
    const controls = this.allergies.map(c => new FormControl(false));
    this.form = this.formBuilder.group({
      allergies: new FormArray(controls),
      searchString: this.searchString
    });
  }

  handleRecipesSearch = () => {
    let allergies = this.form.value.allergies
      .map((v, i) => (v ? this.allergies[i].id : null))
      .filter(v => v !== null);
    let searchString = this.form.value.searchString;
    console.log(searchString);

    this.RecipeService.getRecipes(searchString, allergies).subscribe(data => {
      this.recipes = data.matches;
      console.log(this.recipes);
      console.log(allergies);
      console.log(searchString);
      console.log(this.RecipeService.getRecipe);
    });
  };

  saveToFavorites(id) {
    this.FavoritesService.saveRecipes(id);
  }

  ngOnInit() {}
}

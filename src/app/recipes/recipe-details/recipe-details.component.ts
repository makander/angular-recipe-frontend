import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe-service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipeDetails: any[];

  constructor( private route: ActivatedRoute,
    private RecipeService: RecipeService,
    private location: Location) { }

  ngOnInit() {
    this.getRecipe();
  }
  getRecipe(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.RecipeService.getRecipe(id)
      .subscribe(data => {
        this.recipeDetails = data;
        console.log(this.recipeDetails);
      });
  }
}

export class Recipe {

    recipeName: string; 
    course: string;
    ingredients: string[];
    image: string;

   constructor(recipeName: string, course: string, ingredients: [], image: string) {
     this.recipeName = recipeName;
     this.course = course;
     this.ingredients = ingredients;
     this.image = image;
   }

}

export class Recipe {

    public recipeName: string; 
    public course: string;
    public ingredients: string[];
    public image: string;

   constructor(recipeName: string, course: string, ingredients: string[], image: string) {
     this.recipeName = recipeName;
     this.course = course;
     this.ingredients = ingredients;
     this.image = image;
   }

}

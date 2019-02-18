export interface RecipeDetails {
  yield: string;
  nutritionEstimates?: (NutritionEstimatesEntity)[] | null;
  prepTimeInSeconds: number;
  totalTime: string;
  images?: (ImagesEntity)[] | null;
  name: string;
  source: Source;
  prepTime: string;
  id: string;
  ingredientLines?: (string)[] | null;
  cookTime: string;
  attribution: Attribution;
  numberOfServings: number;
  totalTimeInSeconds: number;
  attributes: Attributes;
  cookTimeInSeconds: number;
  flavors: Flavors;
  rating: number;
}
export interface NutritionEstimatesEntity {
  attribute: string;
  description?: string | null;
  value: number;
  unit: Unit;
}
export interface Unit {
  id: string;
  name: string;
  abbreviation: string;
  plural: string;
  pluralAbbreviation: string;
  decimal: boolean;
}
export interface ImagesEntity {
  hostedSmallUrl: string;
  hostedMediumUrl: string;
  hostedLargeUrl: string;
  imageUrlsBySize: ImageUrlsBySize;
}
export interface ImageUrlsBySize {
  90: string;
  360: string;
}
export interface Source {
  sourceDisplayName: string;
  sourceSiteUrl: string;
  sourceRecipeUrl: string;
}
export interface Attribution {
  html: string;
  url: string;
  text: string;
  logo: string;
}
export interface Attributes {
  course?: (string)[] | null;
  cuisine?: (string)[] | null;
}
export interface Flavors {}
